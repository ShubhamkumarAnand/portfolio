import Image from "next/image";
import profileImage from "/public/resources/imskanad.png";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";

function About() {
  return (
    <div className="container m-10 mx-auto flex h-screen space-x-24">
      <section className="mx-px mt-10 w-1/2">
        <h1 className="text-9xl font-medium tracking-wider text-white hover:text-yellow-50">
          About Me
        </h1>
        <p className="my-10 font-mono text-2xl tracking-wide text-gray-300 hover:text-yellow-100">
          I am Final Year Computer Science & Engineering Student and doing the
          programming since the Freshman year of my University.
        </p>
        <section className="container flex space-x-6">
          <button className="rounded-xl bg-black p-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110">
            <Link href="https://github.com/ShubhamkumarAnand">
              <FaGithub className="h-12 w-20" />
            </Link>
          </button>
          <button className="mx-2 rounded-xl bg-blue-500 p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-300">
            <Link href="https://www.linkedin.com/in/shubham-kumar-anand-19b52618b/">
              <FaLinkedin className="h-12 w-20" />
            </Link>
          </button>
        </section>
        <br />
        <button className="flex flex-row rounded-xl bg-red-700 p-4 text-3xl shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-300">
          <Link
            href="https://drive.google.com/file/d/1J5L3BecQG4EWmN8oI_1i7ETAlrmwxQ_R/view?usp=sharing"
            className=" -md flex space-x-2 font-medium"
          >
            <FaDownload className="mr-2" /> Resume
          </Link>
        </button>
      </section>
      <section className="container mx-auto w-1/2 ">
        <Image
          alt="profile picture"
          src={profileImage}
          className="mx-auto my-12 items-end rounded-full bg-yellow-500 shadow-xl hover:bg-yellow-300"
          width="385"
          height="385"
        />
        <ul className="mx-32 mt-16 flex space-x-4 font-bold">
          <li>
            <MdLeaderboard className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />
            LeaderShip Skills
          </li>
          <li>
            <BiCodeAlt className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />
            Problem Solving
          </li>
          <li>
            <GiPublicSpeaker className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Public Speaker
          </li>
          <li>
            <SiFuturelearn className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Learning
          </li>
        </ul>
      </section>
    </div>
  );
}
export default About;
