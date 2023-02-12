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
    >
      <Box display="flex" alignItems="center" gap={2}>
        {icon}
        <Text fontSize={["md"]} mt={1} lineHeight="20px">
          {title}
        </Text>
      </Box>
    </Box>
  );
}
