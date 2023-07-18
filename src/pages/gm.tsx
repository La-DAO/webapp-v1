import { Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Gm = () => {
  const [address, setAddress] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <div className="ld-page flex-start flex bg-ldBeigeWhite">
      <div className="flex max-w-7xl flex-col px-6 text-center md:max-w-2xl lg:max-w-3xl lg:px-16 xl:px-24">
        <h3 className="mb-4">
          ¿Estás listo para construir el
          <br />
          <span className="text-3xl font-black text-primary md:ml-6 md:text-5xl">
            DeFi Mexicano?
          </span>
        </h3>
        <form className="my-8 flex flex-col px-2">
          <p className="mb-4 text-xl">Aplica para nuestra Membresía</p>
          <div className="mb-4 flex flex-col text-left">
            <label htmlFor="email" className="mb-1 ml-2 font-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full rounded-md border-none p-4 tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
              placeholder="satoshi@ladao.club"
            />
          </div>
          <div className="mb-2 flex flex-col text-left">
            <label htmlFor="Name" className="mb-1 ml-2 font-semibold">
              Dirección EVM
            </label>
            <input
              type="text"
              className="w-full rounded-md border-none p-4 tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
              placeholder="Conecta tu cartera"
            />
            <div className="my-2 flex h-8 w-full justify-center">
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
              className="w-2/3 rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk text-lg text-xl font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
              onClick={() => {
                event?.preventDefault();
                setAddress(!address);
              }}
            >
              {!address ? "Conectar cartera" : "Enviar"}
            </button>
          </div>
        </form>
        <p className="mb-4 text-lg">
          Tenemos grandes planes para la comunidad DeFi y Web3.
        </p>
        <p className="mb-4 text-xl">¡No esperes más!</p>
        <div className="flex w-full flex-col rounded-md border-2 border-ldPrimaryOrange-600">
          <div className="bg-primary py-2 text-center">
            <h4 className="font-bold text-white">Beneficios</h4>
          </div>
          <div className="px-2 py-4 sm:px-6 lg:px-10">
            <ul className="list-square text-lg marker:text-ldPrimaryOrange-400">
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
  );
};

export default Gm;
