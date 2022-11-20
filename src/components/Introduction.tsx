import Typewriter from "typewriter-effect";

function Introduction() {
  return (
    <div className="container my-12 flex h-screen flex-row items-center space-x-6 p-6">
      <section className="container ml-60 items-center">
        <h1 className="my-4 box-border flex text-3xl">
          I&apos;m a&nbsp;
          <span className="font-bold tracking-wide text-yellow-300 hover:font-medium hover:text-yellow-500">
            <Typewriter
              options={{
                strings: ["Software Developer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(250).deleteAll().start();
              }}
            />
          </span>
        </h1>
      </section>
      <section className="space-y-12 font-bold">
        <h1 className="text-9xl tracking-wide text-yellow-300">
          Hello
          <span className="animate-pulse text-9xl text-green-500">.</span>
        </h1>
        <span className="text-9xl tracking-wide text-white hover:text-green-50">
          I am
        </span>
        <br className="my-12" />
        <span className="text-9xl tracking-wide text-yellow-300">Shubham</span>
      </section>
    </div>
  );
}

export default Introduction;
