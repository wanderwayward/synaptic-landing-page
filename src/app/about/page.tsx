// app/about-us.tsx
import { Box, Flex, Text, Circle } from "@chakra-ui/react";

export default function AboutUsPage() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={4}
      height="100%"
    >
      <Circle size="100px" bg="blue.500" color="white" mb={4}>
        Papi Boy
      </Circle>
      <Text fontSize="lg" mb={4}>
        About Us content
      </Text>
      <Circle size="100px" bg="green.500" color="white" mb={4}>
        More
      </Circle>
      <Text>
        {/* Add more detailed information about the team or individuals here */}
      </Text>
    </Flex>
  );
}
