import { useMediaQuery } from "@chakra-ui/react";
import { MEDIA_QUERIES } from "../_constants/mediaQueries";

const useScaleFactor = () => {
  const [isSM] = useMediaQuery(MEDIA_QUERIES.sm);
  const [isMD] = useMediaQuery(MEDIA_QUERIES.md);
  const [isLG] = useMediaQuery(MEDIA_QUERIES.lg);
  const [isXL] = useMediaQuery(MEDIA_QUERIES.xl);
  const [isXXL] = useMediaQuery(MEDIA_QUERIES.xxl);

  let scaleFactor = 1; // Default scale factor for extra-large screens (xl)
  if (isSM) {
    console.log("SM");
    scaleFactor = 0.6; // Scale down for very small screens
  } else if (isMD) {
    console.log("MD");
    scaleFactor = 0.75; // Slightly larger scale for tablets
  } else if (isLG) {
    console.log("LG");
    scaleFactor = 0.95; // Moderate scale for medium screens (standard desktops)
  } else if (isXL) {
    console.log("XL");
    scaleFactor = 0.95; // Standard scale for large desktops
  } else if (isXXL) {
    console.log("XXL");
    scaleFactor = 1; // Default scale factor for extra-large screens (xl)
  }

  return scaleFactor;
};

export default useScaleFactor;
