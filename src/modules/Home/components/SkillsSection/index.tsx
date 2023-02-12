import { Box, ScaleFade, useDisclosure } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";
import { BackendSkills } from "./BackendSkills";
import { FrontendSkills } from "./FrontendSkills";

export function SkillsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      id="skills"
      mt={4}
      py={10}
      bg="blackAlpha.600"
      position="relative"
    >
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
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
      </ScaleFade>
    </Box>
  );
}
