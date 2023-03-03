import { Box, Button, ButtonProps, Text } from "@chakra-ui/react";

export interface CardInformation {
  title?: string | React.ReactNode;
  experienceDate?: string | React.ReactNode;
  description?: string | React.ReactNode;
  hasAboutMoreButton?: boolean;
  buttonProps?: ButtonProps;
}

export function CardInformation({
  title,
  description,
  experienceDate,
  hasAboutMoreButton,
  buttonProps,
}: CardInformation) {
  return (
    <Box display="flex" alignItems="flex-start" flexDirection="column">
      <Text fontWeight="bold" fontSize={["lg"]} lineHeight="20px">
        {title}
      </Text>
      <Text fontSize={["md"]} mt={1} color="gray.400">
        {experienceDate}
      </Text>
      <Text fontSize={["md"]} mt={2} color="gray.100">
        {description}
      </Text>
      {hasAboutMoreButton && (
        <Button
          bg="none"
          textDecoration="underline"
          p="0"
          transition="color 0.2s"
          _hover={{
            bg: "none",
            color: "pink.500",
          }}
          {...buttonProps}
        >
          Saiba mais
        </Button>
      )}
    </Box>
  );
}
