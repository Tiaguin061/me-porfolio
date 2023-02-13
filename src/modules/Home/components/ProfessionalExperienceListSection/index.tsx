import {
  Box,
  Flex,
  Image,
  ScaleFade,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import { FaNodeJs } from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

import { CardInformation } from "./CardInformation";

import { SectionTitle } from "@/components/SectionTitle";
import { TimeLine } from "@/components/TimeLine";
import { CustomLink } from "@/components/CustomLink";
import { Skill } from "@/components/Skill";

export function ProfessionalExperienceList() {
  const scaleFade = useDisclosure();

  const modal = useDisclosure();

  return (
    <Box as="section" id="professional-experience" pt={10} pb={6} px={4}>
      <ScaleFade
        initialScale={0.6}
        in={scaleFade.isOpen}
        onViewportEnter={scaleFade.onOpen}
        onViewportLeave={scaleFade.onClose}
      >
        <Flex alignItems="center" flexDirection="column">
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
                  title="Kaguya"
                  experienceDate="Ago/2021 - Em andamento"
                  description="Desenvolvi um projeto pessoal em parceria com um amigo, que é uma plataforma para organizar conteúdos dispersos na internet."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: modal.onOpen,
                  }}
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="The monkeynauts"
                  experienceDate="Dez/2021 - Set/2022"
                  description="Trabalhei como freelancer em uma equipe e desenvolvemos uma API completa para um jogo, utilizando NodeJS. A API possui recursos como sistema de compras com criptomoedas, entre outras características, e foi consumida no frontend com ReactJS."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: modal.onOpen,
                  }}
                />
              </Flex>

              <Flex gap={2} alignItems="flex-start">
                <TimeLine />
                <CardInformation
                  title="Nou"
                  experienceDate="Ago/2022 - Dez/2022"
                  description="Também trabalhei como freelancer e desenvolvi uma API completa para a criação de empresas, cargos e usuários, usando NodeJS. Essa API foi consumida no frontend com ReactJS."
                  hasAboutMoreButton
                  buttonProps={{
                    onClick: modal.onOpen,
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ScaleFade>

      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay bg="rgba(23, 25, 33, 0.6)" />
        <ModalContent bg="blackAlpha.600" mx={4} maxW={["1024px"]}>
          <ModalBody p={0} mb={4}>
            <Carousel dynamicHeight showThumbs={false} infiniteLoop>
              <Image
                src="/experiences/kaguya1.png"
                alt="Topo da tela inicial do aplicativo da Kaguya."
              />
              <Image
                src="/experiences/kaguya2.png"
                alt="Tela principal do usuário logado no aplicativo da Kaguya."
              />
              <Image
                src="/experiences/kaguya3.png"
                alt="Sessão de sugestões que está sendo construida na plataforma Kaguya"
              />
            </Carousel>
            <Flex flexDirection="column" px={4} pt={4}>
              <Flex justifyContent="space-between">
                <Text as="h2" fontWeight="bold" fontSize={["2xl"]}>
                  Kaguya
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

              <Box>
                <Text
                  fontSize={["md"]}
                  mt={2}
                  color="gray.100"
                  textIndent="20px"
                >
                  Em parceria com um amigo, decidimos iniciar um projeto para
                  solucionar a falta de organização dos conteúdos gratuitos
                  (principalmente vídeos) na internet. Aqui está um breve resumo
                  do projeto.
                </Text>
                <Text
                  fontSize={["md"]}
                  mt={2}
                  color="gray.100"
                  textIndent="20px"
                >
                  Inicialmente, a plataforma tem a capacidade de organizar
                  completamente os conteúdos, permitindo que os usuários criem
                  suas contas e possam aprender de forma organizada.
                </Text>
                <Text
                  fontSize={["md"]}
                  mt={2}
                  color="gray.100"
                  textIndent="20px"
                >
                  Atualmente, o nosso projeto principal utiliza{" "}
                  <strong>
                    NodeJS com Express, seguindo os princípios da arquitetura de
                    software SOLID
                  </strong>
                  . Estamos implementando uma funcionalidade de comunidade, que
                  permite aos próprios usuários contribuírem com a plataforma,
                  adicionando novos conteúdos, através de um{" "}
                  <strong>microserviço com NestJS e Graphql</strong>. Esta
                  funcionalidade será crucial para aprimorar o perfil do usuário
                  e prepará-lo para as funcionalidades futuras, que incluirão a
                  possibilidade de empresas buscarem os melhores alunos na
                  plataforma.
                </Text>
                <Text
                  fontSize={["md"]}
                  mt={2}
                  color="gray.100"
                  textIndent="20px"
                >
                  Em resumo, nosso objetivo é melhorar o perfil dos usuários
                  para tornar a plataforma cada vez mais atraente para empresas
                  buscarem os melhores alunos. Esta funcionalidade de{" "}
                  <strong>empresa x aluno</strong> é um dos objetivos que será
                  adicionado neste projeto.
                </Text>
              </Box>

              <Flex flexDirection="column">
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  mt={4}
                  gap={4}
                >
                  <Flex flexDirection="column" alignItems="flex-start">
                    <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
                      Backend
                    </SectionTitle>
                    <Flex flexWrap="wrap" gap={2}>
                      <Skill
                        icon={<SiTypescript color="#007acc" size={20} />}
                        title="Typescript"
                      />

                      <Skill
                        icon={<FaNodeJs color="#44883e" size={20} />}
                        title="NodeJS"
                      />

                      <Skill
                        icon={<SiJavascript color="#F0DB4F" size={20} />}
                        title="ExpressJS"
                      />

                      <Skill
                        icon={<SiPrisma color="#44883e" size={20} />}
                        title="PrismaORM"
                      />

                      <Skill
                        icon={<SiPostgresql color="#008bb9" size={20} />}
                        title="PostgresSQL"
                      />

                      <Skill
                        icon={<SiNestjs color="#E0234E" size={20} />}
                        title="NestJS"
                      />

                      <Skill
                        icon={<GrGraphQl color="#e535ab" size={20} />}
                        title="Graphql"
                      />
                    </Flex>
                  </Flex>
                  <Flex flexDirection="column" alignItems="flex-start">
                    <SectionTitle as="span" fontSize={["xs"]} mb={1.5}>
                      Frontend
                    </SectionTitle>
                    <Flex flexWrap="wrap" gap={2}>
                      <Skill
                        icon={<TbBrandNextjs color="#eff0ef" size={20} />}
                        title="NextJS"
                      />

                      <Skill
                        icon={<SiChakraui color="#4BFFFF" size={20} />}
                        title="ChakraUI"
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt={6}>
                  <CustomLink
                    link="http://kaguya.com.br"
                    linkProps={{
                      bg: "pink.500",
                      color: "white",
                      target: "_blank",
                    }}
                  >
                    Acessar a plataforma
                    <RiArrowRightSLine size={20} />
                  </CustomLink>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
