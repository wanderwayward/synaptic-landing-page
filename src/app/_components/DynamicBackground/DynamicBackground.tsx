"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { css, Global } from "@emotion/react";

interface DynamicBackgroundProps {
  page: string;
  children: ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  page,
  children,
}) => {
  const [bgGradient, setBgGradient] = useState<string>(
    "linear-gradient(73deg, rgba(66, 66, 66) 51%, rgba(255, 182, 39) 51%)"
  );

  useEffect(() => {
    switch (page) {
      case "/calendar":
        setBgGradient(
          "linear-gradient(73deg, rgba(66, 66, 66) 15%, rgba(255, 182, 39) 15%)"
        );
        break;
      case "/about":
        setBgGradient(
          "linear-gradient(73deg, rgba(66, 66, 66) 85%, rgba(255, 182, 39) 85%)"
        );
        break;
      default:
        setBgGradient(
          "linear-gradient(73deg, rgba(66, 66, 66) 51.5%, rgba(255, 182, 39) 51%)"
        );
        break;
    }
  }, [page]);

  return (
    <>
      <Global
        styles={css`
          .dynamic-background {
            background: ${bgGradient};
            background-size: 100% 100%;
            background-position: 50% 50%;
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
          }
        `}
      />
      <Box className="dynamic-background" />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </>
  );
};

export default DynamicBackground;
