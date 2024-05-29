import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex direction="column" height="calc(100vh - 96px)">
      {/* Top Box for the Heading */}
      <Box bg="red.100" height="27%" position="relative">
        <Flex
          height="100%"
          align="flex-end"
          justify="center"
          position="relative"
        >
          <Flex width="100%" maxW="1200px" justify="center" align="center">
            <Box textAlign="right" pr={2} position="relative" zIndex="1">
              <Heading
                as="h1"
                size="4xl"
                fontWeight="bold"
                fontFamily="Karla, sans-serif"
                letterSpacing="0.03em"
              >
                Synaptic\
              </Heading>
            </Box>
            <Box textAlign="left" pl={2} position="relative" zIndex="1">
              <Text
                fontSize="2xl"
                fontWeight="medium"
                fontFamily="Merriweather, serif"
              >
                Terapia para la vida real.
              </Text>
            </Box>
          </Flex>
          {/* <Box
            position="absolute"
            bottom="0"
            width="100%"
            height="10px"
            bg="purple.500 "
            zIndex="0"
          ></Box> */}
        </Flex>
      </Box>

      {/* Bottom Box for the Button */}
      <Box bg="red.100" height="73%">
        <Flex
          height="100%"
          direction="column"
          align="center"
          justify="flex-start"
          p={4}
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
