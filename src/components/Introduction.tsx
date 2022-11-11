import React from "react";

function Introduction() {
  return (
    <div className="container mx-auto my-12 flex min-h-full max-w-fit items-center justify-items-center space-x-24 space-y-12 p-6">
      <section className="container float-left mx-auto justify-start ">
        <h1 className="text-3xl">
          I am{" "}
          <span className="items-start text-yellow-700">
            Full Stack Developer
          </span>
        </h1>
      </section>
      <section className="container float-right mx-auto w-1/2 items-center space-y-12 font-extrabold">
        <h1 className="text-9xl tracking-wider text-yellow-700">
          Hello<span className="text-9xl text-white">.</span>
        </h1>
        <br />
        <span className="mb-12 text-9xl tracking-wider text-white">I am</span>
        <br />
        <span className="text-9xl tracking-wider text-yellow-700">Shubham</span>
      </section>
    </div>
  );
}

export default Introduction;
