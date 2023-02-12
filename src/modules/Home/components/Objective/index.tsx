import { SectionTitle } from "@/components/SectionTitle";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Objective() {
  return (
    <Box as="section" py={8} px={4} bg="blackAlpha.800">
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Objetivo</SectionTitle>

        <Text as="p" mt={4} color="gray.300">
          Minha meta é atuar como freelancer ou em uma empresa fixa na área de
          programação, seja como Backend, Frontend ou Fullstack, trabalhando com
          as tecnologias NextJS e/ou NodeJS, utilizando a stack
          Javascript/Typescript.
        </Text>
      </Flex>
    </Box>
  );
}
