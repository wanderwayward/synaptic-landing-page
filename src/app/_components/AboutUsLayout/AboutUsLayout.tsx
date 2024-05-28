// app/_components/AboutUsPageLayout.tsx
import { ReactNode } from "react";
import { Box, Flex, Text, Circle } from "@chakra-ui/react";

interface AboutUsPageLayoutProps {
  children: ReactNode;
}

const AboutUsLayout = ({ children }: AboutUsPageLayoutProps) => {
  return (
    <Box p={4}>
      <Flex direction="column" alignItems="center">
        <Circle size="100px" bg="blue.500" color="white" mb={4}>
          Papi Boy
        </Circle>
        <Text fontSize="lg" mb={4}>
          {/* About Us content */}
        </Text>
        <Circle size="100px" bg="green.500" color="white" mb={4}>
          More
        </Circle>
        {children}
      </Flex>
    </Box>
  );
};

export default AboutUsLayout;
