import { Box, Circle } from "@chakra-ui/react";

export function TimeLine() {
  return (
    <Box position="relative" display="flex" alignItems="flex-start" h="100%">
      <Circle
        size="20px"
        border="1px solid"
        borderColor="gray.600"
        bg="unset"
      />
      <Box
        w="1px"
        h="calc(100% - 35px)"
        bg="gray.600"
        position="absolute"
        top="35px"
        left="50%"
        transform="translateX(-50%)"
      />
    </Box>
  );
}
