"use client";

import type React from "react";
import Image from "next/image";
import EagleAIAgent from "../../public/Architecture.jpg";
import { useState } from "react";

interface ArchitectureSectionProps {
  title: string;
  content: string;
}

function ArchitectureSection({ title, content }: ArchitectureSectionProps) {
  return (
    <>
      <h3 className="md:text-2xl text-lg font-semibold text-green-800">
        {title}
      </h3>
      <p className="mt-3 text-justify">{content}</p>
    </>
  );
}

interface SystemInfo {
  name: string;
  description: string;
}
const systems: Record<string, SystemInfo> = {
  Found: {
    name: "Foundational Layer: Agentic Framework for Supply Chain",
    description:
      "A foundational platform providing enterprises with an agentic framework for developing AI-driven supply chain management solutions. This framework empowers businesses to tailor AI agent functionalities to their specific supply chain needs while leveraging our pre-built, ready-to-use architecture.",
  },
  Dove: {
    name: "Application Layer: Dove AI Agents Integrating Legacy Systems",
    description:
      "The application layer is inspired by the messenger bird, the dove, symbolizing seamless communication. The AI agents we have developed for the global supply chain are designed to interact with individual legacy systems while also facilitating communication between them. This enables efficient data interchange across disparate legacy systems, ensuring interoperability and streamlined operations.",
  },
  Eagle: {
    name: "Coordination Layer: Eagle Transformer for Autonomous Decision Making",
    description:
      "The coordination layer is modeled after an eagle, embodying a bird’s-eye view of the entire supply chain. It serves as a central orchestrator, synchronizing tasks across multiple legacy systems while autonomously making decisions and executing actions to optimize operations.",
  },
};

export default function ArchitectureInfo() {
  const [selectedSystem, setSelectedSystem] = useState("Eagle");

  return (
    <section className="flex justify-center items-center">
      <div className="mx-auto px-5 max-w-7xl w-full">
        <div className="text-center">
          <h2 className="inline-block bg-green-700 text-white px-4 py-2 font-bold text-lg mb-4 font-mono">
            AGENTIC ARCHITECTURE
          </h2>
        </div>
        <h3 className="md:text-4xl text-3xl font-bold text-center">
          Our Patented AI Agent Architecture
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:mt-5 mt-3">
          <div className="relative col-span-2 flex justify-center">
            {/* This container maintains the image's aspect ratio */}
            <div className="relative">
              <Image src={EagleAIAgent} alt="Eagle AI Agent" className="" />

              <button
                onClick={() => setSelectedSystem("Found")}
                className="absolute top-[50%] left-[57%] transform -translate-x-1/2 -translate-y-1/2 
                 w-[5%] aspect-square rounded-full border border-white bg-green-900/25
                 hover:bg-blue/20 hover:scale-110 hover:border-2
                 transition-all duration-300 ease-in-out
                 focus:bg-green-400/50 focus:border-green-400
                 active:bg-green-400/50 active:border-green-400"
              ></button>
              <button
                onClick={() => setSelectedSystem("Dove")}
                className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                 w-[5%] aspect-square rounded-full border border-white bg-green-900/25
                 hover:bg-blue/20 hover:scale-110 hover:border-2
                 transition-all duration-300 ease-in-out
                 focus:bg-green-400/50 focus:border-green-400
                 active:bg-green-400/50 active:border-green-400"
              ></button>
              <button
                onClick={() => setSelectedSystem("Eagle")}
                className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                 w-[5%] aspect-square rounded-full border border-white bg-green-900/25
                 hover:bg-blue/20 hover:scale-110 hover:border-2
                 transition-all duration-300 ease-in-out
                 focus:bg-green-400/50 focus:border-green-400
                 active:bg-green-400/50 active:border-green-400"
              ></button>
            </div>
          </div>
          <div className="">
            <ArchitectureSection
              title={systems[selectedSystem]?.name}
              content={systems[selectedSystem]?.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
