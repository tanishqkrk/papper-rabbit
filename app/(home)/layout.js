"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { Providers } from "../../Providers";
import { delay, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <main>
      <Banner /> {/* Add the Banner component */}
      <Header />
      <motion.div
        initial={{
          opacity: 0,
          y: 500, // Start 50px below its final position
        }}
        animate={{
          opacity: 1,
          y: 0, // Slide to its final position
        }}
        transition={{
          duration: 3, // Adjust the duration to make it smoother
          ease: "easeOut", // You can change the easing function as needed
          delay: .5
        }}
      >
        {children}
      </motion.div>
    </main>
  );
}
