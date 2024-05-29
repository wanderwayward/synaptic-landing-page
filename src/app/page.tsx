// app/page.tsx
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex direction="column" height="calc(100vh - 96px)">
      <Box
        bg="rgba(255, 0, 0, 0.5)"
        height="27%"
        position="relative"
        zIndex={2}
      >
        <Flex
          height="100%"
          align="flex-end"
          justify="center"
          position="relative"
        >
          <Flex width="100%" maxW="1200px" justify="center" align="center">
            <Box
              textAlign="right"
              pr={2}
              position="relative"
              zIndex={3}
              mb="-0.7em"
            >
              <Heading
                as="h1"
                size="4xl"
                fontWeight="bold"
                fontFamily="Karla, sans-serif"
                letterSpacing="0.03em"
                lineHeight="1"
              >
                Synaptic
              </Heading>
            </Box>
            <Box textAlign="left" pl={2} position="relative" zIndex={3}>
              <Text
                fontSize="2xl"
                fontWeight="medium"
                fontFamily="Merriweather, serif"
                lineHeight="1"
              >
                Terapia para la vida real.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Bottom Box for the Button */}
      <Box bg="rgba(0, 0, 0, 0.8)" height="73%" zIndex={2}>
        <Flex
          height="100%"
          direction="column"
          align="center"
          justify="flex-start"
          p={4}
          position="relative"
          zIndex={3}
        >
          <Button
            colorScheme="teal"
            size="lg"
            mt={4}
            fontFamily="Merriweather, serif"
          >
            Agenda Tu Cita
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
