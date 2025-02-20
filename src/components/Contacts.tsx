"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

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
        preserveAspectRatio="none" // Added this attribute
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

export default function Contacts() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pb-16 md:pb-32">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="relative z-10 container text-center flex flex-col gap-6">
        <div className="">
          <div className="mx-auto px-5 max-w-7xl w-full flex flex-col items-center">
            <h2 className="inline-block bg-green-700 text-white px-4 py-2 font-bold text-lg mb-4 font-mono">
              CONTACT US
            </h2>
            <h3 className="md:text-4xl text-3xl font-bold text-center">
              Take The Next Step
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center w-full md:mt-5 mt-3">
            <Link
              className="group md:px-5 md:py-3 md:text-base text-sm px-4 py-2 bg-black text-white font-bold flex flex-row gap-2 items-center transition-transform hover:scale-105 min-w-[200px]"
              href="/"
            >
              <span>Contact Sales</span>
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="group md:px-5 md:py-3 md:text-base text-sm px-4 py-2 bg-black text-white font-bold flex flex-row gap-2 items-center transition-transform hover:scale-105 min-w-[200px]"
              href="/"
            >
              <span>Investor Relations</span>
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="group md:px-5 md:py-3 md:text-base text-sm px-4 py-2 bg-black text-white font-bold flex flex-row gap-2 items-center transition-transform hover:scale-105 min-w-[200px]"
              href="/"
            >
              <span>Request Information</span>
              <MoveRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
