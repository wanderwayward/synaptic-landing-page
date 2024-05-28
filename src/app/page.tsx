import { Box, Heading, Button, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex direction="column" height="calc(100vh - 96px)">
      <Box height="27%">
        <Flex height="100%" align="flex-end" justify="center" p={4}>
          <Heading as="h1" size="2xl" textAlign="center">
            SYNAPTIC - TERAPIA PARA LA VIDA REAL
          </Heading>
        </Flex>
      </Box>
      <Box height="73%">
        <Flex
          height="100%"
          direction="column"
          align="center"
          justify="flex-start"
          p={4}
        >
          <Button colorScheme="teal" size="lg">
            Agenda Tu Cita
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
