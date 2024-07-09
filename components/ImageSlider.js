"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Spinner from 'react-spinkit';

// Importing images
import day1 from '../public/assets/bannerimgs/1 background.svg';
import day2 from '../public/assets/bannerimgs/2 background.svg';
import day3 from '../public/assets/bannerimgs/3background.svg';
import day4 from '../public/assets/bannerimgs/4background.svg';
import day5 from '../public/assets/bannerimgs/5background.svg';
import day6 from '../public/assets/bannerimgs/6background.svg';
import day7 from '../public/assets/bannerimgs/7background.svg';
import day8 from '../public/assets/bannerimgs/8background.svg';
import day9 from '../public/assets/bannerimgs/9background.svg';
import day10 from '../public/assets/bannerimgs/10background.svg';
import day11 from '../public/assets/bannerimgs/11background.svg';

import dark1 from '../public/assets/bannerimgs/1-background-dark.svg';
import dark2 from '../public/assets/bannerimgs/2 background-dark.png';
import dark3 from '../public/assets/bannerimgs/3 background-dark.png';
import dark4 from '../public/assets/bannerimgs/4 background-dark.png';
import dark5 from '../public/assets/bannerimgs/5 background-dark.png';
import dark6 from '../public/assets/bannerimgs/6 background-dark.png';
import dark7 from '../public/assets/bannerimgs/7 background-dark.png';
import dark8 from '../public/assets/bannerimgs/8 background-dark.png';
import dark9 from '../public/assets/bannerimgs/9 background-dark.png';

import arrowleft from "../public/assets/bannerimgs/leftone.png";
import arrowright from "../public/assets/bannerimgs/rightone.png";

export default function ImageSlider() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingStates, setLoadingStates] = useState(Array(10).fill(true));
  const title = ['Brave', 'Creative', 'Loyal', 'Lorem1', 'Brave222', 'Creative222', 'Loyal2222', 'Lorem22', 'Patient22'];

  useEffect(() => setMounted(true), []);

  const images_day = [day2, day3, day4, day5, day6, day7, day8, day9, day10, day11];
  const images_dark = [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9];

  const images = resolvedTheme === 'dark' ? images_dark : images_day;

  const handleImageLoad = (index) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  if (!mounted) {
    return null; // Avoid rendering during SSR
  }

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 4000 }} // Autoplay with a 4-second delay
      className="mySwiper"
      onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {loadingStates[index] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner name="ball-spin-fade-loader" color="blue" />
              </div>
            )}
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              onLoadingComplete={() => handleImageLoad(index)}
              className={`transition-opacity duration-500 ${loadingStates[index] ? 'opacity-0' : 'opacity-100'}`}
            />
            {index % 2 === 0 ? (
              <div className="absolute z-20 flex flex-col items-end justify-start w-[450px] sm:w-[90%] lg:w-[646px] mac:w-[546px] sm:bottom-[2rem] sm:left-[2rem]  md:bottom-[2rem] md:right-[2rem]  lg:right-[15rem] lg:bottom-[10rem] mac:right-52 mac:bottom-[6rem]">
                <div className="absolute w-full h-full bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl" />
                <div className="relative mt-[15px] mr-[22px] text-[40px] sm:text-[40px] lg:text-[64px] font-['Katibeh'] text-black dark:text-white">What Makes You</div>
                <div className="relative mt-[6px] mr-[22px] text-5xl sm:text-[45px] lg:text-8xl mac:text-7xl font-['Revelstoke'] text-black dark:text-white">{title[currentIndex % title.length]}!</div>
                <div className="relative mt-[10px] ml-[20px] mr-[22px] text-[14px] sm:text-[14px] lg:text-[15px] font-['Inter'] text-black dark:text-white">We are brand enthusiasts. We are storytellers. We are a full-service creative agency combining strategic thinking and sharp design to build great brands in this cutthroat business competition.</div>
                <div className="relative mt-[10px] mr-[22px] text-[32px] sm:text-[30px] lg:text-5xl font-['Heaven'] text-black dark:text-white"># What makes you creative</div>
                <div className="relative mr-[10px] mt-[14px] h-[64px] w-[120px] lg:w-[122px] lg:h-11">
                  <button className="w-[120px] lg:w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black text-xs lg:text-sm font-['Inter']">Let&apos;s Make Art</button>
                </div>
              </div>
            ) : (
              <div className="absolute z-20 flex flex-col items-start justify-start w-[450px] sm:w-[90%] lg:w-[646px] mac:w-[546px]  sm:bottom-[2rem] sm:left-[2rem] md:bottom-[2rem] md:left-[2rem]  lg:left-[15rem] lg:bottom-[10rem] mac:left-52 mac:bottom-[6rem]">
                <div className="absolute w-full h-full bg-white dark:bg-black bg-opacity-5 dark:bg-opacity-5 rounded-[20px] backdrop-blur-2xl" />
                <div className="relative mt-[15px] ml-[22px] text-[40px] sm:text-[40px] lg:text-[64px] font-['Katibeh'] text-black dark:text-white">What Makes You</div>
                <div className="relative mt-[6px] ml-[22px] text-5xl sm:text-[45px] lg:text-8xl mac:text-7xl font-['Revelstoke'] text-black dark:text-white">{title[currentIndex % title.length]}!</div>
                <div className="relative mt-[10px] ml-[22px] mr-[20px] text-[14px] sm:text-[14px] lg:text-[15px] font-['Inter'] text-black dark:text-white">We are brand enthusiasts. We are storytellers. We are a full-service creative agency combining strategic thinking and sharp design to build great brands in this cutthroat business competition.</div>
                <div className="relative mt-[10px] ml-[22px] text-[32px] sm:text-[30px] lg:text-5xl font-['Heaven'] text-black dark:text-white"># What makes you creative</div>
                <div className="relative pl-[18px]  mt-[14px] h-[64px] w-[120px] lg:w-[122px] lg:h-11">
                  <button className="w-[120px]  lg:w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black text-xs lg:text-sm font-['Inter']">Let&apos;s Make Art</button>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <Image src={arrowleft} alt="Previous" width={150} height={150} />
      </div>
      <div className="swiper-button-next">
        <Image src={arrowright} alt="Next" width={50} height={50} />
      </div>
    </Swiper>
  );
}
