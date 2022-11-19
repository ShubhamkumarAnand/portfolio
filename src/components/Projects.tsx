import Link from "next/link";
import Image from "next/image";
import buyzonImage from "/public/resources/images/Buyzon.png";
import fitflixImage from "/public/resources/images/Fitflix.png";
import portfolioImage from "/public/resources/images/portfolio.png";
import digitalResumeImage from "/public/resources/images/resume.png";
import { IoArrowForwardOutline } from "react-icons/io5";

function Projects() {
  return (
    <div className="container mx-auto my-10 flex h-screen space-y-12">
      <section className="mr-12 w-1/2">
        <h1 className="my-12 text-9xl font-medium tracking-wide text-white">
          Projects
        </h1>
        <p className="font-mono text-2xl tracking-wider text-white">
          Here is a showcase of some of my best projects that I made. They can
          be found on my&nbsp;
          <Link
            href="https://github.com/ShubhamkumarAnand"
            className="font-mono font-bold text-yellow-700 underline underline-offset-4 hover:text-3xl hover:text-green-300"
          >
            Github
          </Link>{" "}
          !
        </p>
        <Link
          href="https://github.com/ShubhamkumarAnand?tab=repositories&type=source"
          className="button my-12 flex w-fit rounded-3xl bg-red-700 p-4 text-2xl font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-300"
        >
          Show Me More <IoArrowForwardOutline className="mx-2 mt-1" />
        </Link>
      </section>
      <section>
        <ul className="mb-6 flex flex-row space-x-12">
          <li>
            <Link href="https://buyzon.vercel.app/" className="shadow-xl">
              <Image
                alt="Buyzon"
                src={buyzonImage}
                height="300"
                width="500"
                className="z-12 rounded shadow-xl hover:shadow-slate-300"
              />
            </Link>
          </li>
          <li>
            <Link href="https://fitflix.netlify.app/">
              <Image
                alt="Fitflix"
                src={fitflixImage}
                height="300"
                width="500"
                className="z-12 rounded shadow-xl hover:shadow-yellow-300"
              />
            </Link>
          </li>
        </ul>
        <ul className="left-0 flex flex-row space-x-6">
          <li>
            <Link href="https://imskanand.vercel.app/">
              <Image
                alt="portfolio"
                src={portfolioImage}
                height="300"
                width="500"
                className="z-12 rounded shadow-xl hover:shadow-slate-300"
              />
            </Link>
          </li>
          <li>
            <Link href="https://shubhamkumaranand.github.io/digital_resume/">
              <Image
                alt="Resume"
                src={digitalResumeImage}
                height="300"
                width="500"
                className="z-12 rounded shadow-xl hover:shadow-black"
              />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
