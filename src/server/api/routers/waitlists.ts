import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const waitlistsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.waitlistApplication.findMany();
  }),
  createWaitlistApplication: publicProcedure
    .input(
      z.object({
        applicantEmail: z.string().email().trim(),
        applicantEthAddress: z.string().trim().length(42),
        userId: z.string().trim().optional(),
        projectId: z.string().trim(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { applicantEmail, applicantEthAddress, userId, projectId } = input;

      const duplicates = await ctx.prisma.waitlistApplication.findMany({
        where: {
          OR: [{ applicantEmail }, { applicantEthAddress }],
        },
      });

      let message: string;
      if (duplicates.length > 0) {
        if (duplicates[0]?.applicantEmail === applicantEmail)
          message = "de correo electrónico";
        else message = "de Ethereum";

        throw new TRPCError({
          code: "CONFLICT",
          message: `Ya existe una solicitud con esa dirección ${message}.`,
        });
      }

      const project = await ctx.prisma.waitlistApplication.create({
        data: {
          applicantEmail,
          applicantEthAddress,
          userId,
          projectId,
        },
      });

      return project;
    }),
});
