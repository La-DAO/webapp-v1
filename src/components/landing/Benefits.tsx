import React from "react";
import {
  FireIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Conecta con gente apasionada",
    description:
      "Nerds, degens y algo más. Nos encanta compartir ideas para mejorar la vida utilizando tecnología descentralizada: Blockchain, DeFi, NFTs, etc.",
    icon: UserGroupIcon,
  },
  {
    name: "Contribuye y obtén recompensas",
    description:
      "Tu participación tiene valor. Al completar recompensas para La DAO, puedes obtener remuneración económica o acciones de La DAO.",
    icon: TrophyIcon,
  },
  {
    name: "Construye proyectos desafiantes",
    description:
      "Entre Blockchain, Contratos Inteligentes y nuestras ideas locas, tendremos que enfrentar retos técnicos y de negocio. Nos encantan los desafíos.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Exploramos nuevas tendencias",
    description:
      "Por algo estamos aquí: la innovación nos vuelve locos. Queremos probar las tecnologías nuevas que resuelvan problemas que identificamos.",
    icon: FireIcon,
  },
];

const Benefits = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full bg-ldBeigeWhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h4 className="text-xl font-bold leading-relaxed tracking-tight text-gray-900 sm:text-2xl">
              Más que una DAO
            </h4>
            <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl md:leading-normal lg:leading-snug xl:leading-relaxed">
              Una comunidad{" "}
              <span className="font-bolder text-primary">descentralizada</span>,{" "}
              <br />
              enfocada en construir <br className="md:hidden" />
              el <span className="font-bolder text-primary">futuro</span>
            </h2>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-spaceGrotesk text-xl font-semibold leading-7 text-gray-900 md:text-lg lg:text-xl">
                  <div className="mb-6 ml-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ldPrimaryOrange-500 md:ml-2">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
