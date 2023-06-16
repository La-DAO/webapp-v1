import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="container mb-16 flex flex-col items-center justify-center gap-12 bg-ldJetBlack px-4 pb-16 pt-2 font-spaceGrotesk lg:mb-8">
      <h1 className="text-5xl font-medium tracking-tight text-white md:max-w-md lg:max-w-none">
        Una comunidad <br className="hidden lg:block" />
        apasionada por <br />
        <span className="text-6xl font-bold text-primary">DeFi</span>
      </h1>
      <h3 className="pl-4 pr-8 text-2xl text-white md:max-w-lg lg:max-w-xl lg:px-0 lg:text-center">
        Conecta, contribuye y construye el futuro del internet, la propiedad
        digital y las comunidades
      </h3>
      <Link href="/membresia">
        <button
          type="button"
          className="rounded-md bg-ldPrimaryOrange-500 px-8 py-4 text-xl font-semibold text-white hover:bg-ldPrimaryOrange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ldPrimaryOrange-500"
        >
          Únete a La DAO
        </button>
      </Link>
    </div>
  );
};

export default Home;
