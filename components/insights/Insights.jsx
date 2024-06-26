"use client";
import React, { useRef, useEffect, useState } from "react";
import insight1 from "../../public/assets/insights/insights1.jpg";
import insight2 from "../../public/assets/insights/insights2.jpg";
import insight3 from "../../public/assets/insights/insights3.jpg";
import insight4 from "../../public/assets/insights/insights4.jpg";
import InsightsCards from "./InsightsCards";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Insights() {
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

  const insights = [
    insight1,
    insight2,
    insight3,
    insight4,
    insight2,
    insight3,
    insight4,
  ];

  return (
    <div
      className="w-full relative pb-14 flex-col justify-start items-center gap-[0.18px] inline-flex dark:bg-black"
      ref={sectionRef}
    >
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-teal-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Insight
          </div>
        </div>
      </div>

      <div className="w-full mac:w-[70%] lg:w-[56%] relative text-center text-black dark:text-white text-2xl font-bold font-['Inter'] leading-9 mt-10 p-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. <br />
        <br />
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
                        let ul = $refs.cards;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        className="w-[100%] h-[540px] lg:w-[70%] mac:w-[85%] relative inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="cards"
          className="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"
        >
          {insights.map((insight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              className="lg:w-[340px] w-[306px] h-full relative flex items-end justify-end p-4"
            >
              <InsightsCards insightimg={insight} />
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="w-[122px] h-11 relative pt-10">
        <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/insight">Explore All</Link>
        </button>
      </div>
    </div>
  );
}

export default Insights;
