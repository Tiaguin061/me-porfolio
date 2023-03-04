import { Box, Flex } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";

import { Skill } from "@/components/Skill";

export function HardSkills() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
        Hard Skills
      </SectionTitle>

      <Box display="flex" flexWrap="wrap" gap={2}>
        <Skill title="Microsserviços" />
        <Skill title="SOLID" />
        <Skill title="Arquitetura limpa" />
        <Skill title="Código limpo" />
      </Box>
    </Flex>
  );
}
