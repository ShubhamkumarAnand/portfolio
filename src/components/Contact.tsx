import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="container mx-auto mb-96 flex space-x-12">
      <section className="mr-12 w-1/2">
        <h1 className="my-8 text-8xl font-medium tracking-wide text-yellow-300 hover:text-white">
          Contact Me
        </h1>
        <p className="mr-8 font-mono text-2xl tracking-wide text-gray-200 hover:text-white">
          I am available for development-related work. I am also open to
          opportunities for Winter 2022 & Summer 2023
        </p>
        <p className="my-8 font-mono text-2xl font-medium tracking-wide text-yellow-300">
          Email : &ensp;{" "}
          <span className="text-gray-300 hover:text-green-100">
            {" "}
            ishubham11anand@gmail.com
          </span>
        </p>
      </section>
      <section className="ml-12 w-1/2 space-y-6 text-start">
        <p className="mb-2 font-mono text-xl text-yellow-300">
          Have a Question | Want to Collaborate?
        </p>
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
