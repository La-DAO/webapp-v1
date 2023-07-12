import { type NextPage } from "next";
import Benefits from "~/components/landing/Benefits";
import Resources from "~/components/landing/Resources";
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
      <Resources />
    </>
  );
};

export default Home;
