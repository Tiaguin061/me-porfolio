import { Box, Flex } from "@chakra-ui/react";

import {
  SiChakraui,
  SiCss3,
  SiStyledcomponents,
  SiFirebase,
} from "react-icons/si";
import { DiReact } from "react-icons/di";

import { SectionTitle } from "@/components/SectionTitle";

import { Skill } from "./Skill";
import { TbBrandNextjs } from "react-icons/tb";
import { GiFoxHead } from "react-icons/gi";

export function FrontendSkills() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
        Frontend
      </SectionTitle>

      <Box display="flex" flexWrap="wrap" gap={2}>
        <Skill icon={<DiReact color="#2ac7e3" size={20} />} title="ReactJS" />

        <Skill
          icon={<TbBrandNextjs color="#eff0ef" size={20} />}
          title="NextJS"
        />

        <Skill
          icon={<SiChakraui color="#4BFFFF" size={20} />}
          title="ChakraUI"
        />

        <Skill icon={<SiCss3 color="#2965f1" size={20} />} title="Scss/Css" />

        <Skill
          icon={<SiStyledcomponents color="#d762e6" size={20} />}
          title="Styled-components"
        />

        <Skill
          icon={<SiFirebase color="#FFA611" size={20} />}
          title="Firebase"
        />

        <Skill
          icon={<GiFoxHead color="#F6851B" size={20} />}
          title="Metamask"
        />
      </Box>
    </Flex>
  );
}
