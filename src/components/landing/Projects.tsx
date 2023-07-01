import ProjectsGrid from "./ProjectsGrid";
import Link from "next/link";
import { type TProject } from "~/types/projects";

const placeholderImgUrl = "/images/logos/ladao-bg.jpg";

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
    id: 6,
    imageUrl: placeholderImgUrl,
    name: "Frutero Club",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com/",
    link: { href: "https://ladao.club/poep", label: "Proof of Engagement" },
    shortDescription: "Comunidad Dev",
    tags: ["Comunidad"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full bg-[#1F4038] py-20 xl:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex flex-col items-start md:px-8 lg:w-2/5 lg:px-0">
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-ldPrimaryOrange-500 sm:text-4xl xl:leading-normal">
              DeFi Mexicano: Proyectos
            </h2>
            <p className="mt-4 font-spaceGrotesk text-xl font-semibold leading-7 text-ldBeigeWhite md:pl-2 md:pr-8 md:text-lg lg:pl-4 lg:pr-12 lg:text-xl">
              Queremos construir el ecosistema DeFi más integrado del mundo.{" "}
              <br />
              Estos son algunos de los proyectos de nuestra comunidad.
            </p>
            <p className="mt-4 font-spaceGrotesk text-xl font-semibold leading-7 text-ldBeigeWhite md:pl-2 md:pr-8 md:text-lg lg:pl-4 lg:pr-12 lg:text-xl">
              Haz click en ellos para conocer más, ¡o únete y agrega el tuyo!
            </p>
            <Link href="/proyectos" className="my-8 flex w-full justify-center">
              <button
                type="button"
                className="rounded-md bg-ldPrimaryOrange-500 py-2.5 font-spaceGrotesk text-lg font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:w-1/3 lg:w-1/2"
              >
                Agrega el tuyo
              </button>
            </Link>
          </div>
          <div className="my-4 md:flex md:flex-col md:items-center lg:w-3/5">
            <ProjectsGrid projects={projectsData} />
            <div className="w-full">
              <Link
                href="/proyectos"
                className="my-8 flex w-full justify-center"
              >
                <button
                  type="button"
                  className="rounded-md bg-[#FFFDF5] px-8 py-2 font-spaceGrotesk text-base font-medium text-primary hover:ring-2 hover:ring-inset hover:ring-primary"
                >
                  Ver más Proyectos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
