import { Box, Flex, Text } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

import { CustomLink } from "@/components/CustomLink";
import { SectionTitle } from "@/components/SectionTitle";
import Aos from "aos";
import { useEffect } from "react";

export function Objective() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box
      data-aos="fade-left"
      as="section"
      id="objective"
      py={8}
      px={4}
      bg="blackAlpha.800"
    >
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Objetivo</SectionTitle>

        <Flex flexDirection="column">
          <Text as="p" mt={4} mb={2} color="gray.300">
            Minha meta é atuar como freelancer ou em uma empresa fixa na área de
            programação, seja como Backend, Frontend ou Fullstack, trabalhando
            com as tecnologias NextJS, NodeJS e Typescript.
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
    </Box>
  );
}
