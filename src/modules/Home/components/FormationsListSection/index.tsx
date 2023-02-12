import { Box, Flex } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";

import { CardInformation } from "./CardInformation";

export function FormationsListSection() {
  return (
    <Box as="section" py={10} px={4} bg="blackAlpha.800">
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Formações</SectionTitle>

        <Flex mt={6} justifyContent="flex-start" w="100%">
          <Flex gap={4} alignItems="flex-start" flexDirection="column" w="100%">
            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="Javascript e Typescript do básico ao avançado"
                local="Udemy - Luiz Otávio Miranda"
                experienceDate="Nov/2020 - Fev/2023"
                description="Com este longo curso, pude aprofundar mais na stack que
                domino e adquirir experiência para aplicar nos projetos."
              />
            </Flex>

            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="Cursando Técnico em informatica administrativa nível
                profissional"
                local="Microcamp"
                experienceDate="Dez/2021 - Out/2023"
                description="Curso presencial, na qual estou desenvolvendo habilidade
                no pacote Office com conteúdos sobre administração."
                hasAboutMoreButton
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
