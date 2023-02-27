import { Box, Flex } from "@chakra-ui/react";

import { backend } from "@/utils/skillsElements";

import { SectionTitle } from "@/components/SectionTitle";

export function BackendSkills() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
        Backend
      </SectionTitle>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {backend.typescript}
        {backend.nodejs}
        {backend.expressjs}
        {backend.nestjs}
        {backend.graphql}
        {backend.prismaorm}
        {backend.typeorm}
        {backend.postgressql}
        {backend.firebase}
      </Box>
    </Flex>
  );
}
