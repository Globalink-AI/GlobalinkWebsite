"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/a.svg";
import Link from "next/link";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (current <= 0) {
      setHidden(false);
    } else if (previous !== undefined && current > previous && current > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[99]"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div className="md:px-15 px-5 py-5 flex items-center bg-white/70 backdrop-blur-md">
        <Link href="/">
          <div className="flex flex-row items-end gap-2">
            <Image
              src={Logo || "/placeholder.svg"}
              width={50}
              height={50}
              className="object-cover"
              alt="Logo of Globalink"
            />
            <span className="font-bold md:text-2xl text-lg">Globalink AI</span>
          </div>
        </Link>
        <nav>
          <ul>
            <li>{/* Navigation items can be added here */}</li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
