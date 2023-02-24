import { skillsElements } from "@/utils/skillsElements";
import { Image, Text } from "@chakra-ui/react";
import { ModalToShowMoreContainer } from "../Container";

const carrouselImages = [
  <Image
    key={0}
    src="/experiences/kaguya1.png"
    alt="Topo da tela inicial do aplicativo da Kaguya."
  />,
  <Image
    key={1}
    src="/experiences/kaguya2.png"
    alt="Tela principal do usuário logado no aplicativo da Kaguya."
  />,
  <Image
    key={2}
    src="/experiences/kaguya3.png"
    alt="Sessão de sugestões que está sendo construida na plataforma Kaguya"
  />,
];

const backendSkills = [
  skillsElements.backend.typescript,
  skillsElements.backend.nodejs,
  skillsElements.backend.expressjs,
  skillsElements.backend.prismaorm,
  skillsElements.backend.postgressql,
  skillsElements.backend.nestjs,
  skillsElements.backend.graphql,
];

const frontendSkills = [
  skillsElements.frontend.nextjs,
  skillsElements.frontend.chakraui,
];

export interface KaguyaModalProps {
  modal: {
    isOpen: boolean;
    onClose: () => void;
  };
}

export function KaguyaModal({ modal }: KaguyaModalProps) {
  return (
    <ModalToShowMoreContainer
      modal={modal}
      carrouselImages={carrouselImages}
      modalTitle="Kaguya"
      skills={{
        backend: backendSkills,
        frontend: frontendSkills,
      }}
      links={{
        accessPlatform: "https://kaguya.com.br",
      }}
    >
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        Em parceria com um amigo e eu como co-founder, decidimos iniciar o
        projeto para solucionar a falta de organização dos conteúdos gratuitos
        (principalmente vídeos) na internet. Aqui está um breve resumo do
        projeto.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        Inicialmente, a plataforma tem a capacidade de organizar completamente
        os conteúdos, permitindo que os usuários criem suas contas e possam
        aprender de forma organizada.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        Seguindo os princípios da <strong>arquitetura de software SOLID</strong>
        , estamos implementando uma funcionalidade de comunidade, que permite
        aos próprios usuários contribuírem com a plataforma, adicionando novos
        conteúdos, através de um{" "}
        <strong>microserviço com NestJS e Graphql</strong>.
      </Text>
    </ModalToShowMoreContainer>
  );
}
