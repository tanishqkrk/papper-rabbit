"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { Providers } from "../../Providers";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <main>
      <Banner />
      <Header />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2, // Adjust the duration to make it smoother
          ease: "easeOut", // You can change the easing function as needed
          delay: 0.5
        }}
        className="overflow-x-hidden w-full"
      >
        {children}
      </motion.div>
    </main>
  );
}
