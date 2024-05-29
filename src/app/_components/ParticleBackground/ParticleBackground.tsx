// app/_components/ParticleBackground.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Engine,
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Configuration object for the particles
  const options: ISourceOptions = useMemo(
    () => ({
      // Background settings
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 60, // Limits the frame rate to 60 FPS
      interactivity: {
        events: {
          // Enable particle interaction on hover
          onHover: {
            enable: true,
            mode: "grab", // Subtle grab effect
            distance: 140, // Distance for the grab effect
            links: {
              opacity: 1, // Opacity of the link during the grab effect
            },
          },
          // Correct resize configuration
          resize: {
            enable: true,
            delay: 0.5,
          },
        },
        modes: {
          // Grab mode settings
          grab: {
            distance: 140, // Distance for the grab effect
            links: {
              opacity: 1, // Opacity of the link during the grab effect
            },
          },
        },
      },
      particles: {
        color: {
          value: "#000000", // Light blue particles
        },
        links: {
          color: "#000000", // Light blue links
          distance: 75, // Distance between linked particles
          enable: true, // Enable linking
          opacity: 0.9, // Opacity of the links
          width: 1, // Width of the links
        },
        collisions: {
          enable: true, // Enable particle collisions
        },
        move: {
          direction: MoveDirection.none, // No specific movement direction
          enable: true, // Enable particle movement
          outModes: {
            default: OutMode.bounce, // Bounce particles at the edge
          },
          random: false, // Disable random movement
          speed: 0.03, // Very slow movement speed
          straight: false, // No straight movement
        },
        number: {
          density: {
            enable: true, // Enable density-based number of particles
            area: 100, // Area for density calculation
          },
          value: 300, // Total number of particles
        },
        opacity: {
          value: 0.9, // Opacity of the particles
        },
        shape: {
          type: "circle", // Shape of the particles
        },
        size: {
          value: { min: 3, max: 5 }, // Size range of the particles
        },
      },
      detectRetina: true, // Enable retina display support
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;
