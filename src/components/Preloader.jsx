import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // 1.6s for the water-fill animation + 0.4s pause before shutter starts
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion Variants for the shutter screen exit
  const screenVariants = {
    initial: {
      y: "0%",
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1], // Cinematic custom bezier curve
      },
    },
  };

  // Variants for the logo container exit (slightly scale down and fade out)
  const logoContainerVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Variants for the water fill clip path animation
  const fillVariants = {
    initial: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    },
    animate: {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      transition: {
        duration: 1.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 bg-brand-red z-[100000] flex items-center justify-center select-none overflow-hidden"
    >
      <motion.div
        variants={logoContainerVariants}
        className="relative flex items-center justify-center px-4"
      >
        {/* Layer 1: Dark Transparent Background Text */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black/15 uppercase font-sans">
          Siddartha.
        </h1>

        {/* Layer 2: White Foreground Text animating from bottom to top */}
        <motion.h1
          variants={fillVariants}
          initial="initial"
          animate="animate"
          className="absolute text-7xl md:text-9xl font-black tracking-tighter text-white uppercase font-sans select-none"
        >
          Siddartha.
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
