import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Logo from "../components/Logo";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>imskanand</title>
        <meta name="description" content="Shubham's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-700 ">
        <nav className="z-12 fixed top-0 right-0 left-0 m-0 w-full rounded-md">
          <Link href="#introduction">
            <Logo />
          </Link>
        </nav>
        <section className="min-h-screen">
          <div id="introduction">
            <Introduction />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
