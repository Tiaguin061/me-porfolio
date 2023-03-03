import { Box, Flex, ScaleFade, Text, useDisclosure } from "@chakra-ui/react";

import { CardInformation } from "./CardInformation";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";
import { KaguyaModal } from "./ModalToShowMore/Modals/kaguya";
import { MonkeynautModal } from "./ModalToShowMore/Modals/Monkeynauts";

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
                  title="Software Developer and co-Founder at Kaguya"
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
                  title="Software Developer at The monkeynauts"
                  experienceDate="Dez/2021 - Set/2022"
                  description={
                    <>
                      <Text textIndent={"20px"}>
                        Trabalhei como freelancer em uma equipe composta por
                        outros desenvolvedores, na qual fui um dos responsáveis
                        pelo desenvolvimento de uma API completa para uso em
                        jogos ou na web.
                      </Text>
                      <Text textIndent={"20px"}>
                        O projeto contém diversas funcionalidades, desde a
                        criação de contas até a administração do painel, além de
                        sistemas para criação de itens de vendas para transações
                        com criptomoedas e outras funcionalidades.
                      </Text>
                      <Text textIndent={"20px"}>
                        Fui o único responsável pelo desenvolvimento de todo o
                        projeto frontend web, tendo que implementar o consumo da
                        API, conectar carteiras de criptomoedas e construir todo
                        o layout do painel de usuário e administrativo.
                      </Text>
                    </>
                  }
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: monkeynautsModal.onOpen,
                  }}
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Software Developer at Nou"
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
      <MonkeynautModal modal={monkeynautsModal} />
    </Box>
  );
}
