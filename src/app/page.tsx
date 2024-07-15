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
          color="#f4e8c1" // Dutch White for "Synaptic" text
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
          color="#DCAE96"
          textAlign={{ base: "center", lg: "right" }}
          fontSize={{ base: "8vw", lg: "3.5vw", xl: "4vw" }}
          fontWeight="bold"
          fontFamily="roca"
          padding={{ base: "0 10vh", lg: 0 }}
        >
          terapia para la vida real.
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
        width="100%" // Ensuring the GridItem itself takes full width
      >
        <Link href="/calendar" _hover={{ textDecoration: "none" }}>
          <CustomButton
            size="xl"
            width={{ base: "100%", md: "100%", lg: "50%", xl: "40%" }} // Adjusting width for various screen sizes
            maxWidth="120vw"
            bg="#de6b48" // Burnt Sienna for button background
            borderRadius={14}
            color="#f4e8c1" // Dutch White for button text
            fontFamily="roca thin"
            fontSize={{ base: "1.5em", md: "1.5em", lg: "2.5em", xl: "3.5em" }}
            _hover={{
              bg: "#C4A582", // Deep Olive Green on hover
              color: "#ffffff", // White text on hover
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
