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
                description="Desenvolvi um projeto pessoal em parceria com um amigo, que é uma plataforma para organizar conteúdos dispersos na internet."
                hasAboutMoreButton
              />
            </Flex>

            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="The monkeynauts"
                experienceDate="Dez/2021 - Set/2022"
                description="Trabalhei como freelancer em uma equipe e desenvolvemos uma API completa para um jogo, utilizando NodeJS. A API possui recursos como sistema de compras com criptomoedas, entre outras características, e foi consumida no frontend com ReactJS."
                hasAboutMoreButton
              />
            </Flex>

            <Flex gap={2} alignItems="flex-start">
              <TimeLine />
              <CardInformation
                title="Nou"
                experienceDate="Ago/2022 - Dez/2022"
                description="Também trabalhei como freelancer e desenvolvi uma API completa para a criação de empresas, cargos e usuários, usando NodeJS. Essa API foi consumida no frontend com ReactJS."
                hasAboutMoreButton
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
