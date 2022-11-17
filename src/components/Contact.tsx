function Contact() {
  return (
    <div className="container mx-auto mb-96 flex space-x-12">
      <section className="mr-12 w-1/2">
        <h1 className="my-8 text-8xl font-bold tracking-wider text-white">
          Contact Me
        </h1>
        <p className="mr-8 font-mono text-2xl tracking-wide text-white">
          I am available for development-related work. I am also open to
          opportunities for Winter 2022 & Summer 2023
        </p>
        <p className="my-8 font-mono text-2xl font-medium tracking-wide text-yellow-900">
          Email : &ensp;{" "}
          <span className="text-gray-300 hover:text-green-100">
            {" "}
            ishubham11anand@gmail.com
          </span>
        </p>
      </section>
      <section className="ml-12 w-1/2 space-y-6 text-start">
        <p className="my-2 font-mono text-xl text-yellow-700">
          Have a Question | Want to Collaborate?
        </p>
        <form action="">
          <input
            type="text"
            name="Name"
            className="mx-auto w-3/4 rounded-lg bg-blue-100 p-4"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="Email"
            className="mx-auto w-3/4 rounded-lg bg-blue-100 p-4"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="Message"
            className="mx-auto w-3/4 rounded-lg bg-blue-100 p-4"
            placeholder="Message"
            required
          />
          <br />
          <button className="button justify-items-end rounded bg-yellow-700 p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:bg-green-300">
            {" "}
            Contact Me
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
