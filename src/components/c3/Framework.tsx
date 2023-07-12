import Image from "next/image";

const Framework = () => {
  return (
    <div className="flex flex-col gap-y-8 py-8 pb-12 text-center md:pb-16 lg:px-0 lg:pt-0 xl:px-8">
      <h1 className="mb-8 hidden text-center leading-tight tracking-tight text-primary lg:mb-0 lg:block">
        C3
      </h1>
      <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:flex-wrap lg:items-start">
        <div className="lg:w-full">
          <h4 className="mb-2">
            El Marco de Trabajo que implementamos en{" "}
            <span className="font-extrabold text-primary">La DAO</span>.
          </h4>
          <h4>Basado en 3 pilares:</h4>
          <h4>Conectar, Contribuir y Construir.</h4>
        </div>
        <p className="px-4 text-justify text-lg md:px-16 lg:w-1/2 lg:pl-4 lg:pr-6 lg:pt-16">
          Fomentamos las interacciones entre las personas, comunidades y
          proyectos, con el objetivo de generar un sentido de pertenencia y
          responsabilidad, para generar un impacto positivo en nuestras vidas.
        </p>
        <div className="px-4 md:w-4/5 md:py-8 lg:w-1/2 lg:py-4 lg:pl-6">
          <Image
            src="/images/landing/hold-and-connect.jpeg"
            alt="Juntos creamos un mundo nuevo"
            className="h-auto w-full rounded-md"
            width={300}
            height={500}
          />
        </div>
      </div>
      {/* <div className="flex flex-col gap-y-4">
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
      </div> */}
    </div>
  );
};

export default Framework;
