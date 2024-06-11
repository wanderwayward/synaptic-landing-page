"use client";
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import CustomButton from "./_components/button/CustomButton";
import "./page.module.css";

const HomePage = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
      rowGap={0} // Ensure row gap is 0
      gap={{ lg: "none", xl: 4 }}
      mt={{ base: 24 }} // Add margin-top to push down the whole layout
    >
      {/* Item 1 */}
      <GridItem
        colSpan={{ base: 1, lg: 1 }}
        rowSpan={{ base: 1, lg: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={{ lg: "2em", xl: "10em" }} // Add margin-left to bring text closer together
        mb={{ base: -2, lg: 0 }} // Apply negative margin-bottom to bring items closer
      >
        <Box
          color="#ffffff" // Pure White for "Synaptic" text
          fontSize={{ base: "18vw", lg: "8vw", xl: "8vw" }}
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
        mt={{ base: -2, lg: -4 }} // Apply negative margin-top to bring items closer
      >
        <Box
          color="#800020" // Rich Burgundy for "terapia para la vida real" text
          textAlign={{ base: "center", lg: "right" }}
          fontSize={{ base: "8vw", lg: "3.5vw", xl: "4vw" }}
          fontWeight="bold"
          fontFamily="roca"
          padding={{ base: "0 10vh", lg: 0 }} // Reduce padding for base screen size
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
        mt={{ base: 14, lg: 0 }} // Add margin-top to push down the button
      >
        <Link href="/calendar" _hover={{ textDecoration: "none" }}>
          <CustomButton
            size="xl"
            width={{ base: "90%" }} // Set responsive width
            maxWidth="120vw" // Ensure max width doesn't exceed a certain size
            bg="#00b5ad" // Bright Teal for button background
            borderRadius={10}
            color="#ffffff" // Pure White for button text
            fontFamily="roca thin"
            fontSize={{ base: "1.5em", md: "1.5em", lg: "2.5em", xl: "3.5em" }}
            _hover={{
              bg: "#e6e6fa", // Soft Lavender for hover background
              color: "#708090", // Slate Gray for hover text
            }}
            // Apply flex properties for better centering control
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center" // Center text inside the button
          >
            Agenda Tu Cita Aquí
          </CustomButton>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
