import { Box, Flex } from "@chakra-ui/react";

import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiDatabase } from "react-icons/di";

import { SectionTitle } from "@/components/SectionTitle";

import { Skill } from "./Skill";

export function BackendSkills() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
        Backend
      </SectionTitle>

      <Box display="flex" flexWrap="wrap" gap={2}>
        <Skill
          icon={<SiTypescript color="#007acc" size={20} />}
          title="Typescript"
        />

        <Skill
          icon={<SiTypescript color="#44883e" size={20} />}
          title="NodeJS"
        />

        <Skill
          icon={<SiJavascript color="#F0DB4F" size={20} />}
          title="ExpressJS"
        />

        <Skill icon={<SiNestjs color="#E0234E" size={20} />} title="NestJS" />

        <Skill icon={<GrGraphQl color="#e535ab" size={20} />} title="Graphql" />

        <Skill
          icon={<SiPrisma color="#44883e" size={20} />}
          title="PrismaORM"
        />

        <Skill
          icon={<DiDatabase color="#b16e25" size={20} />}
          title="TypeORM"
        />

        <Skill
          icon={<SiPostgresql color="#008bb9" size={20} />}
          title="PostgresSQL"
        />
      </Box>
    </Flex>
  );
}
