import { type NextPage } from "next";
import Benefits from "~/components/landing/Benefits";
import Hero from "~/components/landing/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  );
};

export default Home;
