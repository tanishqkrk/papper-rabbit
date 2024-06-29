"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import services0 from "../public/assets/services/services.svg";
import services1 from "../public/assets/services/services1.svg";
import services2 from "../public/assets/services/services2.svg";
import services3 from "../public/assets/services/services3.svg";
import add from "../public/assets/services/add.svg";
import forword from "../public/assets/services/forward arrow.svg";
import popupimg1 from "../public/assets/services/popup-react.svg";
import popupimg2 from "../public/assets/services/popup-square.svg";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import "./styles.css";

function Services() {
  const [visible, setVisible] = useState(false);
  const container = useRef(null);
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

  function popup() {
    if (visible) {
      setVisible(false);
      document.body.classList.remove("modal-open");
      container.current.classList.remove("visible");
      container.current.classList.add("invisible");
    } else {
      setVisible(true);
      document.body.classList.add("modal-open");
      container.current.classList.add("visible");
      container.current.classList.remove("invisible");
    }
  }

  const cardsinfo = [
    {
      id: 1,
      image: services0,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum",
    },
    {
      id: 2,
      image: services1,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 3,
      image: services2,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 4,
      image: services3,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 5,
      image: services0,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 6,
      image: services1,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 7,
      image: services2,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
    {
      id: 8,
      image: services3,
      name: "Lorum Ipsum",
      title: "Perspiciati lorum ipsum.",
    },
  ];

  return (
    <div
      className="w-full dark:bg-black z-20 lg:h-[70%] relative flex flex-col items-center justify-start"
      ref={sectionRef}
    >
      <div className="w-full h-full pb-10 relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-teal-300 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Channels
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            services
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
        className="w-[100%]  h-[620px] lg:w-[70%] mac:w-[85%] relative inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="cards"
          className="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"
        >
          {cardsinfo.map((item) => (
            <li
              key={item.id}
              className="group/items mac:min-w-[308px] min-w-[240px] lg:min-w-[340px]  relative snap-center snap-always"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="relative top-0 rounded-xl h-[598px]"
              />
              <div className="w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter']">
                  {item.name}
                </div>
                <div className="text-zinc-950 text-2xl md:text-2xl font-bold font-['Inter']">
                  {item.title}
                </div>
                <div className="self-stretch h-4 relative">
                  <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] flex flex-row gap-[2%]">
                    <Image className="" src={forword} alt="" /> Explore
                  </div>
                </div>
              </div>
              <Image
                className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full"
                src={add}
                alt=""
                onClick={popup}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[122px] pt-10 pb-10 h-11 relative">
        <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs md:text-sm font-normal font-['Inter'] leading-none cursor-pointer">
          <Link href="/services"> Explore all</Link>
        </button>
      </div>

      <div
        className="h-screen overflow-y-scroll no-scrollbar fixed top-0 z-[100] fill-transparent flex flex-col items-center w-full p-4 backdrop-blur-lg invisible"
        ref={container}
      >
        <div className="rounded-md flex flex-col mac:w-[74%] lg:w-[80%] w-[90%] bg-zinc-200 dark:bg-zinc-950 justify-center relative">
          <div className="md:h-[25rem] p-4 flex md:flex-row flex-col justify-center items-center relative">
            <div className="md:w-[50%] flex justify-center relative">
              <Image
                src={popupimg1}
                alt=""
                className="w-full h-full object-contain relative"
              />
            </div>
            <div className="w-[90%] md:w-[50%] justify-center p-4 relative">
              <div className="text-zinc-950 dark:text-white text-lg font-bold font-['Inter']">
                React 18
              </div>
              <div className="text-zinc-950 dark:text-white text-xs md:text-sm font-normal font-['Inter']">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </div>
            </div>
          </div>
          <div className="h-[25rem] p-4 flex md:flex-row flex-col justify-center items-center relative">
            <div className="md:w-[50%] justify-center relative">
              <Image
                src={popupimg2}
                alt=""
                className="w-full h-full object-fit relative"
                layout="responsive"
              />
            </div>
            <div className="w-[90%] md:w-[50%] justify-center p-4 relative">
              <div className="text-zinc-950 dark:text-white text-lg font-bold font-['Inter']">
                square 18
              </div>
              <div className="text-zinc-950 dark:text-white text-xs md:text-sm font-normal font-['Inter']">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </div>
            </div>
          </div>
          <button
            className="w-[30px] h-[30px] right-2 top-2 absolute justify-center items-center"
            onClick={popup}
          >
            <RxCross2 className="text-black dark:text-white w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
