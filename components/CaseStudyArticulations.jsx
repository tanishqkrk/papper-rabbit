"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./styles.css";
import centralImage from "../public/assets/bannerimgs/kelly-sikkema-v9FQR4tbIq8-unsplash 3.png";
import svgIcon from "../public/assets/bannerimgs/global.png"; // Add your SVG imports
import edit2 from "../public/assets/bannerimgs/edit-2.png"; // Add your SVG imports
import clock from "../public/assets/bannerimgs/clock.png"; // Add your SVG imports

export default function CaseStudySlider() {
  const circles = [
    {
      size: 29,
      animation: "orbit1-clockwise 40s linear infinite",
      color: "rgba(255, 0, 0, 0.8)",
      type: "text",
      text: "Service 1",
    },
    {
      size: 169,
      animation: "orbit2-clockwise 40s linear infinite",
      color: "rgba(255, 255, 0, 0.8)",
      type: "text",
      text: "Service 2",
    },
    {
      size: 79,
      animation: "orbit3-clockwise 40s linear infinite",
      color: "rgba(255, 192, 203, 0.8)",
      type: "svg",
      svg: clock,
    },
    {
      size: 169,
      animation: "orbit4-clockwise 40s linear infinite",
      color: "rgba(255, 0, 255, 0.8)",
      type: "text",
      text: "Hospitality",
    },
    {
      size: 70,
      animation: "orbit5-clockwise 40s linear infinite",
      color: "rgba(255, 255, 0, 0.8)",
      type: "svg",
      svg: svgIcon,
    },
    {
      size: 90,
      animation: "orbit6-clockwise 40s linear infinite",
      color: "rgba(255, 0, 0, 0.8)",
      type: "svg",
      svg: edit2,
    },
    {
      size: 169,
      animation: "orbit7-clockwise 40s linear infinite",
      color: "rgba(255, 192, 203, 0.8)",
      type: "text",
      text: "Java Rain",
    },
    {
      size: 99,
      animation: "orbit8-clockwise 40s linear infinite",
      color: "rgba(255, 192, 203, 0.8)",
      type: "text",
      text: "Java Rain",
    },
  ];

  return (
    <div className="pt-10 ">
      <div className="image-container">
        <div className="w-full h-full relative flex flex-col justify-between items-center gap-8 pt-10 lg:pt-20">
          <div className="w-full h-[2rem] relative content-center">
            <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
              Articulations
            </div>
            <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
              Case Study
            </div>
          </div>
          <div className="rotating-img-container relative flex items-center mt-20 justify-center">
            <Image
              src={centralImage}
              alt="Central Image"
              width={200}
              height={200}
              className="central-img"
            />
            {circles.map((circle, index) => {
              const shadowColor =
                index % 2 === 0
                  ? "rgba(255, 255, 0, 0.3)"
                  : "rgba(0, 0, 255, 0.3)";
              return (
                <div
                  key={index}
                  className="circle"
                  style={{
                    width: circle.size,
                    height: circle.size,
                    animation: circle.animation,
                    boxShadow: `0 8px 10px 0 ${shadowColor}, 0 10px 20px 0 ${shadowColor}`,
                    zIndex: index,
                    backgroundColor: "white",
                  }}
                >
                  {circle.type === "text" ? (
                    <span
                      className="circle-text font-[katibeh]"
                      style={{ fontSize: "20px", fontWeight: 400 }}
                    >
                      {circle.text}
                    </span>
                  ) : (
                    <Image
                      src={circle.svg}
                      alt={`Icon for ${circle.text}`}
                      width={circle.size * 0.8}
                      height={circle.size * 0.8}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
