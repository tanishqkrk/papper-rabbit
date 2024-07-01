"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import Spinner from 'react-spinkit';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Simulate a delay for demonstration purposes
    setTimeout(handleLoad, 2000);

    return () => {
      clearTimeout(handleLoad);
    };
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner name="ball-spin-fade-loader" color="blue" />
        </div>
      ) : (
        <>
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
              delay: 0.5,
            }}
            className="overflow-x-hidden w-full"
          >
            {children}
          </motion.div>
        </>
      )}
    </main>
  );
}
