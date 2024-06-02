import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
