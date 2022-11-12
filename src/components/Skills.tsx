import React from "react";

function Skills() {
  return (
    <div className="container mx-auto my-10 flex h-screen space-x-12">
      <section className="mr-12 w-1/2">
        <h1 className="text-9xl font-extrabold text-white">Skills</h1>
        <p className="my-8 p-4 font-mono text-3xl font-medium tracking-wide text-gray-300">
          An individual eager to learn and explore new fields of life and
          technology, with good listening skills and fast learning abilities.
        </p>
        <div className="container m-8 w-2/3 items-center rounded-sm bg-yellow-300 p-6 shadow-lg">
          <h3 className="my-2 text-2xl font-medium text-white">Interests</h3>
          <h3 className="text-xl font-medium text-yellow-900">
            Full Stack Development
          </h3>
          <h3 className="text-xl font-medium text-yellow-900">
            Writing Document
          </h3>
          <h3 className="text-xl font-medium text-yellow-900">
            Public Speaking
          </h3>
        </div>
      </section>
      <section className="container mx-auto w-1/2">
        <ul className="container my-8 mx-12 flex space-x-12">
          <li>Next js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>
        <br />
        <ul className="container m-12 my-8 flex space-x-12">
          <li>JavaScript</li>
          <li>C++</li>
          <li>HTML-5</li>
          <li>CSS-3</li>
        </ul>
        <br />
        <ul className="container my-8 mx-12 flex space-x-12">
          <li>Node js</li>
          <li>Postgres</li>
          <li>VS Code</li>
          <li>Linux</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
