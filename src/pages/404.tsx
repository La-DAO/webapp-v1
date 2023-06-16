import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center font-spaceGrotesk lg:mb-32">
      <p className="text-2xl font-semibold text-white">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ldPrimaryOrange-500 sm:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-6 text-lg leading-7 text-white">
        No encontramos la página que buscas.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-ldPrimaryOrange-500 px-8 py-2.5 text-lg font-semibold text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
        >
          Ir a Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
