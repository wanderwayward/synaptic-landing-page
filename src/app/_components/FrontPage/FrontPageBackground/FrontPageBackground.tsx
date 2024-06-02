import { Box } from "@chakra-ui/react";

export default function Background() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      bgGradient="linear(71deg, rgba(239, 199, 229, 0.75) 47.5%, rgba(249, 199, 132, 0.75) 57%)"
      clipPath="polygon(0 0, 45% 0, 55% 0 100%)"
      zIndex={0}
    />
  );
}
