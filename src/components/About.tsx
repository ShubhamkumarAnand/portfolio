import Image from "next/image";
import profileImage from "/public/imskanad.png";

function About() {
  return (
    <div className="container mx-auto my-10 flex space-y-12">
      <section className="mx-auto w-1/2">
        <h1 className="text-9xl font-extrabold tracking-wider text-white">
          About Me
        </h1>
        <p className="my-10 font-mono text-3xl tracking-wider text-gray-300">
          I am Final Year Computer Science & Engineering Student and doing the
          programming since the Freshman year of my University.
        </p>
      </section>
      <section className="container w-1/2">
        <Image
          alt="profile picture"
          src={profileImage}
          width="285"
          height="385"
          className="rounded-lg shadow-lg"
        />
        <ul className="flex space-x-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
