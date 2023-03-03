import {
  Box,
  Fade,
  Flex,
  Highlight,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

import { CustomLink } from "@/components/CustomLink";
import { SectionTitle } from "@/components/SectionTitle";

export function Objective() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      id="objective"
      py={8}
      px={4}
      bg="blackAlpha.800"
      position="relative"
    >
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
        <Flex
          alignItems="center"
          flexDirection="column"
          mx="auto"
          my="0"
          maxW={860}
        >
          <SectionTitle>Objetivo</SectionTitle>

          <Flex flexDirection="column">
            <Text
              as="p"
              mt={4}
              mb={2}
              color="gray.300"
              textAlign="left"
              textIndent={"20px"}
            >
              <Highlight
                query={[
                  "atuar",
                  "Backend, Frontend ou Fullstack",
                  "NextJS, NodeJS e Typescript",
                ]}
                styles={{ fontWeight: "bold", color: "white" }}
              >
                Minha meta é atuar como freelancer ou em uma empresa fixa na
                área de programação, seja como Backend, Frontend ou Fullstack,
                trabalhando com as tecnologias NextJS, NodeJS e Typescript.
              </Highlight>
            </Text>

            <CustomLink
              link="#contact-me"
              linkProps={{
                w: "max-content",
                transition: "all 0.2s",
                _hover: {
                  filter: "brightness(110%)",
                },
              }}
            >
              Entre em contato
              <RiArrowDownSLine size={20} />
            </CustomLink>
          </Flex>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
