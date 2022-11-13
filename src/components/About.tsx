import Image from "next/image";
import profileImage from "/public/resources/imskanad.png";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { url } from "inspector";

function About() {
  return (
    <div className="container mx-auto my-10 flex h-screen space-x-12">
      <section className="mx-auto w-1/2">
        <h1 className="text-9xl font-extrabold tracking-wider text-white">
          About Me
        </h1>
        <p className="my-10 font-mono text-3xl tracking-wider text-gray-300">
          I am Final Year Computer Science & Engineering Student and doing the
          programming since the Freshman year of my University.
        </p>
        <section className="container flex space-x-6">
          <button className="rounded-xl bg-white p-2 text-black duration-300 ease-in">
            <Link href="https://github.com/ShubhamkumarAnand">
              <FaGithub className="h-12 w-20" />
            </Link>
          </button>
          <button className="mx-2 rounded-xl bg-blue-500 p-2 text-white duration-300 ease-in">
            <Link
              href="https://www.linkedin.com/in/shubham-kumar-anand-19b52618b/"
              className=""
            >
              <FaLinkedin className="h-12 w-20" />
            </Link>
          </button>
        </section>
        <br />
        <button className="flex flex-row">
          <Link
            href="https://drive.google.com/file/d/1J5L3BecQG4EWmN8oI_1i7ETAlrmwxQ_R/view?usp=sharing"
            className=" flex space-x-2 rounded-xl bg-red-700 p-4 text-3xl shadow-md"
          >
            <FaDownload className="mx-auto" />
            <h2>Resume</h2>
          </Link>
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
        <ul className="my-16 mx-24 flex items-end space-x-8 font-bold">
          <li>LeaderShip Skills</li>
          <li>Problem Solving</li>
          <li>Communication Skills</li>
          <li>Learning</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
