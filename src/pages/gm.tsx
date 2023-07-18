import { useState } from "react";

const Gm = () => {
  const [address, setAddress] = useState(false);

  return (
    <div className="ld-page bg-ldBeigeWhite">
      <div className="flex max-w-7xl flex-col justify-start px-6 text-center md:max-w-lg lg:w-full lg:max-w-none lg:px-16 xl:max-w-6xl">
        <div className="w-full">
          <h3 className="mb-4">
            Construye con nosotros el
            <br />
            <span className="text-3xl font-black text-primary md:text-4xl">
              DeFi Mexicano
            </span>
          </h3>
        </div>
        <div className="lg: lg:my-8 lg:flex lg:gap-x-4 xl:gap-x-16">
          <form className="my-8 flex w-full flex-col px-2 lg:mt-12 lg:w-1/2 lg:justify-start lg:px-8 xl:mt-8">
            <p className="mb-4 text-xl">Aplica para nuestra Membresía</p>
            <div className="mb-4 flex flex-col text-left">
              <label htmlFor="email" className="mb-1 ml-2 font-semibold">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                placeholder="satoshi@ladao.club"
              />
            </div>
            <div className="mb-2 flex flex-col text-left">
              <label htmlFor="Name" className="mb-1 ml-2 font-semibold">
                Dirección EVM
              </label>
              <input
                type="text"
                className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                placeholder="Conecta tu cartera"
              />
              <div className="my-2 flex h-4 w-full justify-center">
                <button
                  className={`${
                    !address ? "hidden text-ldBeigeWhite" : "text-ldJetBlack"
                  }
                  `}
                  onClick={() => {
                    event?.preventDefault();
                    setAddress(false);
                  }}
                >
                  {!address ? "Conectar cartera" : "Desconectar"}
                </button>
              </div>
            </div>
            <div className="my-2 flex w-full justify-center">
              <button
                className="w-2/3 rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-xl font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 md:w-1/2 md:text-lg lg:w-3/5"
                onClick={() => {
                  event?.preventDefault();
                  setAddress(!address);
                }}
              >
                {!address ? "Conectar cartera" : "Enviar"}
              </button>
            </div>
          </form>
          <div className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:px-8">
            <p className="mb-2 text-lg md:hidden">
              Tenemos grandes planes para la comunidad DeFi y Web3.
            </p>
            <div className="flex w-full justify-center">
              <div className="flex w-full flex-col rounded-md border-2 border-ldPrimaryOrange-600 md:w-4/5 lg:w-full">
                <div className="bg-primary py-2 text-center">
                  <h4 className="font-bold text-white">Beneficios</h4>
                </div>
                <div className="px-2 py-4 md:px-4">
                  <ul className="list-square text-left text-lg marker:text-ldPrimaryOrange-400">
                    <li className="my-3 ml-8 decoration-primary">
                      Acceso anticipado a funciones y proyectos nuevos
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Análisis y Estrategias DeFi
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Coleccionables y Merch
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Proyectos a seguir y Noticias
                    </li>
                    <li className="my-3 ml-8 decoration-primary">
                      Otras ideas Web3 y experimentos{" "}
                      <span className="italic">on-chain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gm;
