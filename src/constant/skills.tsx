import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandGit,
  TbBrandGolang,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const iconSize = "100%";

export const skills = [
  {
    name: "HTML",
    icon: <TbBrandHtml5 size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "CSS",
    icon: <TbBrandCss3 size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "TailwindCSS",
    icon: <TbBrandTailwind size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: <TbBrandBootstrap size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "Javascript",
    icon: <TbBrandJavascript size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "Typescript",
    icon: <TbBrandTypescript size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "ReactJS",
    icon: <TbBrandReact size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "Redux",
    icon: <TbBrandRedux size={iconSize} />,
    level: "Intermediate",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size={iconSize} />,
    level: "Beginner",
  },
  {
    name: "Golang",
    icon: <TbBrandGolang size={iconSize} />,
    level: "Beginner",
  },
  {
    name: "Git",
    icon: <TbBrandGit size={iconSize} />,
    level: "Intermediate",
  },
];
