import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Background = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  // Multiply by -0.3 so the background moves upward as you scroll down
  const y = useTransform(scrollY, (value) => -value * 0.3);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1] w-full h-full"
        style={{ y }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Top section */}
          <circle cx="15%" cy="15%" r="5%" fill="#88B04B" opacity="0.25" />
          <rect
            x="70%"
            y="10%"
            width="5%"
            height="10%"
            fill="#88B04B"
            opacity="0.25"
            transform="rotate(-20 500 100)"
          />
          <circle cx="80%" cy="25%" r="200" fill="#88B04B" opacity="0.25" />

          {/* Middle section */}
          <rect
            x="10%"
            y="45%"
            width="20%"
            height="20%"
            fill="#88B04B"
            opacity="0.25"
            transform="rotate(15 200 400)"
          />
          <circle cx="25%" cy="50%" r="220" fill="#88B04B" opacity="0.25" />
          <rect
            x="75%"
            y="40%"
            width="10%"
            height="5%"
            fill="#88B04B"
            opacity="0.25"
            transform="rotate(-15 800 400)"
          />

          {/* Bottom section */}
          <circle cx="10%" cy="75%" r="10" fill="#88B04B" opacity="0.25" />
          <rect
            x="45%"
            y="80%"
            width="300"
            height="200"
            fill="#88B04B"
            opacity="0.25"
            transform="rotate(10 600 800)"
          />
          <circle cx="85%" cy="85%" r="170" fill="#88B04B" opacity="0.25" />
        </svg>
      </motion.div>

      {/* Your content goes here */}
      {children}
    </div>
  );
};

export default Background;
