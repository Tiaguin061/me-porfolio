import { Box, Flex, ScaleFade, useDisclosure } from "@chakra-ui/react";

import { CardInformation } from "./CardInformation";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";
import { KaguyaModal } from "./ModalToShowMore/Modals/kaguya";

export function ProfessionalExperienceList() {
  const scaleFade = useDisclosure();

  const kaguyaModal = useDisclosure();
  const monkeynautsModal = useDisclosure();
  const nouModal = useDisclosure();

  return (
    <Box as="section" id="professional-experience" pt={10} pb={6} px={4}>
      <ScaleFade
        initialScale={0.6}
        in={scaleFade.isOpen}
        onViewportEnter={scaleFade.onOpen}
        onViewportLeave={scaleFade.onClose}
      >
        <Flex
          alignItems="center"
          flexDirection="column"
          mx="auto"
          my="0"
          maxW={860}
        >
          <SectionTitle mb={8}>Experiência profissional</SectionTitle>

          <Flex justifyContent="flex-start" w="100%">
            <Flex
              gap={4}
              alignItems="flex-start"
              flexDirection="column"
              w="100%"
            >
              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Software Engineer and co-Founder at Kaguya"
                  experienceDate="Ago/2021 - Em andamento"
                  description="Em parceria com um amigo, sou co-fundador da Kaguya, na qual é um projeto educacional B2B que visa estruturar conteúdos da internet sugeridos pela própria comunidade."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: kaguyaModal.onOpen,
                  }}
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Software Engineer at The monkeynauts"
                  experienceDate="Dez/2021 - Set/2022"
                  description="Trabalhei como freelancer em uma equipe e desenvolvemos uma API completa para um jogo, utilizando NodeJS. A API possui recursos como sistema de compras com criptomoedas, entre outras características, e foi consumida no frontend com ReactJS."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: monkeynautsModal.onOpen,
                    cursor: "no-drop",
                    _hover: {
                      bg: "initial",
                    },
                  }}
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Software Engineer at Nou"
                  experienceDate="Ago/2022 - Dez/2022"
                  description="Também trabalhei como freelancer e desenvolvi uma API completa para a criação de empresas, cargos e usuários, usando NodeJS. Essa API foi consumida no frontend com ReactJS."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: nouModal.onOpen,
                    cursor: "no-drop",
                    _hover: {
                      bg: "initial",
                    },
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ScaleFade>

      <KaguyaModal modal={kaguyaModal} />
    </Box>
  );
}
