import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Background from "./_components/FrontPage/FrontPageBackground/FrontPageBackground";

export default function HomePage() {
  return (
    <Box position="relative" minHeight="calc(100vh - 96px)" overflow="hidden">
      <Background />
      <Flex
        direction="column"
        align="center"
        justify="center"
        zIndex={1}
        position="relative"
        px={4}
        pt={250}
        mt="48px"
      >
        <Flex
          align="center"
          justify="space-around"
          mb={4}
          width="100%"
          maxW="1500px"
        >
          <Box flex="1" textAlign="center" pr={4}>
            <Heading
              as="h1"
              fontSize="9.5em"
              fontWeight="bold"
              fontFamily="roca, sans-serif"
              letterSpacing="0.03em"
              lineHeight="2"
              color="#FC7A1E"
              pr={8}
            >
              Synaptic
            </Heading>
          </Box>
          <Box flex="1" textAlign="left" mr={8}>
            <Text
              fontSize="6xl"
              fontWeight="medium"
              fontFamily="roca thin"
              lineHeight="1"
              color="#FC7A1E"
            >
              Terapia para la vida real.
            </Text>
          </Box>
        </Flex>

        <Link href="/calendar" passHref>
          <Button
            bg="#FFBA08"
            mt={4}
            fontFamily="roca thin"
            _hover={{ bg: "#FFA000" }}
          >
            Agenda Tu Cita Aquí
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
