import { Box, Flex } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";

import { frontend } from "@/utils/skillsElements";

export function FrontendSkills() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
        Frontend
      </SectionTitle>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {frontend.reactjs}
        {frontend.nextjs}
        {frontend.chakraui}
        {frontend.scss}
        {frontend.styledcomponents}
        {frontend.metamask}
      </Box>
    </Flex>
  );
}
