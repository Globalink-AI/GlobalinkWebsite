"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import Link from "next/link";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-green-800"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const element = document.getElementById("about");
  element?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col gap-3">
        <p className="font-mono text-lg">Introducing Globalink AI</p>
        <h1 className="font-bold md:text-7xl text-5xl">
          Powering Supply Chain with AI
        </h1>
        <p className="md:text-xl text-lg">
          Optimize logistics, reduce inefficiencies, and enhance decision-making
          with AI-driven insights.
        </p>
        <div className="flex gap-3 justify-center font-mono">
          <Link
            className="group md:px-5 md:py-3 md:text-base text-sm px-4 py-2 bg-black text-white font-bold flex flex-row gap-2 items-center transition-transform hover:scale-105"
            href="#about"
            onClick={scrollToAbout}
          >
            <span>Get Started</span>
            <MoveRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            className="group md:px-5 md:py-3 md:text-base text-sm px-4 py-2 bg-white text-black font-bold md:shadow-[inset_0_0_0_3px_rgba(0,0,0,1)] shadow-[inset_0_0_0_2px_rgba(0,0,0,1)] flex flex-row gap-2 items-center transition-transform hover:scale-105"
            href="#about"
            onClick={scrollToAbout}
          >
            <span>Learn More</span>
            <MoveRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
