import Link from "next/link";
import CardWithHeader from "../cards/CardWithHeader";
import { type TIconLink } from "~/pages/types/c3";

export type TConectaProps = {
  communityLinks: TIconLink[];
  directContact: TIconLink[];
  socialLinks: TIconLink[];
};

const Contribuye = ({
  communityLinks,
  directContact,
  socialLinks,
}: TConectaProps) => {
  return (
    <div className="flex flex-col gap-y-12 px-4 py-8 text-center md:px-32 md:pb-16 lg:gap-y-8 lg:px-16 lg:pt-0 xl:px-32">
      <h1 className="mb-8 hidden text-center text-4xl font-bold leading-tight tracking-tight text-primary lg:mb-0 lg:block">
        Contribuye
      </h1>
      <div className="flex flex-col gap-y-4">
        <p className="text-lg">
          Si tienes ideas, quieres contribuir o aprender más, este es el mejor
          lugar para comenzar:
        </p>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Únete a nuestra comunidad">
            <div className="my-4 flex justify-center gap-x-8 px-12">
              {communityLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="flex items-center justify-center text-xl text-ldJetBlack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon
                    className="mr-1.5 h-7 w-7 text-primary hover:text-ldPrimaryOrange-600"
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
            <ul className="mb-4 mt-8 list-inside list-square space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400">
              <li>Entra a nuestros canales</li>
              <li>Introdúcete y comparte ideas</li>
              <li>Conecta con otros miembros</li>
            </ul>
          </CardWithHeader>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="text-lg">Síguenos para noticias, eventos y dinámicas:</p>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Interactúa con nosotros">
            <div className="my-4 flex flex-wrap justify-center gap-x-8 gap-y-4 px-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="flex items-center justify-center text-xl text-ldJetBlack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon
                    className="mr-1.5 h-7 w-7 text-primary hover:text-ldPrimaryOrange-600"
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
            <ul className="mb-4 mt-8 list-inside list-square space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400">
              <li>Anuncios oficiales</li>
              <li>Dinámicas y concursos</li>
              <li>Memes</li>
            </ul>
          </CardWithHeader>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="text-lg">
          ¿Tienes algo importante que compartir? Conéctate a nuestra{" "}
          <Link href="/#">llamada semanal</Link>, o envía un correo:
        </p>
        <div className="md:px-8 lg:px-16">
          <CardWithHeader header="Canal directo La DAO">
            <div className="my-4 flex flex-wrap justify-start gap-x-8 gap-y-4 px-6">
              {directContact.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="flex items-center justify-center text-xl text-ldJetBlack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon
                    className="mr-1.5 h-6 w-6 text-primary hover:text-ldPrimaryOrange-600"
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
            <ul className="mb-4 mt-8 list-inside list-square space-y-2 text-left text-lg marker:text-ldPrimaryOrange-400">
              <li>Colaboraciones e integraciones</li>
              <li>Propuestas de negocio</li>
              <li>Sugerencias y comentarios</li>
            </ul>
          </CardWithHeader>
        </div>
      </div>
    </div>
  );
};

export default Contribuye;
