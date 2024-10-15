"use client";
import { allwatch, rolex } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
  };
  return (
    <div className="hero-section">
      <div className="hero-contianer">
        <div className="object-cover">
          <Image src={rolex} height="100" width="1400" alt="rolex" />
        </div>
        <div className="hero-watchs">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image src={allwatch} height="100" width="850" alt="watchs" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
