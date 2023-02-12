import { SectionTitle } from "@/components/SectionTitle";
import { Box, Flex, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Box as="section" py={6} position="relative">
      <Box px={4}>
        <Flex alignItems="center" flexDirection="column">
          <SectionTitle>Sobre</SectionTitle>

          <Flex flexDirection="column" mt={4}>
            <Text as="p" color="gray.300" textIndent="20px">
              Em janeiro de 2020, comecei a conhecer conteúdos de programação e
              com o passar dos meses, fui me aprofundando até perceber que esta
              área é algo sensacional e que decidir seguir adiante como
              carreira.
            </Text>
            <Text as="p" color="gray.300" textIndent="20px" mt={1.5}>
              Ainda nesse ano, comecei a fazer freelances em ReactJS, aonde foi
              a porta de entrada para a carreira profissional, e então desde lá
              desenvolvi alguns projetos freelances, mas ainda não atuei fixo em
              empresa, o que acaba servindo de motivação para ir a fundo nos
              estudos e no objetivo como profissional.
            </Text>
            <Text as="p" color="gray.300" textIndent="20px" mt={1.5}>
              Com o passar do tempo, continuo ganhando experiências, tendo como
              principais caracteristicas ser proativo, produtivo e
              participativo, além de ter bastante senso de trabalho em equipe e
              soluções de problemas na área.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
