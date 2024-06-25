"use client";
import React, { useEffect, useRef } from "react";
import BlogCards from "./BlogCards";
import { motion } from "framer-motion";

import blog1 from "../../public/assets/blogsimg/blog1.png";
import blog2 from "../../public/assets/blogsimg/blog2.png";
import blog3 from "../../public/assets/blogsimg/blog3.png";
import blog4 from "../../public/assets/blogsimg/blog4.png";

import Link from "next/link";

function Blog() {
  const cardsinfo = [
    {
      id: 1,
      author: "Disti",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog1,
    },
    {
      id: 2,
      author: "Disti3332",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog2,
    },
    {
      id: 3,
      author: "Disti3333",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog3,
    },
    {
      id: 4,
      author: "Disti33344",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog4,
    },
    {
      id: 5,
      author: "Distigfbdfg5",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog1,
    },
    {
      id: 6,
      author: "Distifgbgt255",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog3,
    },
    {
      id: 7,
      author: "Disti35fdd555",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog2,
    },
    {
      id: 8,
      author: "Disti5554",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
      img: blog1,
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0; // Reset scroll position
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center justify-start dark:bg-black">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Expressions
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            blog
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full h-fit relative flex items-start gap-5 overflow-x-scroll no-scrollbar mt-20 mask-gradient "
      >
        {cardsinfo.map((items, index) => (
          <motion.div
            key={items.id + "-" + index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <BlogCards
              blogsimg={items.img}
              name={items.author}
              title={items.title}
            />
          </motion.div>
        ))}
        {cardsinfo.map((items, index) => (
          <motion.div
            key={"duplicate-" + items.id + "-" + index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (index + cardsinfo.length) * 0.2,
            }}
          >
            <BlogCards
              blogsimg={items.img}
              name={items.author}
              title={items.title}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-[122px] h-11 relative pt-10">
        <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/blogs">Explore All</Link>
        </button>
      </div>
    </div>
  );
}

export default Blog;
