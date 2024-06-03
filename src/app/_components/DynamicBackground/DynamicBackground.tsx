import { Box } from "@chakra-ui/react";
import { useEffect, useState, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";

interface DynamicBackgroundProps {
  bgGradient: string;
  children: ReactNode;
  animate: boolean;
}

const DynamicBackground = ({
  bgGradient,
  children,
  animate,
}: DynamicBackgroundProps) => {
  const [animationStyle, setAnimationStyle] = useState<SerializedStyles | null>(
    null
  );

  useEffect(() => {
    if (animate) {
      const keyframeAnimation = css`
        background: ${bgGradient};
        background-size: 100% 100%;
        animation: moveBackground 10s ease-in-out forwards;

        @keyframes moveBackground {
          0% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 30% 70%;
          }
        }
      `;

      setAnimationStyle(keyframeAnimation);
    } else {
      setAnimationStyle(css`
        background: ${bgGradient};
        background-size: 100% 100%;
        background-position: 50% 50%;
      `);
    }
  }, [bgGradient, animate]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100vh"
      css={animationStyle}
      zIndex={0}
    >
      {children}
    </Box>
  );
};

export default DynamicBackground;
