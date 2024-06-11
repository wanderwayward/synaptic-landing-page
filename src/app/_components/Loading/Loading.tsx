// app/_components/Loading.tsx
import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    width={{ base: "100%", md: "100%", lg: "80%", xl: "60%" }}
    backgroundColor="black"
  >
    <Spinner size="xl" />
  </Box>
);

export default Loading;
