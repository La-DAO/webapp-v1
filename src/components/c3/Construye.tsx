import Link from "next/link";
import CardWithHeader from "../cards/CardWithHeader";
import { type TIconLink } from "~/pages/types/c3";

export type TConectaProps = {
  pmToolsLinks: TIconLink[];
  ideasDumpLinks: TIconLink[];
};

const Construye = ({ pmToolsLinks, ideasDumpLinks }: TConectaProps) => {
  return (
    <div className="flex flex-col gap-y-12 pb-16 pt-8 text-center md:px-32 lg:gap-y-8 lg:px-16 lg:pt-0 xl:px-32">
      <h1 className="mb-8 hidden text-center text-4xl font-bold leading-tight tracking-tight text-primary lg:mb-0 lg:block">
        Construye
      </h1>
      <div className="flex flex-col gap-y-4">
        <p className="text-center text-lg">
          Aquí se ejecutan las ideas y decisiones de la comunidad.
        </p>
        <p className="text-center text-lg">
          Desde una nueva sección en el sitio web, hasta un cambio en el
          protocolo. Propones, ejecutas y recibes.
        </p>
        <h4 className="px-0.5 text-center">
          Comunidad = <span className="font-bold text-primary">La DAO</span>
        </h4>
        <h4 className="px-0.5 text-center">Juntos construimos el futuro.</h4>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Proponer y ejecutar">
            <div className="my-4 flex w-full justify-center px-4">
              <div className="flex flex-col items-start gap-y-4 lg:gap-y-6">
                {ideasDumpLinks.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="flex items-center justify-center font-sora text-lg text-ldJetBlack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon
                      className="mr-2 h-7 w-7 text-primary hover:text-ldPrimaryOrange-600 lg:mr-2"
                      aria-hidden="true"
                    />
                    <span
                      className="relative decoration-primary before:absolute before:-bottom-1 before:left-0 before:block before:h-[2px] 
before:w-full before:origin-top-left before:scale-x-0
before:bg-primary before:transition before:duration-300
before:ease-in-out before:content-[''] before:hover:scale-x-100"
                    >
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full justify-center px-4">
              <ul className="mb-4 mt-8 list-inside list-square space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400 lg:px-4">
                <li>Propones tus ideas y proyectos</li>
                <li>Ejecuta las actividades</li>
                <li>Recibe tu recompensa</li>
              </ul>
            </div>
          </CardWithHeader>
        </div>
      </div>
    </div>
  );
};

export default Construye;
