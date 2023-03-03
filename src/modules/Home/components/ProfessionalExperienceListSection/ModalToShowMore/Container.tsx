import { CustomLink } from "@/components/CustomLink";
import { SectionTitle } from "@/components/SectionTitle";
import { Skill } from "@/components/Skill";
import {
  Box,
  Button,
  Flex,
  Image,
  ImageProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  UseDisclosureProps,
} from "@chakra-ui/react";

import { FaNodeJs } from "react-icons/fa";
import {
  SiChakraui,
  SiGithub,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

import { Carousel } from "react-responsive-carousel";

export interface ModalToShowMoreContainerProps {
  modal: {
    isOpen: boolean;
    onClose: () => void;
  };

  carrouselImages: React.ReactElement<ImageProps>[];

  modalTitle: string | React.ReactNode;

  children?: React.ReactNode;

  skills: {
    backend?: React.ReactElement | React.ReactElement[];
    frontend?:
      | React.ReactElement<typeof Skill>
      | React.ReactElement<typeof Skill>[];
  };

  links?: {
    accessPlatform?: string;
    accessGithub?: string;
  };
}

// "/experiences/kaguya1.png" "Topo da tela inicial do aplicativo da Kaguya."

export function ModalToShowMoreContainer({
  modal,
  carrouselImages,
  modalTitle,
  children,
  skills,
  links,
}: ModalToShowMoreContainerProps) {
  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
      <ModalOverlay bg="rgba(23, 25, 33, 0.6)" />
      <ModalContent bg="blackAlpha.600" mx={4} maxW={["1024px"]}>
        <ModalBody p={0} mb={4}>
          <Carousel dynamicHeight showThumbs={false} infiniteLoop>
            {carrouselImages.map((image, key) => (
              <Image key={key} src={image.props.src} alt={image.props.alt} />
            ))}
          </Carousel>
          <Flex flexDirection="column" px={4} pt={4}>
            <Flex justifyContent="space-between">
              <Text as="h2" fontWeight="bold" fontSize={["2xl"]}>
                {modalTitle}
              </Text>

              <Button
                alignItems="center"
                gap={2}
                py={2}
                px={4}
                mt={1}
                bg="none"
                borderRadius="md"
                cursor="pointer"
                fontWeight="normal"
                fontSize={["md"]}
                lineHeight="20px"
                _hover={{
                  bg: "none",
                }}
                onClick={modal.onClose}
              >
                X
              </Button>
            </Flex>

            <Box>{children}</Box>

            <Flex flexDirection="column">
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                mt={4}
                gap={4}
              >
                {skills.backend && (
                  <Flex flexDirection="column" alignItems="flex-start">
                    <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
                      Backend
                    </SectionTitle>
                    <Flex flexWrap="wrap" gap={2}>
                      {Array.isArray(skills.backend)
                        ? skills.backend.map((skill, key) => (
                            <Box key={key}>{skill}</Box>
                          ))
                        : skills.backend}
                    </Flex>
                  </Flex>
                )}
                {skills.frontend && (
                  <Flex flexDirection="column" alignItems="flex-start">
                    <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
                      Frontend
                    </SectionTitle>
                    <Flex flexWrap="wrap" gap={2}>
                      {Array.isArray(skills.frontend)
                        ? skills.frontend.map((skill, key) => (
                            <Box key={key}>{skill}</Box>
                          ))
                        : skills.frontend}
                    </Flex>
                  </Flex>
                )}
              </Flex>
              <Flex
                mt={6}
                flexDirection={["column", "row"]}
                gap={2}
                maxW="max-content"
                w="100%"
              >
                {links?.accessPlatform && (
                  <CustomLink
                    link={links?.accessPlatform}
                    linkProps={{
                      bg: "pink.500",
                      color: "white",
                      target: "_blank",
                      justifyContent: "center",
                    }}
                  >
                    Acessar a plataforma
                    <RiArrowRightSLine size={20} />
                  </CustomLink>
                )}
                {links?.accessGithub && (
                  <CustomLink
                    link={links?.accessGithub}
                    linkProps={{
                      bg: "gray.600",
                      color: "white",
                      target: "_blank",
                      justifyContent: "center",
                    }}
                  >
                    <SiGithub size={20} />
                    Códigos no Github
                  </CustomLink>
                )}
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
