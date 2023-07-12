import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="w-full bg-ldBeigeWhite">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:flex md:items-center md:justify-center md:gap-x-8 md:px-8 lg:gap-x-16">
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            ¿Listo para iniciar?
          </h3>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Forma parte del
            <br />
            <span className="text-4xl font-bold text-primary sm:text-5xl">
              DeFi Mexicano
            </span>
          </h2>
        </div>
        <div className="mt-10 flex items-center justify-start gap-x-6 md:mt-0 md:flex-shrink-0">
          <Link href="/gm">
            <button
              type="button"
              className="ml-4 rounded-md bg-ldPrimaryOrange-500 px-8 py-3 text-xl font-semibold text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
            >
              Únete a La DAO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
