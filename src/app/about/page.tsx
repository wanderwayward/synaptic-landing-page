import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import HexagonClippedImage from "../_components/Hexagon/HexagonClippedImage";
import HexagonClippedBox from "../_components/Hexagon/HexagonClippedBox";
import { text, textTwo } from "../_constants/text";

export default function AboutUsPage() {
  const imageUrl = "/Sigmund_Freud_1926_(cropped).jpg";

  return (
    <Flex
      justify="center"
      align="center"
      height="calc(100vh - 48px)" // Accounting for the navbar
      position="relative"
      overflow={{ base: "auto", xl: "hidden" }}
    >
      <Grid
        templateRows={{ base: "repeat(4, auto)", lg: "repeat(2, 1fr)" }}
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        height="100%"
        width="80%"
        gap={4} // Increase the gap for better spacing
        mt={{ base: 0, md: "100px", lg: "-10vh" }} // Adjust for mobile and larger screens
      >
        {/* First Hexagon Image */}
        <GridItem
          rowSpan={{ base: 1, lg: 1 }}
          colSpan={{ base: 1, lg: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            transform: {
              base: "translateX(7.02%)", // Applies to screens smaller than `md`
              md: "translateX(-9%)",
              lg: "translateX(-6%)", // Applies to screens `lg` and larger
              xl: "translateX(-9%)", // Applies to screens `lg` and larger
            },
          }}
          order={{ base: 1, lg: 1 }} // Mobile and small screens: First, Large screens: Original
        >
          <Box
            position="relative"
            width={{ base: "80vw", sm: "50vw", md: "40vh", lg: "50vh" }}
            height={{ base: "80vw", sm: "50vw", md: "40vh", lg: "50vh" }}
            mb={{ md: "3vh" }} // Adjust margin for mobile and desktop
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
          mt={{ base: "none", md: "6vh" }} // Adjust margin for mobile and desktop
          rowSpan={{ base: 1, lg: 1 }}
          colSpan={{ base: 1, lg: 1 }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `lg`
              lg: "none", // Applies to screens `lg` and larger
              xl: "translateX(-9%)", // Applies to screens `lg` and larger
            },
          }}
          order={{ base: 2, lg: 2 }} // Mobile and small screens: Second, Large screens: Original
        >
          <Box
            position="relative"
            boxShadow="lg"
            bg="#FFFFF0" // Ivory for the main text box background
            borderRadius="0.25em"
            p={{ base: "1em", sm: "1.5em", md: "2em" }} // Increase padding for larger screens
            _before={{
              content: '""',
              position: "absolute",
              top: "0.2em",
              left: "0.2em",
              right: "-0.4em",
              bottom: "-0.4em",
              backgroundColor: "#D8C3A5", // Warm Beige for the pseudo-element
              zIndex: -1, // Place it behind the main content
              borderRadius: "0.35em", // Slightly larger border radius for a shadow effect
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)", // Optional: Add shadow to the pseudo-element
            }}
          >
            <Text
              fontSize={{ base: "1.5em", sm: "1.75em", md: "2em" }}
              mb="1em"
              color="#2c3e50" // Deep Indigo for text color
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 1
            </Text>
            <Text
              mb="0.5em"
              fontSize={{ base: "1em", sm: "1em", md: "1.1em" }}
              color="#424242" // Onyx for text color
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text
              fontSize={{ base: "1em", sm: "1em", md: "1.1em" }}
              color="#424242" // Onyx for text color
              fontFamily="roca thin"
            >
              {textTwo}
            </Text>
          </Box>
        </GridItem>

        {/* Second Hexagon Image */}
        <GridItem
          rowSpan={{ base: 1, lg: 1 }}
          colSpan={{ base: 1, lg: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            transform: {
              base: "translateX(7.02%)", // Applies to screens smaller than `md`
              md: "translateX(-9%)",
              lg: "none",
              xl: "translateX(-9%)", // Applies to screens `lg` and larger
            },
          }}
          order={{ base: 3, lg: 4 }} // Mobile and small screens: First, Large screens: Original
        >
          <Box
            position="relative"
            width={{ base: "80vw", sm: "50vw", md: "40vh", lg: "50vh" }}
            height={{ base: "80vw", sm: "50vw", md: "40vh", lg: "50vh" }}
            mb={{ md: "3vh" }} // Adjust margin for mobile and desktop
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
          rowSpan={{ base: 1, lg: 1 }}
          colSpan={{ base: 1, lg: 1 }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", lg: "flex-end" }}
          textAlign={{ base: "center", lg: "right" }}
          sx={{
            transform: {
              base: "none", // Applies to screens smaller than `lg`
              lg: "none", // Applies to screens `lg` and larger
              xl: "translateX(-9%)", // Applies to screens `lg` and larger
            },
          }}
          order={{ base: 4, lg: 3 }} // Mobile and small screens: Fourth, Large screens: Third
        >
          <Box
            mt={{ base: "none", md: "6vh" }}
            mb={{ base: "6vh", lg: "5vh" }} // Adjust margin for mobile and desktop
            position="relative"
            boxShadow="lg"
            bg="#FFFFF0" // Ivory for the main text box background
            borderRadius="0.25em"
            p={{ base: "1em", sm: "1.5em", md: "2em" }} // Increase padding for larger screens
            textAlign={{ base: "center", lg: "right" }}
            _before={{
              content: '""',
              position: "absolute",
              top: "0.2em",
              left: "0.2em",
              right: "-0.4em",
              bottom: "-0.4em",
              backgroundColor: "#D8C3A5", // Warm Beige for the pseudo-element
              zIndex: -1, // Place it behind the main content
              borderRadius: "0.35em", // Slightly larger border radius for a shadow effect
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)", // Optional: Add shadow to the pseudo-element
            }}
          >
            <Text
              fontSize={{ base: "1.5em", sm: "1.75em", md: "1.5em" }}
              mb="1em"
              color="#2c3e50" // Deep Indigo for text color
              fontFamily="roca"
              fontWeight="bold"
            >
              About Therapist 2
            </Text>
            <Text
              mb="0.5em"
              fontSize={{ base: "1em", sm: "1em", md: "1.1em" }}
              color="#424242" // Onyx for text color
              fontFamily="roca thin"
            >
              {text}
            </Text>
            <Text
              fontSize={{ base: "1em", sm: "1em", md: "1.1em" }}
              color="#424242" // Onyx for text color
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
