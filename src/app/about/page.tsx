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
      overflow={{ base: "auto", md: "hidden" }} // Scroll on mobile, hidden on desktop
      position="relative"
    >
      <Grid
        templateRows={{ base: "repeat(4, auto)", md: "repeat(2, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        height="100%"
        width="80%"
        gap={4} // Increase the gap for better spacing
        mt={{ base: 0, lg: "-10vh" }} // Adjust for mobile and larger screens
      >
        {/* First Hexagon Image */}
        <GridItem
          rowSpan={{ base: 1, md: 1 }}
          colSpan={{ base: 1, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `md`
              md: "translateX(-9%)", // Applies to screens `md` and larger
            },
          }}
          order={{ base: 1, md: 1 }} // Mobile: First, Desktop: Original
        >
          <Box
            position="relative"
            width={{ base: "80vw", md: "55vh" }}
            height={{ base: "80vw", md: "55vh" }}
          >
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

        {/* First Text Box */}
        <GridItem
          rowSpan={{ base: 1, md: 1 }}
          colSpan={{ base: 1, md: 1 }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `md`
              md: "translateX(-9%)", // Applies to screens `md` and larger
            },
          }}
          order={{ base: 2, md: 2 }} // Mobile: Second, Desktop: Original
        >
          <Box
            position="relative"
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
              fontSize={{ base: "1.5em", md: "2em" }}
              mb="1em"
              color="#424242"
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 1
            </Text>
            <Text
              mb="0.5em"
              fontSize={{ base: "1em", md: "1.2em" }}
              color="#424242"
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text
              fontSize={{ base: "1em", md: "1.2em" }}
              color="#424242"
              fontFamily="roca thin"
            >
              {textTwo}
            </Text>
          </Box>
        </GridItem>

        {/* Second Hexagon Image */}
        <GridItem
          rowSpan={{ base: 1, md: 1 }}
          colSpan={{ base: 1, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: "-5vh", md: "-14vh" }}
          mb={{ base: "5vh" }}
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `md`
              md: "translateX(-9%)", // Applies to screens `md` and larger
            },
          }}
          order={{ base: 3, md: 4 }} // Mobile: Third, Desktop: Fourth
        >
          <Box
            position="relative"
            width={{ base: "80vw", md: "55vh" }}
            height={{ base: "80vw", md: "55vh" }}
            top={16}
          >
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

        {/* Second Text Box */}
        <GridItem
          rowSpan={{ base: 1, md: 1 }}
          colSpan={{ base: 1, md: 1 }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-end" }}
          textAlign={{ base: "center", md: "right" }}
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `md`
              md: "translateX(-9%)", // Applies to screens `md` and larger
            },
          }}
          order={{ base: 4, md: 3 }} // Mobile: Fourth, Desktop: Third
        >
          <Box
            position="relative"
            boxShadow="lg"
            bg="#bbadff" // Mauve background
            borderRadius="0.25em"
            p="1em"
            textAlign={{ base: "center", md: "right" }}
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
            mb={{ base: "6vh", md: 0 }} // Adjust margin for mobile and desktop
          >
            <Text
              fontSize={{ base: "1.5em", md: "2em" }}
              mb="1em"
              color="#424242"
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 2
            </Text>
            <Text
              mb="0.5em"
              fontSize={{ base: "1em", md: "1.2em" }}
              color="#424242"
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text
              fontSize={{ base: "1em", md: "1.2em" }}
              color="#424242"
              fontFamily="roca thin"
            >
              {textTwo}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
