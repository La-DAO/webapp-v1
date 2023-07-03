import { type NextPage } from "next";
import Benefits from "~/components/landing/Benefits";
import Features from "~/components/landing/Features";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Projects />
      <Features />
    </>
  );
};

export default Home;
