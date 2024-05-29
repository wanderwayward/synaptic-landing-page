// app/layout.tsx
"use client";

import CustomChakraProvider from "./_components/CustomChakraProvider/CustomChakraProvider";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ParticleBackground from "./_components/ParticleBackground/ParticleBackground";

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
          <Box position="relative" minHeight="100vh" overflow="hidden">
            <Box position="absolute" width="100%" height="100%" zIndex={0}>
              <ParticleBackground />
            </Box>
            <Flex
              direction="column"
              minHeight="100vh"
              position="relative"
              zIndex={1}
            >
              <Flex
                as="header"
                bg="teal.500"
                p={4}
                color="white"
                height="48px"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Heading as="h1" size="lg">
                  About Us
                </Heading>
              </Flex>
              <Box as="main" flex="1">
                {children}
              </Box>
              <Box as="footer" bg="gray.200" p={4} height="48px">
                <Text>
                  Si necesitas ayuda inmediata, existen estas call centers
                </Text>
              </Box>
            </Flex>
          </Box>
        </CustomChakraProvider>
      </body>
    </html>
  );
}
