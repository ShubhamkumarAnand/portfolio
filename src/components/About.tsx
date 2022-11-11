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
        <section className="container flex space-x-6">
          <button className="button rounded-xl bg-white p-2 text-black">
            Github
          </button>
          <button className="button mx-2 rounded-xl bg-blue-500 p-2 text-white">
            LinkedIN
          </button>
        </section>
        <br />
        <button className="button rounded-3xl bg-red-700 p-4 text-2xl text-white">
          Resume
        </button>
      </section>
      <section className="container mx-auto w-1/2 ">
        <Image
          alt="profile picture"
          src={profileImage}
          className="mx-auto my-12 items-end rounded-full bg-yellow-500 shadow-xl"
          width="385"
          height="385"
        />
        <ul className=" container mx-auto my-16 flex space-x-6 font-semibold">
          <li>LeaderShip Skills</li>
          <li>Problem Solving</li>
          <li>Communication Skills</li>
          <li>Learning</li>
          <li>Time Management</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
