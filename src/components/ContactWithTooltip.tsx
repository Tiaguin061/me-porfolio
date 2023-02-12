import { Button, ButtonProps, Tooltip, TooltipProps } from "@chakra-ui/react";

export interface ContactWithTooltipProps {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  tooltipProps?: TooltipProps;
}

export function ContactWithTooltip({
  children,
  tooltipProps,
  buttonProps,
}: ContactWithTooltipProps) {
  return (
    <Tooltip hasArrow bg="pink.500" {...tooltipProps}>
      <Button
        alignItems="center"
        gap={2}
        py={2}
        px={4}
        mt={1}
        bg="gray.100"
        borderRadius="md"
        cursor="pointer"
        fontWeight="normal"
        fontSize={["md"]}
        lineHeight="20px"
        _hover={{
          bg: "gray.100",
        }}
        {...buttonProps}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
