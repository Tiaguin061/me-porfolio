import { FlexProps, Link, LinkProps } from "@chakra-ui/react";

export interface ContactLinkProps {
  children: React.ReactNode;
  link: string;
  linkProps?: LinkProps;
}

export function ContactLink({ link, linkProps, children }: ContactLinkProps) {
  return (
    <Link
      href={link}
      bg="gray.100"
      borderRadius="md"
      py={2.5}
      px={4}
      target="_blank"
      display="flex"
      alignItems="center"
      gap={2}
      fontSize={["md"]}
      lineHeight="20px"
      _hover={{
        textDecoration: "none",
      }}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
