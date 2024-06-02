import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Background from "./_components/FrontPage/FrontPageBackground/FrontPageBackground";
import CustomButton from "./_components/button/CustomButton";

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
        <Flex align="center" justify="space-around" width="100%" maxW="1500px">
          <Box flex="1" textAlign="center" pr={4}>
            <Heading
              as="h1"
              fontSize="10em"
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
              color="#F8F4E3"
            >
              Terapia para la vida real.
            </Text>
          </Box>
        </Flex>

        <Link href="/calendar">
          <CustomButton
            size="xl"
            bg="#E12B29"
            borderRadius={10}
            color="white"
            fontFamily="roca thin"
            _hover={{ bg: "#FF312E", boxShadow: "lg" }}
          >
            Agenda Tu Cita Aquí
          </CustomButton>
        </Link>
      </Flex>
    </Box>
  );
}
