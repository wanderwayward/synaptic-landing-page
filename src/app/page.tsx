"use client";
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import CustomButton from "./_components/button/CustomButton";
import { MEDIA_QUERIES } from "./_constants/mediaQueries";
import { useMediaQuery } from "@chakra-ui/react";

const HomePage = () => {
  const [isSM] = useMediaQuery(MEDIA_QUERIES.sm);
  const [isMD] = useMediaQuery(MEDIA_QUERIES.md);
  const [isLG] = useMediaQuery(MEDIA_QUERIES.lg);
  const [isXL] = useMediaQuery(MEDIA_QUERIES.xl);
  const [isXXL] = useMediaQuery(MEDIA_QUERIES.xxl);

  if (isSM) {
    console.log("SM", MEDIA_QUERIES.sm);
  } else if (isMD) {
    console.log("MD", MEDIA_QUERIES.md);
  } else if (isLG) {
    console.log("LG", MEDIA_QUERIES.lg);
  } else if (isXL) {
    console.log("XL", MEDIA_QUERIES.xl);
  } else if (isXXL) {
    console.log("XXL", MEDIA_QUERIES.xxl);
  }

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={4}
      p={4}
      mt={10} // Add margin-top to push down the whole layout
    >
      {/* Item 1 */}
      <GridItem
        colSpan={{ base: 1, lg: 1 }}
        rowSpan={{ base: 1, lg: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={{ lg: "2em", xl: "10em" }} // Add margin-left to bring text closer together
        mb={{ base: 4, lg: 0 }} // Adjust bottom margin to bring items closer
      >
        <Box
          color="#DE3C4B"
          fontSize={{ lg: "8vw", xl: "8vw" }}
          fontWeight="bold"
          fontFamily="roca"
        >
          Synaptic
        </Box>
      </GridItem>

      {/* Item 2 */}
      <GridItem
        colSpan={{ base: 1, lg: 1 }}
        rowSpan={{ base: 1, lg: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={{ lg: "-12em", xl: "-10em" }} // Add margin-left to bring text closer together
        mt={{ base: 0, lg: -4 }} // Adjust top margin to bring items closer on large screens
      >
        <Box
          color="#0D00A4"
          fontSize={{ lg: "3.5vw", xl: "4vw" }}
          fontWeight="bold"
          fontFamily="roca"
        >
          terapia para la vida real
        </Box>
      </GridItem>

      {/* Button */}
      <GridItem
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={{ base: 1, lg: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/calendar">
          <CustomButton
            size="xl"
            bg="#d1ffc6"
            borderRadius={10}
            color="#DE3C4B"
            fontFamily="roca thin"
            _hover={{
              bg: "#c0e9b5",
              color: "#FFFFFF",
              boxShadow: "0 0.25em 0.5em rgba(0, 0, 0, 0.1)",
            }}
          >
            Agenda Tu Cita Aquí
          </CustomButton>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
