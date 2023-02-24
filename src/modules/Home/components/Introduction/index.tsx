import {
  Box,
  Flex,
  Image,
  ScaleFade,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

export function Introduction() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" id="introduction" px={8} py={4} bg="blackAlpha.800">
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
        <Flex
          gap={8}
          alignItems="center"
          justifyContent="center"
          mx="auto"
          my={0}
          mt={[0, 8]}
          maxW={860}
          h="auto"
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
          {isLargerThan800 && (
            <Box>
              <Image
                src="/eu.jpg"
                alt="Eu"
                objectFit="cover"
                align="center"
                w={240}
                h={240}
                borderRadius="50%"
              />
            </Box>
          )}
        </Flex>
      </ScaleFade>
    </Box>
  );
}
