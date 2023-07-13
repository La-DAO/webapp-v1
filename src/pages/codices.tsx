import React from "react";
import DocsCard from "~/components/cards/LinksListCard";

const TECHNICAL_DOCS_LINKS = [
  {
    name: "Wiki Contratos Xocolatl",
    href: "https://github.com/La-DAO/xocolatl-contracts/wiki",
    tags: ["Contratos Inteligentes", "DeFi", "Wiki"],
  },
  {
    name: "Whitepaper La DAO",
    href: "/whitepaper",
    tags: ["whitepaper", "DAO", "Governance", "Tooling"],
  },
  {
    name: "Whitepaper Xocolatl",
    href: "/proyectos/xocolatl/whitepaper",
    tags: ["whitepaper", "DeFi"],
  },
  {
    name: "Auditoría Ciberseguridad - Xocolatl",
    href: "/codices/blog/auditoria-ciberseguridad-xocolatl",
    tags: ["DeFi", "Contratos Inteligentes", "Auditoría"],
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-x-8 xl:gap-x-12"
          >
            <li>
              <DocsCard header="Documentación" links={TECHNICAL_DOCS_LINKS} />
            </li>
            <li>
              <DocsCard header="Documentación" links={TECHNICAL_DOCS_LINKS} />
            </li>
            <li>
              <DocsCard header="Documentación" links={TECHNICAL_DOCS_LINKS} />
            </li>
            <li>
              <DocsCard header="Documentación" links={TECHNICAL_DOCS_LINKS} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Codices;
