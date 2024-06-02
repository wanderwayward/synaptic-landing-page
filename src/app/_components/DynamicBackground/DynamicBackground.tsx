import { Box, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { css, SerializedStyles } from "@emotion/react";

interface DynamicBackgroundProps {
  bgGradient: string;
  clipPath: string;
}

const DynamicBackground = ({
  bgGradient,
  clipPath,
}: DynamicBackgroundProps) => {
  const [prevBgGradient, setPrevBgGradient] = useState(bgGradient);
  const [prevClipPath, setPrevClipPath] = useState(clipPath);
  const [animation, setAnimation] = useState<SerializedStyles | null>(null);

  useEffect(() => {
    if (prevBgGradient !== bgGradient || prevClipPath !== clipPath) {
      const keyframeAnimation = keyframes`
        from {
          background: ${prevBgGradient};
          clip-path: ${prevClipPath};
        }
        to {
          background: ${bgGradient};
          clip-path: ${clipPath};
        }
      `;

      setAnimation(css`
        animation: ${keyframeAnimation} 1s ease-in-out forwards;
      `);

      // Update the previous state values after the animation is set
      setPrevBgGradient(bgGradient);
      setPrevClipPath(clipPath);
    }
  }, [bgGradient, clipPath, prevBgGradient, prevClipPath]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      bgGradient={bgGradient} // Apply current gradient
      clipPath={clipPath} // Apply current clip path
      zIndex={0}
      css={animation}
      transition="background 1s ease-in-out, clip-path 1s ease-in-out"
    />
  );
};

export default DynamicBackground;
