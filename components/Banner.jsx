"use client";

import useMotion from "@/context/MotionContext";
import { AnimatePresence } from "framer-motion";
import footerlogo from "../public/assets/footer_assets/paperrabbitlogo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: "-100%",
        }}
        exit={{
          y: 0,
        }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className="banner z-[99999999999999] w-screen h-screen bg-theme text-white flex justify-center items-center fixed top-0 left-0"
      >
        <a href="/">
          <Image src={footerlogo} alt="" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
