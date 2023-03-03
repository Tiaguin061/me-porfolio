import { skillsElements } from "@/utils/skillsElements";
import { Image, Text } from "@chakra-ui/react";
import { ModalToShowMoreContainer } from "../Container";

const carrouselImages = [
  <Image
    key={0}
    src="/experiences/monkeynauts1.png"
    alt="Topo da tela inicial do aplicativo da Monkeynaut."
  />,
  <Image
    key={1}
    src="/experiences/monkeynauts2.png"
    alt="Tela principal do usuário logado no aplicativo da Monkeynaut."
  />,
  <Image
    key={2}
    src="/experiences/monkeynauts3.png"
    alt="Sessão de sugestões que está sendo construida na plataforma Monkeynaut"
  />,
  <Image
    key={3}
    src="/experiences/monkeynauts4.png"
    alt="Sessão de sugestões que está sendo construida na plataforma Monkeynaut"
  />,
];

const backendSkills = [
  skillsElements.backend.typescript,
  skillsElements.backend.nodejs,
  skillsElements.backend.expressjs,
  skillsElements.backend.prismaorm,
  skillsElements.backend.postgressql,
  skillsElements.backend.web3,
];

const frontendSkills = [
  skillsElements.frontend.nextjs,
  skillsElements.frontend.styledcomponents,
  skillsElements.frontend.metamask,
];

export interface MonkeynautModalProps {
  modal: {
    isOpen: boolean;
    onClose: () => void;
  };
}

export function MonkeynautModal({ modal }: MonkeynautModalProps) {
  return (
    <ModalToShowMoreContainer
      modal={modal}
      carrouselImages={carrouselImages}
      modalTitle="Monkeynaut"
      skills={{
        backend: backendSkills,
        frontend: frontendSkills,
      }}
      links={{
        accessPlatform: "https://themonkeynauts.netlify.app",
        accessGithub: "https://github.com/Tiaguin061/themonkeynauts",
      }}
    >
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        Trabalhei como freelancer em uma equipe composta por outros
        desenvolvedores, onde fui um dos responsáveis pelo desenvolvimento de
        uma API completa para ser utilizada em jogos ou na web.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        O projeto possui um painel de usuário e administrativo. O usuário pode
        criar sua conta e conectar uma carteira de criptomoeda. Essa carteira
        será responsável pelas transações realizadas no aplicativo.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        O aplicativo é baseado na ideia de possuir &quot;monkeynauts&quot; e
        naves para jogar o jogo que seria desenvolvido por outras pessoas da
        equipe de desenvolvimento. Com o eCommerce desenvolvido na plataforma,
        que vende monkeynauts, naves ou pacotes que contêm ambos de forma
        aleatória, basta o usuário ter valor em sua carteira de criptomoeda para
        realizar transações e, a partir disso, o sistema adicionará um
        monkeynaut ou nave em sua conta.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        O serviço de transação de criptomoedas é o mais complexo do aplicativo,
        com a transação sendo feita pelo frontend e validada pelo backend.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        O painel administrativo possui funcionalidades para criar novos itens e
        remover da loja. Também pode enviar &quot;air drops&quot; NFT, que envia
        monkeynauts ou naves diretamente para o usuário. É possível banir
        determinado jogador, restringindo a conta de acessar os recursos da
        plataforma e API. Além disso, é possível definir parâmetros do jogo,
        onde a API pode consumir os dados para configurações e outras
        funcionalidades.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px"></Text>
    </ModalToShowMoreContainer>
  );
}
