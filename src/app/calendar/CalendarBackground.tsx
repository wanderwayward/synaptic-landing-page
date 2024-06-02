import { Box } from "@chakra-ui/react";

export default function CalendarBackground() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      bgGradient="linear(71deg, rgba(120, 161, 187) 10%, rgba(222, 87, 81) 10%)"
      clipPath="polygon(0 0, 10% 0, 90% 0 100%)"
      zIndex={0}
    />
  );
}
