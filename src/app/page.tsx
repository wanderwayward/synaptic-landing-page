"use client";
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import CustomButton from "./_components/button/CustomButton";
import "./page.module.css";

const HomePage = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
      rowGap={0}
      gap={{ lg: "none", xl: 4 }}
      mt={{ base: 24 }}
    >
      {/* Item 1 */}
      <GridItem
        colSpan={{ base: 1, lg: 1 }}
        rowSpan={{ base: 1, lg: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={{ lg: "2em", xl: "10em" }}
        mb={{ base: -2, lg: 0 }}
      >
        <Box
<<<<<<< Updated upstream
          color="#DE3C4B"
=======
          color="#FFFFF0" // Ivory for "Synaptic" text
>>>>>>> Stashed changes
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
        ml={{ lg: "-12em", xl: "-10em" }}
        mt={{ base: -2, lg: -4 }}
      >
        <Box
<<<<<<< Updated upstream
          color="#0D00A4"
=======
          color="#7C0A02" // Golden Brown for "terapia para la vida real" text
>>>>>>> Stashed changes
          textAlign={{ base: "center", lg: "right" }}
          fontSize={{ base: "8vw", lg: "3.5vw", xl: "4vw" }}
          fontWeight="bold"
          fontFamily="roca"
          padding={{ base: "0 10vh", lg: 0 }}
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
        mt={{ base: 14, lg: 0 }}
      >
        <Link href="/calendar" _hover={{ textDecoration: "none" }}>
          <CustomButton
            size="xl"
<<<<<<< Updated upstream
            width={{ base: "90%" }} // Set responsive width
            maxWidth="120vw" // Ensure max width doesn't exceed a certain size
            bg="#d1ffc6"
            borderRadius={10}
            color="#DE3C4B"
            fontFamily="roca thin"
            fontSize={{ base: "1.5em", md: "1.5em", lg: "2.5em", xl: "3.5em" }}
            _hover={{
              bg: "#c0e9b5",
=======
            width={{ base: "90%" }}
            maxWidth="120vw"
            bg="#228B22" // Forest Green for button background
            borderRadius={10}
            color="#FFFFF0" // Ivory for button text
            fontFamily="roca thin"
            fontSize={{ base: "1.5em", md: "1.5em", lg: "2.5em", xl: "3.5em" }}
            _hover={{
              bg: "#FFDAB9", // Peach for hover background
              color: "#996515", // Golden Brown for hover text
>>>>>>> Stashed changes
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            Agenda Tu Cita Aquí
          </CustomButton>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
