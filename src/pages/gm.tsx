import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useAccount, useDisconnect } from "wagmi";
import { MinimalistConnectButton } from "~/components/web3/RainbowKitCustomConnectButton";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { api } from "~/utils/api";

type TContactForm = {
  address?: string;
  email: string;
};

const Gm = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data } = api.projects.getAll.useQuery();

  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>();

  const onSubmit: SubmitHandler<TContactForm> = (data) => {
    setIsLoading(true);
    if (!address) return;
    data["address"] = address;
    console.log(data);
    try {
      setTimeout(() => {
        console.log("success");
        onSuccessHandler("Successful submission");
      }, 3000);
    } catch (error) {
      onErrorHandler("Ocurrió un error");
    } finally {
      setIsLoading(false);
    }
  };

  const onSuccessHandler = (successMsg: string) => {
    toast.success(successMsg);
  };

  const onErrorHandler = (errorMsg: string) => {
    toast.error(errorMsg);
  };

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
        <div className="lg:my-8 lg:flex lg:gap-x-4 xl:gap-x-16">
          <form
            className="my-8 flex w-full flex-col gap-y-2 px-2 md:my-4 md:gap-y-4 lg:mb-8 lg:mt-12 lg:w-1/2 lg:justify-start lg:px-8 xl:mt-8"
            onSubmit={(event) => {
              const onSubmitFunction = handleSubmit(onSubmit);
              void onSubmitFunction(event);
            }}
          >
            <p className="text-xl">Aplica para nuestra Membresía</p>
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="mb-1 ml-2 font-semibold">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                placeholder="satoshi@ladao.club"
                {...register("email", { required: "Email requerido" })}
              />
            </div>
            <div className="flex flex-col gap-y-2 text-left md:gap-y-4">
              <div>
                <label htmlFor="Name" className="mb-1 ml-2 font-semibold">
                  Dirección EVM
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-none p-4 text-center tracking-wide outline-none focus:ring-2 focus:ring-inset focus:ring-ldDeepGreen"
                  placeholder="Haz click en el botón ⬇"
                  value={address ? address : ""}
                  readOnly
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  className={`${
                    !address
                      ? "cursor-default select-none text-ldBeigeWhite"
                      : "text-ldJetBlack"
                  }
                  `}
                  onClick={() => {
                    event?.preventDefault();
                    disconnect();
                  }}
                >
                  {!address ? "Conectar cartera" : "Desconectar"}
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-y-2 md:gap-y-4">
              {!address ? (
                <MinimalistConnectButton containerClasses="w-2/3 md:w-1/2 lg:w-3/5" />
              ) : (
                <button
                  type="submit"
                  className="text-md w-2/3 rounded-md bg-ldPrimaryOrange-500 py-2 font-spaceGrotesk font-medium text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500 disabled:bg-primary/50 md:w-1/2 md:text-lg lg:w-3/5"
                  disabled={isLoading}
                >
                  Enviar
                </button>
              )}
              {errors?.email && (
                <p role="alert" className="font-bold text-red-600">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </form>
          <div className="mt-16 w-full md:mt-8 lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:px-8">
            <h4 className="mb-2 md:mb-4 lg:hidden">
              Tenemos grandes planes para la comunidad DeFi y Web3.
            </h4>
            <div className="mb-4 flex w-full items-center justify-center lg:hidden">
              <ChevronDownIcon className="h-8 w-8 text-primary" />
            </div>
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
