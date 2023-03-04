import { SectionTitle } from "@/components/SectionTitle";
import { Box, Flex, ScaleFade, Text, useDisclosure } from "@chakra-ui/react";

export function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" id="about" py={6} position="relative" bg="blackAlpha.800">
      <ScaleFade
        initialScale={0.6}
        in={isOpen}
        onViewportEnter={onOpen}
        onViewportLeave={onClose}
      >
        <Box px={4} mx="auto" my="0" maxW={860}>
          <Flex alignItems="center" flexDirection="column">
            <SectionTitle>Sobre</SectionTitle>

            <Flex flexDirection="column" mt={4}>
              <Text as="p" color="gray.300" textIndent="20px">
                Em Janeiro de 2020, entrei na área de programação e, ao longo
                dos meses, fui me aprofundando até perceber que essa área é
                incrível e defini seguir carreira.
              </Text>
              <Text as="p" color="gray.300" textIndent="20px" mt={1.5}>
                Nesse mesmo ano, comecei a trabalhar como freelancer, o que me
                deu a oportunidade de ingressar na carreira profissional. Desde
                então, desenvolvi alguns projetos como freelancer, mas ainda não
                trabalhei de forma fixa em uma empresa. Isso me motiva a estudar
                mais e buscar ser um profissional cada vez melhor.
              </Text>
              <Text as="p" color="gray.300" textIndent="20px" mt={1.5}>
                Gosto de me envolver em desafios, conversar com especialistas e
                buscar sempre evoluir, encontrando soluções que agreguem o
                melhor resultado para o cliente final. Tenho como principais
                características a proatividade, produtividade, participação
                ativa e senso de trabalho em equipe.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </ScaleFade>
    </Box>
  );
}
