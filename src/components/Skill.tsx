import { Box, Text } from "@chakra-ui/react";

export interface SkillProps {
  icon?: React.ReactElement;
  title: string;
}

export function Skill({ icon, title }: SkillProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="gray.800"
      borderRadius="md"
      py={2}
      px={4}
      transition="all 0.2s"
      _hover={{
        filter: "brightness(120%)",
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        {icon}
        <Text fontSize={["sm", "md"]} mt={1} lineHeight="20px">
          {title}
        </Text>
      </Box>
    </Box>
  );
}
