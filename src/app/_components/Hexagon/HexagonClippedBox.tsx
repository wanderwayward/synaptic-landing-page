"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import useScaleFactor from "@/app/_hooks/useScaleFactor";

const HexagonClippedBox = () => {
  const scaleFactor = useScaleFactor();

  const originalWidth = 242.4;
  const originalHeight = 198.77;
  const containerSize = 55; // in vh

  const scaledWidth = originalWidth * scaleFactor;
  const scaledHeight = originalHeight * scaleFactor;
  const scaledContainerSize = containerSize * scaleFactor;

  return (
    <Box
      position="relative"
      width={`${scaledContainerSize}vh`}
      height={`${scaledContainerSize}vh`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <svg
        viewBox={`0 0 ${scaledWidth} ${scaledHeight}`}
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id="hexagonClipBox">
            <path
              d={`
                M${77.55 * scaleFactor},${3.38 * scaleFactor} 
                L${166.43 * scaleFactor},${3.38 * scaleFactor} 
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                190.29 * scaleFactor
              },${18.92 * scaleFactor} 
                L${226.93 * scaleFactor},${85.42 * scaleFactor} 
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                226.93 * scaleFactor
              },${106.04 * scaleFactor}
                L${190.29 * scaleFactor},${172.54 * scaleFactor}       
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                166.43 * scaleFactor
              },${188.08 * scaleFactor}
                L${77.55 * scaleFactor},${188.08 * scaleFactor}
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                53.69 * scaleFactor
              },${172.54 * scaleFactor}
                L${17.05 * scaleFactor},${106.04 * scaleFactor}
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                17.05 * scaleFactor
              },${85.42 * scaleFactor}
                L${53.69 * scaleFactor},${18.92 * scaleFactor}
                A${24.42 * scaleFactor},${24.42 * scaleFactor} 0 0,1 ${
                77.55 * scaleFactor
              },${3.38 * scaleFactor}`}
            />
          </clipPath>
        </defs>
        <rect
          width={scaledWidth}
          height={scaledHeight}
          fill="#d1ffc6"
          clipPath="url(#hexagonClipBox)"
        />
      </svg>
    </Box>
  );
};

export default HexagonClippedBox;
