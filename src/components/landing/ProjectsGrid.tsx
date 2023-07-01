/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Image from "next/image";

const placeholderImgUrl = "/images/logos/ladao-bg.jpg";

export type TProject = {
  id: number;
  imageUrl?: HTMLImageElement | string;
  name: string;
  githubUrl?: string;
  twitterUrl?: string;
  link: { href: string; label: string };
  shortDescription: string;
  tags: string[];
};

const projectsData: TProject[] = [
  {
    id: 1,
    imageUrl: placeholderImgUrl,
    name: "$XOC | Xocolatl",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://xocolatl.finance", label: "xocolatl.finance" },
    shortDescription: "Moneda estable",
    tags: ["DeFi"],
  },
  {
    id: 2,
    imageUrl: placeholderImgUrl,
    name: "La DAO Club",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://ladao.club/membresia", label: "Obtén tu Membresía" },
    shortDescription: "Membresía NFT",
    tags: ["NFT"],
  },
  {
    id: 3,
    imageUrl: placeholderImgUrl,
    name: "Suarmi",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://suarmi.com", label: "suarmi.com" },
    shortDescription: "On-Off Ramp",
    tags: ["DeFi"],
  },
  {
    id: 4,
    imageUrl: placeholderImgUrl,
    name: "jMXN | Jarvis",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://jarvis.network/", label: "jarvis.network" },
    shortDescription: "Moneda Estable",
    tags: ["DeFi"],
  },
  {
    id: 5,
    imageUrl: placeholderImgUrl,
    name: "POEP | NFTs",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://ladao.club/poep", label: "Proof of Engagement" },
    shortDescription: "Coleccionables",
    tags: ["NFT"],
  },
  {
    id: 5,
    imageUrl: placeholderImgUrl,
    name: "Frutero Club",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://ladao.club/poep", label: "Proof of Engagement" },
    shortDescription: "Comunidad Dev",
    tags: ["Comunidad", "Builders"],
  },
];

export default function ProjectsGrid() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
      {projectsData.map((project) => (
        <li
          key={project.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-ldBeigeWhite"
        >
          <div className="flex items-center gap-x-2 border-b border-gray-900/5 p-4">
            <Image
              src={project.imageUrl as string}
              alt={project.name}
              className="h-8 w-8 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
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
                  className="rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
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
