import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdojjekk");
  if (state.succeeded) {
    return (
      <div className="w-fit rounded-md bg-green-700 p-12">
        <p className="text-3xl font-medium text-white">
          Thanks for Joining!
          <br />
          I&apos;ll Contact You Soon!
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mx-auto mt-4 w-3/4 rounded-lg bg-slate-600 p-4 text-black"
        placeholder="Name : "
        id="name"
        type="name"
        name="name"
        autoComplete="off"
        required
      />
      <br />
      <input
        className="mx-auto my-2 w-3/4 rounded-lg bg-slate-600 p-4 text-black"
        placeholder="Email : "
        id="email"
        type="email"
        name="email"
        autoComplete="off"
        required
      />
      <br />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        className="mx-auto mb-2 w-3/4 rounded-lg bg-slate-600 p-4 text-black"
        placeholder="Subject : "
        id="subject"
        type="subject"
        name="subject"
        autoComplete="off"
        required
      />
      <br />
      <textarea
        className="mx-auto my-4 w-3/4 rounded-lg bg-slate-600 p-4 text-black"
        placeholder="Message..."
        id="message"
        name="message"
        autoComplete="off"
        rows={5}
        required
      />
      <br />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="button justify-items-end rounded bg-yellow-700 p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:rounded-md hover:bg-green-700"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
