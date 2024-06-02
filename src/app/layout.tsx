"use client";

import CustomChakraProvider from "./_components/CustomChakraProvider/CustomChakraProvider";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ParticleBackground from "./_components/ParticleBackground/ParticleBackground";
import React, { useEffect, useState } from "react";
import Loading from "./_components/Loading/Loading";
import Background from "./_components/FrontPage/FrontPageBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

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
        <link rel="stylesheet" href="https://use.typekit.net/qqc5ylq.css" />
      </head>

      <body>
        <CustomChakraProvider>
          <Box position="relative" minHeight="100vh" overflow="hidden">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Background />
                <Box position="fixed" width="100%" height="100%" zIndex={1}>
                  <ParticleBackground />
                </Box>
                <Flex
                  direction="column"
                  minHeight="100vh"
                  position="relative"
                  zIndex={2}
                >
                  <Flex
                    as="header"
                    p={4}
                    color="#32021F"
                    height="48px"
                    justifyContent="flex-end"
                    alignItems="center"
                    zIndex={3}
                    position="relative"
                  >
                    <Heading as="h1" size="md" fontFamily="Karla">
                      Sobre Nosotros
                    </Heading>
                  </Flex>
                  <Box
                    as="main"
                    flex="1"
                    overflow="hidden"
                    position="relative"
                    zIndex={2}
                  >
                    {children}
                  </Box>
                  <Box
                    as="footer"
                    p={4}
                    height="48px"
                    zIndex={3}
                    position="relative"
                  >
                    <Text>Si necesitas ayuda inmediata:</Text>
                  </Box>
                </Flex>
              </>
            )}
          </Box>
        </CustomChakraProvider>
      </body>
    </html>
  );
}
