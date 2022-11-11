import React from "react";

function Skills() {
  return (
    <div className="mx-auto my-12 flex items-center space-x-24">
      <section className="container mx-24">
        <h1 className="text-9xl font-extrabold text-white">Skills</h1>
        <p className="my-12 p-4 text-2xl font-semibold tracking-wide text-gray-300">
          An individual eager to learn and explore new fields of life and
          technology, with good listening skills and fast learning abilities.
        </p>
        <div className="container m-12 w-1/2 items-center rounded-sm bg-yellow-300 p-6 shadow-lg">
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
      <section className="container mx-24 ">
        <ul className="container my-8 mx-12 flex space-x-12">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <br />
        <ul className="container my-8 mx-12 flex space-x-12">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <br />
        <ul className="container my-8 mx-12 flex space-x-12">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
