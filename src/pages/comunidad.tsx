import React, { useState } from "react";
import people, { Person } from "../components/data";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Tab } from "@headlessui/react";
import Conecta from "~/components/c3/Conecta";
import Construye from "~/components/c3/Construye";
import Contribuye from "~/components/c3/Contribuye";
import Framework from "~/components/c3/Framework";
import Directorio from "~/components/comunidad/Directorio";
import Feed from "~/components/comunidad/Feed";
import Eventos from "~/components/comunidad/Eventos";
import Arte from "~/components/comunidad/Arte";


const TABS = [
  { text: "General", href: "/general" },
  { text: "Directorio", href: "/directorio" },
  { text: "Eventos", href: "/eventos" },
  { text: "Arte", href: "/arte" },
];

const Comunidad = () => {
  const [mobilePageTitle, setMobilePageTitle] = useState(TABS[0]?.text);

  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full flex-wrap bg-ldBeigeWhite lg:flex-nowrap">
      <Tab.Group
        onChange={(index) => {
          console.log("Changed selected tab to:", index);
          setMobilePageTitle(TABS[index]?.text);
        }}
      >
        <Tab.List
          as="div"
          className="grid w-full grid-cols-2 grid-rows-4 bg-ldBeigeWhite px-10 pt-16 font-spaceGrotesk md:px-40 lg:flex lg:h-[calc(100vh-64px)] lg:w-1/4 lg:flex-col lg:items-center lg:gap-y-4 lg:bg-ldJetBlack lg:px-0 lg:pt-32 lg:text-ldBeigeWhite xl:w-1/5"
        >
          <h1 className="col-span-2 row-span-2 mb-4 text-center text-4xl font-bold leading-tight tracking-tight text-primary lg:hidden">
            {mobilePageTitle}
          </h1>
          {TABS.map((tab, index) => (
            <Tab
              as="div"
              key={`${tab.text}_tab_${index}`}
              className="flex w-full justify-center outline-none lg:first:my-6"
            >
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "bg-primary text-ldBeigeWhite"
                      : "text-ldJetBlack hover:bg-ldPrimaryOrange-500/25 lg:text-ldBeigeWhite"
                  } w-4/5 rounded-md text-lg font-medium md:w-2/3 lg:py-2 lg:text-2xl xl:w-2/3`}
                >
                  {tab.text}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <div className="flex w-full justify-center bg-ldBeigeWhite lg:h-[calc(100vh-64px)] lg:w-3/4 lg:overflow-y-scroll lg:pt-16 xl:w-4/5">
          <Tab.Panels
            as="div"
            className="max-w-full px-6 md:px-12 lg:max-w-5xl lg:px-16 xl:px-24"
          >
            <Tab.Panel as="div">
              <Feed />
            </Tab.Panel>
            <Tab.Panel as="div">
              <Directorio />
            </Tab.Panel>
            <Tab.Panel as="div">
              <Eventos />
            </Tab.Panel>
            <Tab.Panel as="div">
              <Arte />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Comunidad;

