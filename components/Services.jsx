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
    <div className="w-full z-20 lg:h-[70%] relative flex flex-col items-center justify-start ">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div class="w-full h-[6rem] relative content-center">
          <div class="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div class="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            services
          </div>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="w-full h-full  relative flex items-start gap-5 overflow-x-scroll no-scrollbar my-12 lg:mt-20  snap-x snap-mandatory mask-gradient "
      >
        <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px] lg:h-[600px] ml-[13%] relative  snap-center snap-always ">
          <Image
            className=" relative top-0 rounded-[20px]"
            src={services0}
            alt=""
          />
          <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">
              name
            </div>
            <div className=" text-zinc-950   text-2xl  md:text-2xl font-bold font-['Inter'] ">
              title
            </div>
            <div className="self-stretch h-4 relative">
              <div className="left-[15px] top-0 absolute text-zinc-950 text-xs md:text-sm font-medium font-['Inter'] leading-none">
                Explore
              </div>
            </div>
          </div>
          <Image
            className="w-[42px] h-[42px] right-4 bottom-4 lg:left-[278px] lg:top-[538px] absolute backdrop-blur-[20px] rounded-full"
            src={add}
            alt=""
            onClick={popup}
          />
        </div>

        {cardsinfo.map((item) => {
          return (
            <div className="mac:min-w-[308px] min-w-[240px]  lg:min-w-[340px]   mac:h-[542px] sm:h-[420px] lg:h-[600px] relative  snap-center snap-always ">
              <Image
                className=" relative top-0 rounded-[20px]"
                src={item.image}
                alt=""
              />
              <div className=" w-full pl-2 md:pl-6 md:pr-[35px] py-10 top-0 absolute rounded-[20px] flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="text-zinc-950 text-s md:text-sm font-normal font-['Inter'] ">
                  {item.name}
                </div>
                <div className=" text-zinc-950  md:text-2xl font-bold font-['Inter']   text-2xl ">
                  {item.title}
                </div>
                <div className="self-stretch h-4 relative">
                  <div className="  text-zinc-950 text-s md:text-sm font-normal font-['Inter'] flex flex-row gap-[2%] ">
                    {" "}
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
            </div>
          );
        })}
      </div>

      <div className="w-[122px] h-11 relative">
        <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-xs md:text-sm font-normal font-['Inter'] leading-none  cursor-pointer">
          {" "}
          <Link href="/services"> View More</Link>{" "}
        </button>
      </div>

      <div
        className="h-screen overflow-y-scroll no-scrollbar  fixed top-0 z-[100] fill-transparent  flex flex-col items-center w-full p-4 backdrop-blur-lg invisible"
        ref={container}
      >
        <div className="rounded-md flex flex-col  mac:w-[74%] lg:w-[74%] w-[94%] backdrop-blur-xl bg-white z-50  lg:p-20 gap-3 mac:p-20 p-8 my-20">
          <div
            className="sticky z-52 top-20  flex items-end justify-end cursor-pointer"
            onClick={popup}
          >
            <RxCross2 className="w-8 h-8 relative -top-10 -right-16 sm:-top-16 sm:-right-14" />
          </div>

          <div className="lg:text-[32px] text-[20px] font-normal font-['Inter'] leading-loose text-left w-full lg:mt-20 mt-5">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="lg:text-[64px] mac:text-[32px] text-[28px] font-normal  font-['Katibeh'] leading-[64px] text-left w-full">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left sm:text-justify ">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente maiores totam numquam quam officiis vel
            doloremque cumque dolores eveniet similique! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Sunt porro quas sapiente
            necessitatibus aliquid quaerat. Sed eaque laudantium tempore
            distinctio!
          </div>
          <div className=" relative w-full ">
            <Image src={popupimg1} alt="" className=" min-w-[5rem] " />
          </div>
          <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left sm:text-justify">
            Lorem ipsum dolor sit amet. lorem20 Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Expedita dolorem ab ut necessitatibus
            consequatur atque repudiandae voluptas placeat saepe in. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro quas
            sapiente necessitatibus aliquid quaerat. Sed eaque laudantium
            tempore distinctio!
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full mac:p-8 lg:p-8">
            <Image src={popupimg2} alt="" className="min-w-[5rem]  " />
            <Image src={popupimg2} alt="" className="min-w-[5rem]   " />
          </div>
          <div className="text-black text-sm font-normal font-['Inter'] leading-normal text-left sm:text-justify">
            Lorem ipsum dolor sit amet.lorem20 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat exercitationem quidem tempore.
            Doloribus ex adipisci non corrupti aliquid consectetur sint. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro quas
            sapiente necessitatibus aliquid quaerat. Sed eaque laudantium
            tempore distinctio!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
