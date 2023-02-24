import { Link, LinkProps } from "@chakra-ui/react";

export interface CustomLinkProps {
  children: React.ReactNode;
  link: string;
  linkProps?: LinkProps;
}

export function CustomLink({ link, linkProps, children }: CustomLinkProps) {
  return (
    <Link
      href={link}
      bg="gray.800"
      borderRadius="md"
      py={2.5}
      px={4}
      display="flex"
      alignItems="center"
      gap={2}
      fontSize={["md"]}
      lineHeight="20px"
      transition="all 0.2s"
      _hover={{
        filter: "brightness(120%)",
        textDecoration: "none",
      }}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
