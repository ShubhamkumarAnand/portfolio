import React from "react";

function Introduction() {
  return (
    <div className="container my-12 flex h-screen flex-row items-center space-x-6 p-6">
      <section className="container ml-60 items-center">
        <h1 className="text-3xl">
          I am{" "}
          <span className="text-yellow-700 hover:font-bold hover:text-yellow-500">
            Full Stack Developer
          </span>
        </h1>
      </section>
      <section className="space-y-12 font-bold">
        <h1 className="text-9xl tracking-wide text-yellow-700">
          Hello
          <span className="animate-pulse text-9xl text-white hover:text-green-500">
            .
          </span>
        </h1>
        <span className="text-9xl tracking-wider text-white hover:text-green-50">
          I am
        </span>
        <br className="my-12" />
        <span className="text-9xl tracking-wider text-yellow-700">Shubham</span>
      </section>
    </div>
  );
}

export default Introduction;
