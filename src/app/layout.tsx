"use client";

import { Box, useMediaQuery, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomChakraProvider from "./_components/CustomChakraProvider/CustomChakraProvider";
import ParticleBackground from "./_components/ParticleBackground/ParticleBackground";
import Loading from "./_components/Loading/Loading";
import DynamicBackground from "./_components/DynamicBackground/DynamicBackground";
import { MEDIA_QUERIES } from "@/app/_constants/mediaQueries";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // Media queries for determining the gradient during initial load
  const [isSM] = useMediaQuery(MEDIA_QUERIES.sm);
  const [isMd] = useMediaQuery(MEDIA_QUERIES.md);
  const [isLg] = useMediaQuery(MEDIA_QUERIES.lg);

  let initialGradient =
    "linear-gradient(73deg, rgba(44, 62, 80) 51%, rgba(255, 111, 97) 51%)";
  if (isSM) {
    initialGradient =
      "linear-gradient(183deg, rgba(44, 62, 80) 27.2%, rgba(255, 111, 97) 27.2%)";
  } else if (isMd) {
    initialGradient =
      "linear-gradient(182deg, rgba(44, 62, 80) 34%, rgba(255, 111, 97) 34%)";
  } else if (isLg) {
    initialGradient =
      "linear-gradient(183deg, rgba(44, 62, 80) 30%, rgba(255, 111, 97) 30%)";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setInitialLoadComplete(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const renderNavLinks = () => {
    switch (pathname) {
      case "/calendar":
        return <Link href="/about">Acerca de Nosotros</Link>;
      case "/about":
        return <Link href="/">Inicio</Link>;
      default:
        return <Link href="/about">Acerca de Nosotros</Link>;
    }
  };

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
                <DynamicBackground
                  page={pathname}
                  initialGradient={initialGradient}
                >
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
                      justifyContent={{ base: "center", md: "flex-end" }}
                      alignItems="center"
                      zIndex={3}
                      position="relative"
                    >
                      <Heading
                        as="h1"
                        size="lg"
                        fontFamily="roca"
                        color="white"
                        sx={{
                          "&:hover": {
                            textShadow: "0 0 2px #DE3C4B",
                          },
                        }}
                      >
                        {renderNavLinks()}
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
                  </Flex>
                </DynamicBackground>
              </>
            )}
          </Box>
        </CustomChakraProvider>
      </body>
    </html>
  );
}
