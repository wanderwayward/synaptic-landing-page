import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import CustomButton from "./_components/button/CustomButton";

export default function HomePage() {
  return (
    <Box position="relative" minHeight="calc(100vh - 96px)" overflow="hidden">
      <Flex
        direction="column"
        align="center"
        justify="center"
        zIndex={2}
        position="relative"
        px={4}
        pt={150}
        mt="48px"
        className="fade-in-title"
      >
        <Flex align="center" justify="space-around" width="100%" maxW="1500px">
          <Box flex="1" textAlign="center" pr={10} ml={-10}>
            <Heading
              as="h1"
              fontSize="10.5em" // Increased font size
              fontWeight="bold"
              fontFamily="roca, sans-serif"
              letterSpacing="0.03em"
              lineHeight="2"
              color="#DE3C4B" // Keeping Scarlet for consistency
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
              color="#0D00A4" // Changing to Duke Blue for better integration
            >
              Terapia para la vida real.
            </Text>
          </Box>
        </Flex>

        <Link href="/calendar">
          <CustomButton
            size="xl"
            bg="#d1ffc6" // Tea Green for the button background
            borderRadius={10}
            color="#DE3C4B" // Duke Blue for the button text
            fontFamily="roca thin"
            _hover={{
              bg: "#c0e9b5", // Slightly darker Tea Green on hover
              color: "#FFFFFF", // White text on hover for contrast
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            }}
          >
            Agenda Tu Cita Aquí
          </CustomButton>
        </Link>
      </Flex>
    </Box>
  );
}
