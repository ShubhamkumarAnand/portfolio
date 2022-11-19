import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiLinux,
  SiCodio,
} from "react-icons/si";
import { VscVmActive } from "react-icons/vsc";

function Skills() {
  return (
    <div className="container mx-auto my-10 flex h-screen space-x-12">
      <section className="mr-10 mt-8 w-1/2">
        <h1 className="text-9xl font-medium text-white">Skills</h1>
        <p className="my-8 font-mono text-2xl font-medium tracking-wide text-gray-300">
          An individual eager to learn and explore new fields of life and
          technology, with good listening skills and fast learning abilities.
        </p>
        <div className="container w-2/3 items-center rounded-sm bg-yellow-700 p-6 shadow-lg hover:bg-yellow-100">
          <h3 className="my-2 text-2xl font-medium text-yellow-100">
            Interests
          </h3>
          <h3 className="text-xl font-medium text-white">
            Full Stack Development
          </h3>
          <h3 className="text-xl font-medium text-white">Writing Document</h3>
          <h3 className="text-xl font-medium text-white">Public Speaking</h3>
        </div>
      </section>
      <section className="container mx-auto w-1/2">
        <ul className="container mx-32 flex space-x-12">
          <li>
            {" "}
            <TbBrandNextjs className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Next js
          </li>
          <li>
            {" "}
            <FaReact className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            React
          </li>
          <li>
            <SiTailwindcss className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Tailwind CSS
          </li>
          <li>
            <SiTypescript className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Typescript
          </li>
        </ul>
        <br />
        <ul className="container mx-32 flex space-x-12">
          <li>
            <SiJavascript className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            JavaScript
          </li>
          <li>
            <SiCodio className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            C++
          </li>
          <li>
            <SiHtml5 className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            HTML-5
          </li>
          <li>
            <SiCss3 className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            CSS-3
          </li>
        </ul>
        <br />
        <ul className="container mx-32 flex space-x-12">
          <li>
            <SiNodedotjs className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Node js
          </li>
          <li>
            <SiPostgresql className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Postgres
          </li>
          <li>
            <VscVmActive className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            VS Code
          </li>
          <li>
            <SiLinux className="my-4 h-20 w-20 rounded-xl bg-yellow-700 p-2" />{" "}
            Linux
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
