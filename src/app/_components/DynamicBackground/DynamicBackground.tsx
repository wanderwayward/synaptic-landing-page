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
        setBgGradient("rgba(66, 66, 66)");
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
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
          }
          .top-triangle {
            width: 40vw;
            height: 65vh;
            background: rgba(255, 182, 39);
            clip-path: polygon(70% 0%, 100% 0%, 100% 100%);
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1;
          }
          .bottom-triangle {
            width: 150vw;
            height: 55vh;
            background: rgba(255, 182, 39);
            clip-path: polygon(100% 0%, 90% 100%, 100% 100%);
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 1;
          }
        `}
      />
      <Box className="dynamic-background" />
      <Box className="top-triangle" />
      <Box className="bottom-triangle" />
      <Box position="relative" zIndex={2}>
        {children}
      </Box>
    </>
  );
};

export default DynamicBackground;
