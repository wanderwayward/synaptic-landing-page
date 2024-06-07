import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import HexagonClippedImage from "../_components/Hexagon/HexagonClippedImage";
import HexagonClippedBox from "../_components/Hexagon/HexagonClippedBox";

export default function AboutUsPage() {
  const imageUrl = "/Sigmund_Freud_1926_(cropped).jpg";

  return (
    <Flex
      justify="center"
      align="center"
      height="calc(100vh - 48px)" // Accounting for the navbar
      overflow="hidden"
      position="relative"
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
          <Box boxShadow="lg" bg="tomato" borderRadius={4} p={4}>
            <Text fontSize="4xl" mb={4}>
              About Therapist 1
            </Text>
            <Text mb={2} fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text fontSize="xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate nihil est a totam et, hic eveniet, cumque incidunt error
              repellendus, laborum illo. Cupiditate consequatur iure expedita
              quod impedit quaerat facere? Totam eius illo voluptatem ipsam
              nesciunt natus, perferendis architecto quos laboriosam inventore
              illum iusto temporibus! Voluptatum dicta accusamus atque, tempore
              debitis sequi iste. Rerum asperiores illo, placeat blanditiis
              porro quod. Eius, at vitae! Quibusdam cum aliquid illo earum
              doloribus et aperiam ipsam. Deleniti, optio nisi explicabo
              voluptatem commodi fuga laboriosam hic maiores illo, labore, autem
              reprehenderit exercitationem dignissimos. Similique, quod!
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
            boxShadow="lg"
            bg="tomato"
            borderRadius={4}
            p={4}
            textAlign="right"
          >
            <Text fontSize="4xl" mb={4}>
              About Therapist 1
            </Text>
            <Text mb={2} fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text fontSize="xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate nihil est a totam et, hic eveniet, cumque incidunt error
              repellendus, laborum illo. Cupiditate consequatur iure expedita
              quod impedit quaerat facere? Totam eius illo voluptatem ipsam
              nesciunt natus, perferendis architecto quos laboriosam inventore
              illum iusto temporibus! Voluptatum dicta accusamus atque, tempore
              debitis sequi iste. Rerum asperiores illo, placeat blanditiis
              porro quod. Eius, at vitae! Quibusdam cum aliquid illo earum
              doloribus et aperiam ipsam. Deleniti, optio nisi explicabo
              voluptatem commodi fuga laboriosam hic maiores illo, labore, autem
              reprehenderit exercitationem dignissimos. Similique, quod!
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
