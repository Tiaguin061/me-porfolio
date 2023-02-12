import { Box, ScaleFade, Text, useDisclosure } from "@chakra-ui/react";

export function Introduction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" id="introduction" px={8} py={4} bg="blackAlpha.800">
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
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
      </ScaleFade>
    </Box>
  );
}
