"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import useScaleFactor from "@/app/_hooks/useScaleFactor";

interface HexagonClippedImageProps {
  imageUrl: string;
}

const HexagonClippedImage: React.FC<HexagonClippedImageProps> = ({
  imageUrl,
}) => {
  const scaleFactor = useScaleFactor();

  const originalWidth = 233.0;
  const originalHeight = 190.9;
  const containerSize = 53; // in vh

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
          <clipPath id="hexagonClip">
            <path
              d={`
                M${74.6 * scaleFactor},${3.18 * scaleFactor} 
                L${160.4 * scaleFactor},${3.18 * scaleFactor} 
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                183.92 * scaleFactor
              },${18.1 * scaleFactor} 
                L${220.8 * scaleFactor},${84.99 * scaleFactor} 
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                220.8 * scaleFactor
              },${105.8 * scaleFactor}
                L${183.92 * scaleFactor},${172.69 * scaleFactor}       
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                160.4 * scaleFactor
              },${187.61 * scaleFactor}
                L${74.6 * scaleFactor},${187.61 * scaleFactor}
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                51.08 * scaleFactor
              },${172.69 * scaleFactor}
                L${14.2 * scaleFactor},${105.8 * scaleFactor}
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                14.2 * scaleFactor
              },${84.99 * scaleFactor}
                L${51.08 * scaleFactor},${18.1 * scaleFactor}
                A${23.52 * scaleFactor},${23.52 * scaleFactor} 0 0,1 ${
                74.6 * scaleFactor
              },${3.18 * scaleFactor}`}
            />
          </clipPath>
        </defs>
        <image
          width={scaledWidth}
          height={scaledHeight}
          xlinkHref={imageUrl}
          clipPath="url(#hexagonClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </Box>
  );
};

export default HexagonClippedImage;
