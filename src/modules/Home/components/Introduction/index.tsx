import { Box, Text } from "@chakra-ui/react";

export function Introduction() {
  return (
    <Box as="section" px={8} py={4} bg="blackAlpha.800">
      <Box>
        <Text as="h2" fontSize={["2xl"]}>
          Olá, sou o
        </Text>
        <Text
          as="h2"
          fontSize={["5xl"]}
          fontWeight="bold"
          color="pink.500"
          lineHeight="56px"
        >
          Tiago Gonçalves
        </Text>
      </Box>
    </Box>
  );
}
