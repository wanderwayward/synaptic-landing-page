// app/layout.tsx
import CustomChakraProvider from "./_components/CustomChakraProvider/CustomChakraProvider";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomChakraProvider>
          <Flex direction="column" minHeight="100vh">
            <Box
              as="header"
              bg="teal.500"
              p={4}
              color="white"
              height="48px"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Heading as="h1" size="lg">
                About Us
              </Heading>
            </Box>
            <Box as="main" flex="1" height="calc(100vh - 96px)">
              {children}
            </Box>
            <Box as="footer" bg="gray.200" p={4} height="48px">
              <Text>
                Si necesitas ayuda inmediata, existen estas call centers
              </Text>
            </Box>
          </Flex>
        </CustomChakraProvider>
      </body>
    </html>
  );
}
