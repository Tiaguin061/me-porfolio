import { Text, TextProps } from "@chakra-ui/react";

export interface SectionTitleProps extends TextProps {
  children?: React.ReactNode;
}

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return (
    <Text
      as="h2"
      textTransform="uppercase"
      textAlign="center"
      position="relative"
      letterSpacing="wider"
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "60%",
        height: "2px",
        background: "gray.100",
      }}
      {...rest}
    >
      {children || "Default"}
    </Text>
  );
}
