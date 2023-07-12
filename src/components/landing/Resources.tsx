import Image from "next/image";
import img1 from "/public/images/landing/hold-and-connect.jpeg";
import Link from "next/link";

const Resources = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full bg-ldJetBlack py-28">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="md:w-3/4 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Conocimiento como valor compartido
            </h2>
            <p className="mt-6 px-4 text-lg leading-8 text-white">
              Nuestras raíces están en la comunidad y en el intercambio de
              ideas. Explora las aportaciones y creaciones de nuestra comunidad.
            </p>
            <div className="my-4 flex w-full justify-start">
              <Link href="/comunidad" className="w-1/2 md:w-1/3 lg:w-1/3">
                <button className="ml-8 w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-lg font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:ml-16">
                  Comunidad <span aria-hidden="true">&rarr;</span>
                </button>
              </Link>
            </div>
            <p className="mt-6 px-4 text-lg leading-8 text-white">
              ¿Quieres aprender? Descubre nuestros Códices, donde encontrarás
              guías, tutoriales y contenido educativo.
            </p>
            <div className="my-4 flex w-full justify-start">
              <Link href="/codices" className="w-1/2 md:w-1/3 lg:w-1/3">
                <button className="ml-8 w-full rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-lg font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:ml-16">
                  Códices <span aria-hidden="true">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end md:pr-8">
            <div className="w-full md:w-3/5 md:px-2 lg:w-full">
              <Image
                src={img1}
                alt=""
                className="w-full max-w-none rounded-md bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
