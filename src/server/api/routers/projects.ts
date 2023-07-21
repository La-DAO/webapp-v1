import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email().trim(),
        name: z.string().trim().min(1).max(32),
        description: z.string().trim().min(20).max(140),
        isValidated: z.boolean().optional().default(false),
        tags: z.string().array().min(1),
        urlBanner: z.string().max(255).trim().optional(),
        urlProfile: z.string().max(255).trim().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const {
        email,
        name,
        description,
        isValidated,
        tags,
        urlBanner,
        urlProfile,
      } = input;

      const project = await ctx.prisma.project.create({
        data: {
          email,
          name,
          description,
          isValidated,
          tags,
          urlBanner,
          urlProfile,
        },
      });

      return project;
    }),
});
