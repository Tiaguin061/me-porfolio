import { skillsElements } from "@/utils/skillsElements";
import { Highlight, Image, Text } from "@chakra-ui/react";
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
      modalTitle={
        <Highlight query={["Kaguya"]} styles={{ color: "pink.500" }}>
          Software Developer and Co-founder at Kaguya
        </Highlight>
      }
      skills={{
        backend: backendSkills,
        frontend: frontendSkills,
      }}
      links={{
        accessPlatform: "https://kaguya.com.br",
      }}
    >
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        O projeto funciona com base em trilhas e playlists, ou seja, cada trilha
        representa uma tecnologia diferente e, ao acessá-la, serão listadas
        todas as playlists com as aulas relacionadas àquela trilha. Os nomes
        foram escolhidos desta forma para transmitir menos a perspectiva de que
        se trata de uma plataforma de cursos comum. A ideia é que o usuário
        tenha um caminho direto ao ponto para o aprendizado, baseado no que a
        própria comunidade mesmo válida como bom e de qualidade.
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        Com o sistema de criação e listagens de sugestões sendo desenvolvido em
        microserviço, o aluno poderá sugerir uma nova trilha de conteúdos, para
        que a comunidade avalie se deseja ir para a plataforma. Esta é uma das
        funcionalidades mais importantes do aplicativo, pois conecta o aluno com
        a plataforma, fazendo com que seja mais participativo.
      </Text>

      <Text fontSize={["md"]} mt={2} color="gray.100" textIndent="20px">
        A coleta de dados será outro ponto importante, pois com isto, será
        possível otimizar o perfil de usuário e adicionar novas funcionalidades
        no futuro que agregará a comunidade de programação, como por exemplo a
        conexão de empresa e aluno, que é fazer o aluno ter um perfil de
        excelência para que recrutadores de empresas possam acessar a plataforma
        e buscar os melhores alunos para uma possível contratação.
      </Text>
    </ModalToShowMoreContainer>
  );
}
