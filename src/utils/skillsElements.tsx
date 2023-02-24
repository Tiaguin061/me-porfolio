import { Skill } from "@/components/Skill";
import { DiDatabase, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GiFoxHead } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import {
  SiChakraui,
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const backend = {
  typescript: (
    <Skill
      icon={<SiTypescript color="#007acc" size={20} />}
      title="Typescript"
    />
  ),
  nodejs: (
    <Skill icon={<FaNodeJs color="#44883e" size={20} />} title="NodeJS" />
  ),
  expressjs: (
    <Skill
      icon={<SiJavascript color="#F0DB4F" size={20} />}
      title="ExpressJS"
    />
  ),
  prismaorm: (
    <Skill icon={<SiPrisma color="#44883e" size={20} />} title="PrismaORM" />
  ),
  typeorm: (
    <Skill icon={<DiDatabase color="#b16e25" size={20} />} title="TypeORM" />
  ),
  postgressql: (
    <Skill
      icon={<SiPostgresql color="#008bb9" size={20} />}
      title="PostgresSQL"
    />
  ),
  nestjs: (
    <Skill icon={<SiNestjs color="#E0234E" size={20} />} title="NestJS" />
  ),
  graphql: (
    <Skill icon={<GrGraphQl color="#e535ab" size={20} />} title="Graphql" />
  ),
};

export const frontend = {
  reactjs: (
    <Skill icon={<DiReact color="#2ac7e3" size={20} />} title="ReactJS" />
  ),
  nextjs: (
    <Skill icon={<TbBrandNextjs color="#eff0ef" size={20} />} title="NextJS" />
  ),
  chakraui: (
    <Skill icon={<SiChakraui color="#4BFFFF" size={20} />} title="ChakraUI" />
  ),
  scss: <Skill icon={<SiCss3 color="#2965f1" size={20} />} title="Scss/Css" />,
  styledcomponents: (
    <Skill
      icon={<SiStyledcomponents color="#d762e6" size={20} />}
      title="Styled-components"
    />
  ),
  firebase: (
    <Skill icon={<SiFirebase color="#FFA611" size={20} />} title="Firebase" />
  ),
  metamask: (
    <Skill icon={<GiFoxHead color="#F6851B" size={20} />} title="Metamask" />
  ),
};

export const skillsElements = {
  backend,
  frontend,
};
