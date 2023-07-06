import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroBackgroundImg from "~/assets/images/background/HeroSectionBckgd.jpeg";

const Hero = () => {
  return (
    <section className="container flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-12 px-4 pb-28 pt-2 font-spaceGrotesk">
      <div className="absolute inset-0 top-[64px] z-10 h-[calc(100vh-64px)] w-full bg-gradient-to-b from-ldJetBlack/100 to-ldSageGreen-700/75 object-cover"></div>
      <div className="absolute inset-0 top-[64px] h-[calc(100vh-64px)] w-full object-cover">
        <Image
          alt="Hero section background image"
          src={HeroBackgroundImg}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="z-10 md:flex md:flex-col md:items-center">
        <h1 className="ml-4 text-4xl font-medium leading-tight tracking-tight text-white sm:ml-0 sm:text-5xl md:max-w-md md:text-center lg:max-w-none">
          Una comunidad <br className="hidden lg:block" />
          apasionada por <br className="md:hidden lg:block" />
          <span className="ml-4 text-6xl font-bold leading-snug text-primary md:ml-0 md:leading-tight">
            DeFi
          </span>
        </h1>
        <h3 className="ml-4 mt-8 pl-4 pr-8 text-xl text-white sm:ml-0 sm:text-2xl md:max-w-lg md:text-center lg:max-w-xl lg:px-0">
          Conecta, contribuye y construye el futuro del internet, la propiedad
          digital y las comunidades
        </h3>
        <div className="mt-8 flex justify-center">
          <Link href="/membresia">
            <button
              type="button"
              className="rounded-md bg-ldPrimaryOrange-500 px-8 py-4 text-xl font-semibold text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
            >
              Únete a La DAO
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
