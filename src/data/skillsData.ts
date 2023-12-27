import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import {
      SiExpress,
      SiTailwindcss,
      SiJavascript,
      SiPostgresql,
      SiMysql,
      SiMongodb,
      SiVitest
} from "react-icons/si";

export const skills = {
  frontend: {
    title: "Frontend",
    stacks: [
      {
        stack: "HTML5",
        icon: FaHtml5,
      },
      {
        stack: "CSS",
        icon: FaCss3,
      },
      {
        stack: "JavaScript",
        icon: SiJavascript,
      },
      {
        stack: "React JS",
        icon: FaReact,
      },
      {
        stack: "Angular JS",
        icon: FaAngular,
      },
      {
        stack: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  backend: {
    title: "Backend",
    stacks: [
      {
        stack: "Node JS",
        icon: FaNodeJs,
      },
      {
        stack: "Express",
        icon: SiExpress,
      },
      {
        stack: "Mysql",
        icon: SiMysql,
      },
      {
        stack: "PostgreSql",
        icon: SiPostgresql,
      },
      {
        stack: "Mongodb",
        icon: SiMongodb,
      },
      {
        stack: "Vitest",
        icon: SiVitest,
      },
    ],
  },
};