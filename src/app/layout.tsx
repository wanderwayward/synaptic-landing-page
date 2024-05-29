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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

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
