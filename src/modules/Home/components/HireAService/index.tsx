import { Box, Flex, useClipboard, useToast } from "@chakra-ui/react";
import { SiDiscord, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

import { SectionTitle } from "@/components/SectionTitle";
import { CustomLink } from "@/components/CustomLink";
import { ButtonWithTooltip } from "@/components/ButtonWithTooltip";
import { RiArrowUpSLine } from "react-icons/ri";

export function HireAService() {
  const { onCopy } = useClipboard("tiaguin180@gmail.com");
  const toast = useToast();

  function onClipboardEmail() {
    onCopy();

    toast({
      title: "E-mail copiado com sucesso.",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  }

  return (
    <Box
      as="section"
      id="contact-me"
      py={8}
      px={4}
      bg="blackAlpha.800"
      position="relative"
    >
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Contrate meu serviço</SectionTitle>

        <Flex mt={4} alignItems="flex-start" w="100%">
          <Flex alignItems="flex-start" flexWrap="wrap" gap={2}>
            <ButtonWithTooltip
              buttonProps={{
                onClick: onClipboardEmail,
              }}
              tooltipProps={{
                children: "",
                label: "Clique para copiar o e-mail",
                "aria-label": "Clique para copiar o e-mail",
              }}
            >
              <SiGmail color="#DB4437" />
              tiaguin180@gmail.com
            </ButtonWithTooltip>

            <CustomLink
              link="https://www.instagram.com/tiaguinho_gon1/"
              linkProps={{
                target: "_blank",
              }}
            >
              <SiInstagram color="#E1306C" />
              tiaguinho_gon1
            </CustomLink>

            <CustomLink
              link="https://www.linkedin.com/in/tiagogoncalves200428/"
              linkProps={{
                target: "_blank",
              }}
            >
              <SiLinkedin color="#1293d2" />
              Linkedin
            </CustomLink>

            <CustomLink
              link="https://discord.com/users/586186122611130368"
              linkProps={{
                target: "_blank",
              }}
            >
              <SiDiscord color="#7289da" />
              Discord
            </CustomLink>
          </Flex>
        </Flex>
      </Flex>

      <Flex position="absolute" right="2" bottom="2">
        <CustomLink
          link="#"
          linkProps={{
            p: 3,
          }}
        >
          <RiArrowUpSLine size={20} />
        </CustomLink>
      </Flex>
    </Box>
  );
}
