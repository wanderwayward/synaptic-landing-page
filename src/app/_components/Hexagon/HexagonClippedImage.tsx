import React from "react";
import { Box } from "@chakra-ui/react";

interface HexagonClippedImageProps {
  imageUrl: string;
}

const HexagonClippedImage: React.FC<HexagonClippedImageProps> = ({
  imageUrl,
}) => {
  return (
    <Box
      position="relative"
      width="53vh" // Updated container size to 53vh
      height="53vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <svg viewBox="0 0 233.0 190.9" width="100%" height="100%">
        <defs>
          <clipPath id="hexagonClip">
            <path
              d="M74.6,3.18 
                 L160.4,3.18 
                 A23.52,23.52 0 0,1 183.92,18.1 
                 L220.8,84.99 
                 A23.52,23.52 0 0,1 220.8,105.8
                 L183.92,172.69       
                 A23.52,23.52 0 0,1 160.4,187.61
                 L74.6,187.61
                 A23.52,23.52 0 0,1 51.08,172.69
                 L14.2,105.8
                 A23.52,23.52 0 0,1 14.2,84.99
                 L51.08,18.1
                 A23.52,23.52 0 0,1 74.6,3.18"
            />
          </clipPath>
        </defs>
        <image
          width="233.0" // Adjusted width proportional to the new viewBox size
          height="190.9" // Adjusted height proportional to the new viewBox size
          xlinkHref={imageUrl}
          clipPath="url(#hexagonClip)"
          preserveAspectRatio="xMidYMid slice" // Keeps the image centered and fitting well
        />
      </svg>
    </Box>
  );
};

export default HexagonClippedImage;
