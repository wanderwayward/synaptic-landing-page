import React from "react";
import { useBreakpointValue, Box } from "@chakra-ui/react";

const TestComponent = () => {
  const breakpointValue = useBreakpointValue({ base: "base", md: "medium" });
  return <Box>{`Breakpoint Value: ${breakpointValue}`}</Box>;
};

export default TestComponent;
