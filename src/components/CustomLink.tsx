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
      _hover={{
        textDecoration: "none",
      }}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
