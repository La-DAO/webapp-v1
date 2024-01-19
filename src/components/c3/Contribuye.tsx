import Link from "next/link";
import CardWithHeader from "../cards/CardWithHeader";
import { type TIconLink } from "~/types/pages/c3";

export type TContribuyeProps = {
  pmToolsLinks: TIconLink[];
  ideasDumpLinks: TIconLink[];
};

const Contribuye = ({ pmToolsLinks, ideasDumpLinks }: TContribuyeProps) => {
  return (
    <div className="flex flex-col gap-y-12 px-4 pb-16 pt-8 text-center md:px-32 lg:gap-y-8 lg:px-16 lg:pt-0 xl:px-32">
      <h1 className="mb-8 hidden text-center text-4xl font-bold leading-tight tracking-tight text-primary lg:mb-0 lg:block">
        Contribuye
      </h1>
      <div className="flex flex-col gap-y-4">
        <p className="px-0.5 text-justify text-lg">
          Nos encanta compartir ideas y proyectos. Entre todos, podemos
          convertirlos en realidad. Para empezar, puedes explorar nuestras
          tareas pendientes en Dework o Github.
        </p>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Nuestras actividades">
            <div className="justify-left my-4 flex flex-wrap gap-y-4 px-8 lg:gap-y-6">
              {pmToolsLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="flex w-full items-center justify-center font-sora text-lg text-ldJetBlack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon
                    className="mr-2 h-7 w-7 text-primary hover:text-ldPrimaryOrange-600"
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
            <div className="flex w-full justify-center px-4">
              <ol className="mb-4 mt-8 list-inside list-decimal space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400">
                <li>Registra actividad a realizar</li>
                <li>Completa y comparte resultado</li>
                <li>Obtén recompensa</li>
              </ol>
            </div>
          </CardWithHeader>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="px-0.5 text-justify text-lg">
          ¿Falta algo? ¿Tienes una idea? ¿Alguna mejora? Compártela en nuestros
          canales y entre todos le damos estructura.
        </p>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Todo inicia con una idea">
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
                      className="mr-2 h-7 w-7 text-primary hover:text-ldPrimaryOrange-600"
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
            <ul className="mb-4 mt-8 list-inside list-square space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400 lg:px-4">
              <li>Define tu contribución</li>
              <li>Comparte diagramas, notas e inspiración</li>
              <li>Organiza grupos de trabajo</li>
            </ul>
          </CardWithHeader>
        </div>
      </div>
    </div>
  );
};

export default Contribuye;
