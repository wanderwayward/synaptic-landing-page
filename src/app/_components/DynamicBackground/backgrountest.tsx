// DynamicBackground.js
import { Box, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { css, SerializedStyles } from "@emotion/react";

interface DynamicBackgroundProps {
  bgGradient: string;
}

const DynamicBackground = ({ bgGradient }: DynamicBackgroundProps) => {
  const [prevBgGradient, setPrevBgGradient] = useState(bgGradient);
  const [animation, setAnimation] = useState<SerializedStyles | null>(null);

  useEffect(() => {
    if (prevBgGradient !== bgGradient) {
      const keyframeAnimation = keyframes`
        from {
          background: ${prevBgGradient};
          background-position: 50% 50%;
        }
        to {
          background: ${bgGradient};
          background-position: 20% 80%;
        }
      `;

      setAnimation(css`
        animation: ${keyframeAnimation} 2s ease-in-out forwards;
      `);

      // Update the previous state values after the animation is set
      setPrevBgGradient(bgGradient);
    }
  }, [bgGradient, prevBgGradient]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      bgGradient={bgGradient} // Apply current gradient
      backgroundSize="200% 200%"
      zIndex={0}
      css={animation}
    />
  );
};

export default DynamicBackground;
