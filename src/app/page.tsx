// app/page.tsx
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex direction="column" height="calc(100vh - 96px)">
      <Box
        bg="rgba(255, 0, 0, 0.5)"
        height="20%"
        position="relative"
        zIndex={2}
        pb={4}
      >
        <Flex
          height="100%"
          align="flex-end"
          justify="center"
          position="relative"
        >
          <Flex
            width="100%"
            maxW="1200px"
            justify="center"
            align="center"
            position="relative"
            zIndex={3}
          >
            <Box textAlign="right" pr={2}>
              <Heading
                as="h1"
                size="4xl"
                fontWeight="bold"
                fontFamily="Karla, sans-serif"
                letterSpacing="0.03em"
                lineHeight="1"
                color="white"
              >
                Synaptic\
              </Heading>
            </Box>
            <Box textAlign="left" pl={2}>
              <Flex alignItems="center" height="100%">
                <Text
                  fontSize="2xl"
                  fontWeight="medium"
                  fontFamily="Merriweather, serif"
                  lineHeight="1"
                  color="white"
                >
                  Terapia para la vida real.
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Bottom Box for the Button */}
      <Box bg="rgba(30, 57, 103, 0.54)" height="80%" zIndex={2}>
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
