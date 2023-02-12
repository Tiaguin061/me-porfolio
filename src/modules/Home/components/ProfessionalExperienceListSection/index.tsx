import { Box, Flex } from "@chakra-ui/react";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";

import { CardInformation } from "./CardInformation";

export function ProfessionalExperienceList() {
  return (
    <Box as="section" pt={10} pb={6} px={4}>
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle mb={8}>Experiência profissional</SectionTitle>

        <Flex justifyContent="flex-start" w="100%">
          <Flex gap={4} alignItems="flex-start" flexDirection="column" w="100%">
            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="Kaguya"
                experienceDate="Ago/2021 - Em andamento"
                description="Projeto pessoal desenvolvido com um amigo, na qual é uma plataforma que visa organizar conteúdos espalhados pela internet."
                hasAboutMoreButton
              />
            </Flex>

            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="The monkeynauts"
                experienceDate="Dez/2021 - Set/2022"
                description="Projeto freelancer em equipe, aonde foi desenvolvido em
                NodeJS uma api completa do jogo, possuíndo sistema de
                compras com crypto moeda e entre outras features e
                consumida no frontend com ReactJS."
                hasAboutMoreButton
              />
            </Flex>

            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="Nou"
                experienceDate="Ago/2022 - Dez/2022"
                description=" Projeto freelancer, aonde foi desenvolvido em NodeJS uma api
                completa para criação de empresa, cargos e usuários e
                consumida no frontend com ReactJS."
                hasAboutMoreButton
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
