"use client";
import React, { useState } from "react";

import Plus from "../../public/assets/Plus.jpg";
import Image from "next/image";

function Faq() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [id, setId] = useState(0);

  const handleDropdownToggle = (id) => {
    setDropdownVisible(!dropdownVisible);
    setId(id);
  };
  return (
    <div className="w-full  flex flex-col  items-center  relative bg-neutral-100">
      <div className=" flex justify-center items-center  relative text-black lg:text-[32px] font-bold ">
        General FAQ
      </div>

      <div className="flex flex-justify-center  flex-col items-center">
        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(1)}
            />{" "}
          </div>

          {dropdownVisible && id === 1 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(2)}
            />{" "}
          </div>

          {dropdownVisible && id === 2 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(3)}
            />{" "}
          </div>

          {dropdownVisible && id === 3 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(4)}
            />{" "}
          </div>

          {dropdownVisible && id === 4 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(5)}
            />{" "}
          </div>

          {dropdownVisible && id === 5 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(6)}
            />{" "}
          </div>

          {dropdownVisible && id === 6 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(7)}
            />{" "}
          </div>

          {dropdownVisible && id === 7 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(8)}
            />{" "}
          </div>

          {dropdownVisible && id === 8 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
          <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
            <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
              Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
              perspiciatis unde omnis perspiciatis und?
            </div>{" "}
            <Image
              className=" "
              src={Plus}
              alt=""
              onClick={() => handleDropdownToggle(9)}
            />{" "}
          </div>

          {dropdownVisible && id === 9 && (
            <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
              <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                {}
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und? Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis und perspiciatis unde omnis perspiciatis und?
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis und perspiciatis unde
                omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis und perspiciatis unde omnis perspiciatis
                und?
              </div>
            </div>
          )}
        </div>

        <div className="w-full] h-full  mt-[10rem] flex flex-col items-center  relative">
          <div className="flex justify-center items-center text-xl lg:text-[32px] font-bold ">
            FAQ links Related to Service & Hutch
          </div>

          <div className="grid w-full lg:grid-cols-2 grid-cols-1 gap-[5%] mt-[5%] h-full relative ">
            <div className=" w-full p-[2rem] h-full flex flex-col items-center  relative bg-gray-50 bg-opacity-70 rounded-[10px] backdrop-blur-[20px]">
              <div className="text-black p-[5%] lg:text-2xl text-xl ">
                Service
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>
            </div>

            <div className="w-full h-full flex flex-col items-center  relative bg-gray-50 bg-opacity-70 rounded-[10px] backdrop-blur-[20px]">
              <div className="text-black lg:text-2xl p-[5%] text-xl font-bold font-['Inter'] leading-normal">
                Hutch
              </div>

              <div className=" lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className=" lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>

              <div className="lg:w-[382.61px] w-[20rem] m-[1rem] justify-center items-center top-[4px] relative text-black lg:text-xs text-[0.6rem] font-bold font-['Inter'] leading-3">
                Perspiciatis unde omnisa perspiciatis unde omnisa perspiciatis
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative mt-[10%] p-2 h-[full] ">
          <div className=" flex justify-center items-center  relative text-black lg:text-[32px] font-bold font-['Inter'] leading-loose">
            Faq
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(1)}
              />{" "}
            </div>

            {dropdownVisible && id === 1 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(2)}
              />{" "}
            </div>

            {dropdownVisible && id === 2 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(3)}
              />{" "}
            </div>

            {dropdownVisible && id === 3 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(4)}
              />{" "}
            </div>

            {dropdownVisible && id === 4 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(5)}
              />{" "}
            </div>

            {dropdownVisible && id === 5 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(6)}
              />{" "}
            </div>

            {dropdownVisible && id === 6 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(7)}
              />{" "}
            </div>

            {dropdownVisible && id === 7 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(8)}
              />{" "}
            </div>

            {dropdownVisible && id === 8 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>

          <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
            <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
              <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis und
                perspiciatis unde omnis perspiciatis und?
              </div>{" "}
              <Image
                className=" "
                src={Plus}
                alt=""
                onClick={() => handleDropdownToggle(9)}
              />{" "}
            </div>

            {dropdownVisible && id === 9 && (
              <div className=" flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                <div className="bg-white w-[55rem] md:w-[45rem] sm:w-[20rem] md:p-[1%] rounded-[10px] flex justify-col  text-justify items-center overflow-hidden ">
                  {}
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und? Perspiciatis
                  unde omnis perspiciatis unde omnis perspiciatis und
                  perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                  omnis perspiciatis unde omnis perspiciatis und perspiciatis
                  unde omnis perspiciatis und? Perspiciatis unde omnis
                  perspiciatis unde omnis perspiciatis und perspiciatis unde
                  omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                  unde omnis perspiciatis und perspiciatis unde omnis
                  perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                  omnis perspiciatis und perspiciatis unde omnis perspiciatis
                  und? Perspiciatis unde omnis perspiciatis unde omnis
                  perspiciatis und perspiciatis unde omnis perspiciatis und?
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
