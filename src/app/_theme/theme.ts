import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "600px", // Mobile
  md: "900px", // Tablet
  lg: "1300px", // Desktop
  xl: "1536px", // Large Desktop (optional, for larger screens)
};

const customTheme = extendTheme({
  breakpoints,
  components: {
    Button: {
      sizes: {
        xl: {
          h: "2.5em",
          fontSize: "2.2em",
          px: "1em",
        },
      },
    },
  },
});

export default customTheme;
