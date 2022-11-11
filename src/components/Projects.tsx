import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="container mx-auto my-10 flex space-y-12">
      <section className="mr-12 w-1/2">
        <h1 className="my-12 text-9xl font-extrabold tracking-wider text-white">
          Projects
        </h1>
        <p className="font-mono text-xl tracking-wider text-white">
          Here is a showcase of some of my best projects that I made. They can
          be found on my&nbsp;
          <Link
            href="https://github.com/ShubhamkumarAnand"
            className="font-mono font-bold text-yellow-700 underline underline-offset-4"
          >
            Github
          </Link>{" "}
          !
        </p>
        <button className="button my-12 rounded-3xl bg-red-700 p-4 text-2xl font-bold">
          Show Me More
        </button>
      </section>
    </div>
  );
}

export default Projects;
