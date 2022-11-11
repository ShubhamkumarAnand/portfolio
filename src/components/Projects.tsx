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
            className="font-mono font-bold underline underline-offset-4"
          >
            Github
          </Link>
          !
        </p>
      </section>
    </div>
  );
}

export default Projects;
