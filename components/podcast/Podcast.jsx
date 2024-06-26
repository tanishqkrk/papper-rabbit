"use client";
import React, { useRef, useEffect, useState } from "react";
import PodcastCards from "./PodcastCards";
import podcastimg1 from "../../public/assets/podcastimg/img.png";
import podcastimg2 from "../../public/assets/podcastimg/img2.png";
import podcastimg3 from "../../public/assets/podcastimg/img3.png";
import podcastimg4 from "../../public/assets/podcastimg/img4.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Podcast() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const podcasts = [
    podcastimg1,
    podcastimg2,
    podcastimg3,
    podcastimg4,
    podcastimg3,
    podcastimg1,
    podcastimg2,
    podcastimg3,
    podcastimg4,
  ];

  return (
    <div
      className="w-full relative flex flex-col items-center justify-start pt-20 dark:bg-black"
      ref={sectionRef}
    >
      <div className="w-full  relative flex flex-col justify-center items-center pt-10 pb-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-blue-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Disquistion
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Podcast
          </div>
        </div>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
                        let ul = $refs.cards;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        className="w-[100%] h-[640px] lg:w-[70%] mac:w-[85%] relative  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="cards"
          className="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"
        >
          {podcasts.map((podcast, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: 0 }}
              transition={{ delay: 0.85 + index * 0.2, duration: 0.5 }}
              className="lg:w-[340px] w-[306px] h-full relative flex items-end justify-end"
            >
              <PodcastCards podcastimg={podcast} />
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="w-[122px] h-11 relative pt-10 pb-20">
        <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/podcast">Explore All</Link>
        </button>
      </div>
    </div>
  );
}

export default Podcast;
