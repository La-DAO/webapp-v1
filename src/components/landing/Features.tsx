import connectImg from "/public/images/landing/connection.png";
import contributeImg from "/public/images/landing/contribute.png";
import buildImg from "/public/images/landing/team-building.png";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: 1,
    name: "Conecta",
    description:
      "En nuestros canales, podrás conectar con gente apasionada como tú, enfocada en tecnología y cómo resuelve problemas en el mundo real.",
    href: "/conecta",
    buttonText: "Ver canales",
    icon: connectImg,
  },
  {
    id: 2,
    name: "Contribuye",
    description:
      "¿Tienes una idea? ¿O una duda? ¡Compártela! Los proyectos en curso están en Discord y las propuestas las realizamos en DAOHaus.",
    href: "/contribuye",
    buttonText: "Cómo colaborar",
    icon: contributeImg,
  },
  {
    id: 3,
    name: "Construye",
    description:
      "Entrega actividades ligadas a recompensas, o a una idea de la comunidad. Explora nuestro DeWork y Github, y construyamos juntos.",
    href: "/construye",
    buttonText: "Qué hacemos",
    icon: buildImg,
  },
];

const Features = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full bg-ldBeigeWhite py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl px-2 md:px-8 lg:text-center">
          <h4 className="text-xl font-bold leading-relaxed tracking-tight text-gray-900">
            Principante o experto
          </h4>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Con <span className="font-extrabold text-primary">La DAO</span>{" "}
            colaboras y aprendes
          </h2>
          <p className="mt-6 font-spaceGrotesk text-lg leading-6 tracking-tight text-ldJetBlack md:pl-2 md:pr-8 md:text-lg lg:pr-8 lg:text-xl">
            Compartimos nuestras ideas con la comunidad, definimos actividades y
            ejecutamos. En este ecosistema, el mejor aprendizaje es
            construyendo.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl md:flex md:justify-center lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:w-2/3 lg:w-full lg:grid-cols-3 lg:px-8 xl:px-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-lg bg-ldDeepGreen p-4 font-spaceGrotesk text-ldBeigeWhite"
              >
                <div className="flex items-center gap-x-3 px-8 py-4 text-base font-semibold leading-7 lg:px-4">
                  <div className="flex h-12 w-12 justify-center rounded-md bg-ldBeigeWhite p-2">
                    <Image
                      src={feature.icon}
                      alt={`$Imagen de {feature.name}`}
                      width={feature.id !== 3 ? 40 : 34}
                      height={feature.id !== 3 ? 40 : 34}
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-relaxed tracking-tight lg:text-2xl">
                    {feature.name}
                  </h4>
                </div>
                <div className="flex flex-auto flex-col p-4 text-justify text-base leading-7 lg:p-2">
                  <p className="flex-auto">{feature.description}</p>
                </div>
                <div className="my-2 flex w-full justify-center lg:my-4">
                  <Link href={feature.href} className="w-3/5">
                    <button
                      type="button"
                      className="w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-lg font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
                    >
                      {feature.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
