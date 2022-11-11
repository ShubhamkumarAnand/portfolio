function Contact() {
  return (
    <div className="container mx-auto my-10 flex max-h-fit space-y-12">
      <section className="mr-12 w-1/2">
        <h1 className="my-8 text-8xl font-bold tracking-wider text-white">
          Contact Me
        </h1>
        <p className="font-mono text-xl tracking-wider text-white">
          I am available for development-related work. I am also open to
          opportunities for Winter 2022 & Summer 2023
        </p>
        <p className="my-8 font-mono text-2xl font-medium tracking-wide text-yellow-700">
          Email : &ensp;{" "}
          <span className="text-gray-300"> ishubham11anand@gmail.com</span>
        </p>
      </section>
      <section className="ml-12 w-1/2 space-y-6 text-start">
        <p className="my-2 font-mono text-xl text-yellow-700">
          Have a Question | Want to Collaborate?
        </p>
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
        <button className="button justify-items-end rounded-sm bg-yellow-700 p-4">
          {" "}
          Contact Me
        </button>
      </section>
    </div>
  );
}

export default Contact;
