import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import customTheme from "@/app/_theme/theme";

interface ChakraProviderProps {
  children: ReactNode;
}

const CustomChakraProvider = ({ children }: ChakraProviderProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default CustomChakraProvider;
