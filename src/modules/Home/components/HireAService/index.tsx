import { Box, Flex, useClipboard, useToast } from "@chakra-ui/react";
import { SiDiscord, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

import { SectionTitle } from "@/components/SectionTitle";
import { ContactLink } from "@/components/ContactLink";
import { ContactWithTooltip } from "@/components/ContactWithTooltip";

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
    <Box as="section" id="contact-me" py={8} px={4} bg="blackAlpha.800">
      <Flex alignItems="center" flexDirection="column">
        <SectionTitle>Contrate meu serviço</SectionTitle>

        <Flex mt={4} alignItems="flex-start" w="100%">
          <Flex alignItems="flex-start" flexWrap="wrap" gap={2}>
            <ContactWithTooltip
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
            </ContactWithTooltip>

            <ContactLink link="https://www.instagram.com/tiaguinho_gon1/">
              <SiInstagram color="#E1306C" />
              tiaguinho_gon1
            </ContactLink>

            <ContactLink link="https://www.linkedin.com/in/tiagogoncalves200428/">
              <SiLinkedin color="#1293d2" />
              Linkedin
            </ContactLink>

            <ContactLink link="https://discord.com/users/586186122611130368">
              <SiDiscord color="#7289da" />
              Discord
            </ContactLink>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
