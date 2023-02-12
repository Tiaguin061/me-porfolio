import { Box, Flex, ScaleFade, useDisclosure } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";

import { CardInformation } from "./CardInformation";

export function FormationsListSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" py={10} px={4} bg="blackAlpha.800">
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
        <Flex alignItems="center" flexDirection="column">
          <SectionTitle>Formações</SectionTitle>

          <Flex mt={6} justifyContent="flex-start" w="100%">
            <Flex
              gap={4}
              alignItems="flex-start"
              flexDirection="column"
              w="100%"
            >
              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Javascript e Typescript do básico ao avançado"
                  local="Udemy - Luiz Otávio Miranda"
                  experienceDate="Nov/2020 - Fev/2023"
                  description="Com o longo curso que fiz, tive a oportunidade de me aprofundar mais nas tecnologias que domino e adquirir mais experiência para aplicar nos meus projetos."
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Cursando Técnico em informatica administrativa nível
                profissional"
                  local="Microcamp"
                  experienceDate="Dez/2021 - Out/2023"
                  description="Estou participando de um curso presencial, no qual estou desenvolvendo minhas habilidades no pacote Office, com conteúdos relacionados à administração."
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
