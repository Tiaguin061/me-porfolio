import { SectionTitle } from "@/components/SectionTitle";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Objective() {
  return (
    <Box as="section" py={8} px={4} bg="blackAlpha.800">
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Objetivo</SectionTitle>

        <Text as="p" mt={4} color="gray.300">
          Com 3 anos de experiência sendo Desenvolvedor web Fullstack, sou
          criativo e possuo habilidades na criação de códigos utilizando a stack
          Javascript/Tyescript. Busco atuar na área de programação como Backend,
          Frontend ou Fullstack.
        </Text>
      </Flex>
    </Box>
  );
}
