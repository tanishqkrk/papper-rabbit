"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Importing images
import casestudyy from "../public/assets/casestudyimg/casestudyy.png";
import img from "../public/assets/casestudyimg/img.png";
import img2 from "../public/assets/casestudyimg/img2.png";

import arrowleft from "../public/assets/bannerimgs/leftsvg.svg";
import arrowright from "../public/assets/bannerimgs/rightsvg.svg";

export default function CaseStudySlider() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => setMounted(true), []);

  const images = [casestudyy, casestudyy]; // Adjust the images as per your requirement

  if (!mounted) {
    return null; // Avoid rendering during SSR
  }

  return (
    <div className="pt-10 dark:bg-black">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <div className="w-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
                <div className="w-full h-[6rem] relative content-center">
                  <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
                    Articulations
                  </div>
                  <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
                    Case Study
                  </div>
                </div>
              </div>
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={500} // Adjust width and height to desired values
                height={600} // Adjust width and height to desired values
                objectFit="contain"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
          <Image src={arrowleft} alt="Previous" width={80} height={80} />
        </div>
        <div className="swiper-button-next">
          <Image src={arrowright} alt="Next" width={50} height={50} />
        </div>
      </Swiper>
    </div>
  );
}
