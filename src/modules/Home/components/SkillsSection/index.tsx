import { Text, Box, Flex } from "@chakra-ui/react";

import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiStyledcomponents,
  SiCss3,
  SiChakraui,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { GiFoxHead } from "react-icons/gi";
import { DiDatabase, DiReact } from "react-icons/di";
import { SectionTitle } from "@/components/SectionTitle";
import { Skill } from "./Skill";
import { BackendSkills } from "./BackendSkills";
import { FrontendSkills } from "./FrontendSkills";

export function SkillsSection() {
  return (
    <Box as="section" mt={4} py={10} bg="blackAlpha.600" position="relative">
      <Box px={4}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <SectionTitle mb={4}>Habilidades</SectionTitle>

          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexWrap="wrap"
            w="100%"
            gap={6}
          >
            <BackendSkills />
            <FrontendSkills />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
