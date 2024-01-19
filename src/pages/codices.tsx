import React from "react";
import DocsCard from "~/components/cards/LinksListCard";

const TECHNICAL_DOCS_LINKS = [
  // {
  //   name: "Whitepaper La DAO",
  //   href: "/whitepaper",
  //   isExternal: false,
  //   tags: ["whitepaper", "DAO", "Governance", "Tooling"],
  // },
  {
    name: "Whitepaper Xocolatl",
    href: "/pdf/xocolatl_whitepaper_v0.1.pdf",
    isExternal: true,

    tags: ["whitepaper", "DeFi"],
  },
  {
    name: "Wiki Contratos Xocolatl",
    href: "https://github.com/La-DAO/xocolatl-contracts/wiki",
    isExternal: true,
    tags: ["Contratos Inteligentes", "DeFi", "Wiki"],
  },
  {
    name: "Auditoría Ciberseguridad - Xocolatl",
    href: "https://github.com/La-DAO/xocolatl-contracts/tree/main/audits/cyberscope",
    isExternal: true,
    tags: ["DeFi", "Contratos Inteligentes", "Auditoría"],
  },
];

const LADAO_DOCS_LINKS = [
  {
    name: "Constitución, Visión y Estrategia",
    href: "https://ladao.notion.site/Constituci-n-Visi-n-y-Estrategia-8bd4892b068245aaa76cb4f53f7585fe?pvs=4",
    isExternal: true,
    tags: ["Contratos Inteligentes", "DeFi", "Wiki"],
  },
  {
    name: "Branding y Diseño",
    href: "https://ladao.notion.site/Branding-Dise-o-751440c7a85c436c9f534d85c962980f?pvs=4",
    isExternal: true,
    tags: ["DeFi", "Contratos Inteligentes", "Auditoría"],
  },
  {
    name: "Dev Hub",
    href: "https://ladao.notion.site/Dev-Hub-f1c328181e0e46c58a171e593edff407?pvs=4",
    isExternal: true,
    tags: ["Dev", "Projects"],
  },
  {
    name: "Minutas Semanales",
    href: "https://www.notion.so/ladao/f9a2a85de42c463bbb635f1e8b12eab7?v=a8a00bba85a84262af6fb81dc99baea4&pvs=4",
    isExternal: true,
    tags: ["DAO", "Governance"],
  },
];

const TECHNICAL_CONTENT_LINKS = [
  {
    name: "The Graph Client + React Tutorial",
    href: "https://lenstube.xyz/watch/0x01a4d1-0x50",
    isExternal: true,
    tags: ["Frontend", "React", "Dev", "The Graph"],
  },
  {
    name: "Integra Ledger a React",
    href: "https://ladao.notion.site/Integra-Ledger-a-React-8ce7db7ae7d44cf4b367f135fd5b2c7f?pvs=4",
    isExternal: true,
    tags: ["Frontend", "React", "Dev", "Ledger"],
  },
];

const GUIDES_LINKS = [
  {
    name: "Estrategia DeFi: Obtén XOC con xMATIC",
    href: "https://lenstube.xyz/watch/0x01a4d1-0x58",
    isExternal: true,
    tags: ["DeFi", "Tutorial", "Xocolatl", "Stader Labs"],
  },
  {
    name: "Cómo obtener ETH en red de prueba Goerli",
    href: "https://lenstube.xyz/watch/0x01a4d1-0x16",
    isExternal: true,
    tags: ["Dev", "Alchemy", "Goerli"],
  },
  {
    name: "Obtén un préstamo en GHO (Goerli)",
    href: "https://lenstube.xyz/watch/0x01a4d1-0x09",
    isExternal: true,
    tags: ["DeFi", "Aave", "GHO"],
  },
  {
    name: "Nouns Amigos: Crea tu primer propuesta",
    href: "https://lenstube.xyz/watch/0x01a4d1-0x0a",
    isExternal: true,
    tags: ["Nouns", "Nouns Amigos", "Props House", "Governance"],
  },
];

const Codices = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full bg-ldBeigeWhite pt-16">
      <div className="mx-auto max-w-7xl px-6 md:max-w-2xl lg:max-w-5xl lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-bold leading-tight tracking-tight text-primary">
          Códices
        </h1>
        <div className="my-8 lg:my-12 xl:my-8">
          <ul
            role="list"
            className="grid h-max grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-x-8 xl:gap-x-12"
          >
            <li className="h-full w-full">
              <DocsCard header="La DAO" links={LADAO_DOCS_LINKS} />
            </li>
            <li>
              <DocsCard
                header="Documentación Técnica"
                links={TECHNICAL_DOCS_LINKS}
              />
            </li>
            <li>
              <DocsCard header="Estrategias y Guías" links={GUIDES_LINKS} />
            </li>
            <li>
              <DocsCard
                header="Tutoriales Técnicos"
                links={TECHNICAL_CONTENT_LINKS}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Codices;
