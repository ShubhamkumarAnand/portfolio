import React from "react";

function Introduction() {
  return (
    <div className="container mx-auto mt-12 flex h-full max-w-fit items-center justify-items-center space-x-24 space-y-12 p-6">
      <section className="container float-left mx-auto justify-start ">
        <h1 className="text-3xl">
          I am <span className="text-yellow-500">Full Stack Developer</span>
        </h1>
      </section>
      <section className="container float-right mx-auto w-1/2 font-semibold">
        <h1 className="text-7xl text-yellow-500">
          Hello<span className="text-9xl text-white">.</span>
        </h1>
        <br />
        <span className="text-8xl">I am</span>
        <br />
        <span className="text-9xl text-yellow-300">Shubham</span>
      </section>
    </div>
  );
}

export default Introduction;
