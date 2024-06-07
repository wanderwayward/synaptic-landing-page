import { Box } from "@chakra-ui/react";

export default function HexagonClippedBox() {
  return (
    <Box
      position="relative"
      width="55vh" // Updated container size to 55vh
      height="55vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <svg viewBox="0 0 242.4 198.77" width="100%" height="100%">
        <defs>
          <clipPath id="hexagonClipBox">
            <path
              d="M77.55,3.38 
                 L166.43,3.38 
                 A24.42,24.42 0 0,1 190.29,18.92 
                 L226.93,85.42 
                 A24.42,24.42 0 0,1 226.93,106.04
                 L190.29,172.54       
                 A24.42,24.42 0 0,1 166.43,188.08
                 L77.55,188.08
                 A24.42,24.42 0 0,1 53.69,172.54
                 L17.05,106.04
                 A24.42,24.42 0 0,1 17.05,85.42
                 L53.69,18.92
                 A24.42,24.42 0 0,1 77.55,3.38"
            />
          </clipPath>
        </defs>
        <rect
          width="242.4" // Adjusted width proportional to the new viewBox size
          height="198.77" // Adjusted height proportional to the new viewBox size
          fill="#fff" // White background color
          clipPath="url(#hexagonClipBox)" // Apply the hexagon clip-path
        />
      </svg>
    </Box>
  );
}
