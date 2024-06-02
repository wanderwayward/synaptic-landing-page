import { Box } from "@chakra-ui/react";

export default function Background() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      bgGradient="linear(71deg, rgba(120, 161, 187) 51%, rgba(168, 87, 81) 50%)"
      clipPath="polygon(0 0, 45% 0, 55% 0 100%)"
      zIndex={0}
    />
  );
}
