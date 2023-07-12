/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Image from "next/image";
import { type TProject } from "~/types/projects";

type TProjectsGridProps = {
  projects: TProject[];
};

export default function ProjectsGrid({ projects }: TProjectsGridProps) {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
      {projects.map((project) => (
        <li
          key={project.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-[#FFFDF5] hover:cursor-pointer hover:ring-2 hover:ring-primary"
        >
          <div className="flex items-center gap-x-2 border-b border-gray-900/5 p-4">
            <Image
              src={project.imageUrl as string}
              alt={project.name}
              className="h-8 w-8 flex-none rounded-lg object-cover ring-1 ring-gray-900/10"
              width={64}
              height={64}
            />
            <h6 className="text-sm font-medium leading-6 text-gray-900">
              {project.name}
            </h6>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-4 py-2 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-ldJetBlack">{project.shortDescription}</p>
            </div>
            <div className="flex flex-wrap justify-between gap-x-2 gap-y-2 py-3">
              {project.tags.map((tag) => (
                <div
                  key={`${tag}_${project.id}`}
                  className="rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-primary"
                >
                  {tag}
                </div>
              ))}
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
