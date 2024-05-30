// app/_components/Loading.tsx
import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    backgroundColor="white"
  >
    <Spinner size="xl" />
  </Box>
);

export default Loading;
