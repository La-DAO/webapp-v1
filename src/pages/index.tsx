import { type NextPage } from "next";
import Benefits from "~/components/landing/Benefits";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Projects />
    </>
  );
};

export default Home;
