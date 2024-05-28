// app/_components/ChakraProvider.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChakraProviderProps {
  children: ReactNode;
}

const CustomChakraProvider = ({ children }: ChakraProviderProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default CustomChakraProvider;
