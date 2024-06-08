import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import HexagonClippedImage from "../_components/Hexagon/HexagonClippedImage";
import HexagonClippedBox from "../_components/Hexagon/HexagonClippedBox";
import { text, textTwo } from "../_components/text";

export default function AboutUsPage() {
  const imageUrl = "/Sigmund_Freud_1926_(cropped).jpg";

  return (
    <Flex
      justify="center"
      align="center"
      height="calc(100vh - 48px)" // Accounting for the navbar
      overflow="hidden"
      position="relative"
      // No need to set background color here, as it's predefined
    >
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        height="100%"
        width="80%"
        gap={4} // Increase the gap for better spacing
        mt="-10vh" // Move the grid slightly up to prevent clipping
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ transform: "translateX(-9%)" }}
        >
          {/* Stack the HexagonClippedImage and HexagonClippedBox components */}
          <Box position="relative" width="55vh" height="55vh">
            <HexagonClippedBox />

            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              zIndex="1"
            >
              <HexagonClippedImage imageUrl={imageUrl} />
            </Box>
          </Box>
        </GridItem>

        <GridItem
          rowSpan={1}
          colSpan={1}
          display="flex"
          alignItems="center"
          style={{ transform: "translateX(-9%)" }}
        >
          <Box
            position="relative" // Ensure the pseudo-element is positioned relative to this Box
            boxShadow="lg"
            bg="#bbadff" // Mauve background
            borderRadius="0.25em"
            p="1em"
            _before={{
              content: '""',
              position: "absolute",
              top: "0.2em",
              left: "0.2em",
              right: "-0.4em",
              bottom: "-0.4em",
              backgroundColor: "#d1ffc6", // Tea Green for pseudo-element background
              zIndex: -1, // Place it behind the main content
              borderRadius: "0.35em", // Slightly larger border radius for a shadow effect
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)", // Optional: Add shadow to the pseudo-element
            }}
          >
            <Text
              fontSize="2em"
              mb="1em"
              color="#424242"
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 1
            </Text>
            <Text
              mb="0.5em"
              fontSize="1.2em"
              color="#424242"
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text fontSize="1.2em" color="#424242" fontFamily="roca thin">
              {textTwo}
            </Text>
          </Box>
        </GridItem>

        <GridItem
          rowSpan={1}
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          style={{ transform: "translateX(-9%)" }}
        >
          <Box
            position="relative" // Ensure the pseudo-element is positioned relative to this Box
            boxShadow="lg"
            bg="#bbadff" // Mauve background
            borderRadius="0.25em"
            p="1em"
            textAlign="right"
            _before={{
              content: '""',
              position: "absolute",
              top: "0.2em",
              left: "0.2em",
              right: "-0.4em",
              bottom: "-0.4em",
              backgroundColor: "#d1ffc6", // Tea Green for pseudo-element background
              zIndex: -1, // Place it behind the main content
              borderRadius: "0.35em", // Slightly larger border radius for a shadow effect
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)", // Optional: Add shadow to the pseudo-element
            }}
          >
            <Text
              fontSize="2em"
              mb="1em"
              color="#424242"
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 2
            </Text>
            <Text
              mb="0.5em"
              fontSize="1.2em"
              color="#424242"
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text fontSize="1.2em" color="#424242" fontFamily="roca thin">
              {textTwo}
            </Text>
          </Box>
        </GridItem>

        <GridItem
          rowSpan={1}
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="-14vh"
          style={{ transform: "translateX(9%)" }}
        >
          {/* Stack the HexagonClippedImage and HexagonClippedBox components */}
          <Box position="relative" width="55vh" height="55vh" top={16}>
            <HexagonClippedBox />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              zIndex="1"
            >
              <HexagonClippedImage imageUrl={imageUrl} />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
