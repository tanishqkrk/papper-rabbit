"use client";
import React, { useState } from "react";
import career1 from "../../public/assets/careers/career.png";
import career2 from "../../public/assets/careers/career1.png";
import career3 from "../../public/assets/careers/career2.png";
import career4 from "../../public/assets/careers/career3.png";
import Image from "next/image";
import Link from "next/link";

function CareerPage() {
  const [mouse, setMouse] = useState(false);
  const [id, setId] = useState(0);

  const mousehover = (id) => {
    setMouse(!mouse);
    setId(id);
  };

  return (
    <div className="w-full   bg-neutral-100 relative">
      <div className="flex w-full h-full relative justify-center items-center ">
        <div className="  flex flex-col justify-center  relative items-center h-full md:w-full p-[2%] sm:w-full w-[75%] mac:w-[90%]">
          <div className="w-[80%] h-full flex flex-row sm:flex-col justify-center gap-[5%] relative items-center">
            <Image
              className="relative lg:hidden mac:hidden md:hidden w-full h-full md:w-[10%] rounded-[1.25rem] "
              src={career1}
              alt=""
            />
            <div className="w-full h-full flex flex-col justify-center items-center relative ">
              <div className=" w-50% relative text-justify text-black  text-[4rem] font-normal font-['Katibeh'] ">
                Work Life
              </div>
              <div className=" relative text-black text-justify sm:text-xs font-normal font-['Inter'] ">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis unde omnis unde. Perspiciatis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis unde omnis perspiciatis unde omnis perspiciatis unde
                omnis perspiciatis unde omnis. Perspiciatis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis unde. Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis. Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis unde.
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis perspiciatis unde omnis unde omnis perspiciatis unde
                omnis perspiciatis unde omnis perspiciatis unde omnis.
              </div>
            </div>{" "}
            <div className="relative w-full mac:size-[55%] md:h-[25rem] md:w-[25rem] md:mt-[10%]  h-full sm:hidden rounded-[1.25rem] ">
              <Image
                className="relative w-full h-full  "
                src={career1}
                alt=""
              />

              <div
                className="w-5 h-5 left-[20rem] top-[22rem] hidden lg:block mac:block  absolute"
                onMouseEnter={() => mousehover(1)}
                onMouseLeave={() => mousehover(0)}
              >
                <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-sky-200 rounded-full" />

                {mouse && id === 1 && (
                  <div className="w-80 bottom-5 left-7 absolute  z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                    {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                    <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                      Perspiciatis unde dolori perspiciatis unde dolori
                      <br />{" "}
                    </div>
                    <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                      &apos;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud.
                      Incididunt ut labore et dolore magna aliqua.Ut enim ad
                      minim veniam, quis nostrud. Incididunt ut labore et dolore
                      magna aliqua.Ut enim ad minim veniam, quis nostrud.&apos;
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col mt-[10%] justify-center items-center relative">
            <div className=" w-full  flex justify-center lg:items-center text-black sm:text-[1.5rem] text-[3rem] font-bold font-['Inter'] ">
              Why to join Paper Rabbit?{" "}
            </div>

            <div className=" mt-[5%] grid  grid-cols-2 h-full lg:flex lg:flex-row  w-full mac:flex mac:flex-row lg:h-full justify-center items-center  mac:gap-[2%] gap-9 ">
              <div className="flex flex-col h-full w-full  justify-center items-center gap-8 relative">
                <div className="flex flex-col w-full h-full  justify-center items-center gap-8 relative">
                  <div className="flex flex-col w-[70%] mac:w-[80%] gap-[1rem] justify-center items-center">
                    <div className="w-full relative text-xl  lg:text-2xl font-bold font-['Inter'] sm:font-normal">
                      Lorum ipsum unde <br />
                    </div>
                    <div className=" w-full h-full  relative  text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                    <div className="  w-full h-full  relative   text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                  </div>
                  <div className="w-[7rem]  absolute left-[-1rem] mac:left-[-3rem]  md:top-[5rem] top-[3.3rem]  sm:left-[-3rem] rotate-90 border border-black"></div>
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] mt-[2rem] lg:h-[21rem] mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] left-0 relative rounded-[20px]"
                    src={career2}
                    alt="kk"
                  />
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] lg:h-[21rem] left-0  mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] relative rounded-[20px]"
                    src={career4}
                    alt="kk"
                  />
                </div>
              </div>

              <div className="flex flex-col h-full w-full mt-[20%] sm:mt-[10rem]  justify-center items-center gap-8 relative">
                <div className="flex flex-col w-full h-full  justify-center items-center gap-8 relative">
                  <div className="flex flex-col w-[70%] mac:w-[80%] gap-[1rem] justify-center items-center">
                    <div className="w-full relative text-xl  lg:text-2xl font-bold font-['Inter'] sm:font-normal ">
                      Lorum ipsum unde <br />
                    </div>
                    <div className=" w-full h-full  relative  text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                    <div className="  w-full h-full  relative   text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                  </div>
                  <div className="w-[7rem]  absolute left-[-1rem] top-[3.3rem]  md:top-[5rem] mac:left-[-3rem]  sm:left-[-3rem] rotate-90 border border-black"></div>
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] mt-[2rem] lg:h-[21rem] left-0 relative  mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] rounded-[20px]"
                    src={career2}
                    alt="kk"
                  />
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] lg:h-[21rem] left-0  relative mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] rounded-[20px]"
                    src={career4}
                    alt="kk"
                  />
                </div>
              </div>

              <div className="flex flex-col h-full w-full  justify-center items-center gap-8 relative">
                <div className="flex flex-col w-full h-full  justify-center items-center gap-8 relative">
                  <div className="flex flex-col w-[70%] gap-[1rem] mac:w-[80%] justify-center items-center">
                    <div className="w-full relative text-xl  lg:text-2xl font-bold font-['Inter'] sm:font-normal ">
                      Lorum ipsum unde <br />
                    </div>
                    <div className=" w-full h-full  relative  text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                    <div className="  w-full h-full  relative   text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                  </div>
                  <div className="w-[7rem]  absolute left-[-1rem] top-[3.3rem] md:top-[5rem] rotate-90 mac:left-[-3rem]  sm:left-[-3rem] border border-black"></div>
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] mt-[2rem] lg:h-[21rem] left-0 mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] relative rounded-[20px]"
                    src={career2}
                    alt="kk"
                  />
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] lg:h-[21rem] left-0   mac:h-[21rem] mac:w-[21rem] relative md:w-[19rem] md:h-[19rem] rounded-[20px]"
                    src={career4}
                    alt="kk"
                  />
                </div>
              </div>

              <div className="flex flex-col h-full w-full mt-[20%] justify-center items-center gap-8 relative">
                <div className="flex flex-col w-full h-full  justify-center items-center gap-8 relative">
                  <div className="flex flex-col w-[70%] gap-[1rem] mac:w-[80%] justify-center items-center">
                    <div className="w-full relative text-xl  lg:text-2xl font-bold font-['Inter'] sm:font-normal ">
                      Lorum ipsum unde <br />
                    </div>
                    <div className=" w-full h-full  relative  text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                    <div className="  w-full h-full  relative   text-sm font-normal font-['Inter'] ">
                      Perspiciatis unde omnis{" "}
                    </div>
                  </div>
                  <div className="w-[7rem]  absolute left-[-1rem] md:top-[5rem] top-[3.3rem] rotate-90 mac:left-[-3rem]  sm:left-[-3rem] border border-black"></div>
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] mt-[2rem] lg:h-[21rem]  mac:h-[21rem] mac:w-[21rem] md:w-[19rem] md:h-[19rem] left-0 relative rounded-[20px]"
                    src={career2}
                    alt="kk"
                  />
                  <Image
                    className="w-[12rem] lg:w-[21rem] h-[12rem] lg:h-[21rem] left-0  mac:h-[21rem] mac:w-[21rem]md:w-[19rem] md:h-[19rem] relative rounded-[20px]"
                    src={career4}
                    alt="kk"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full  flex justify-center mt-[5%] items-center text-black text:[xl] text-[3rem] font-bold font-['Inter'] ">
              Recent Openings
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>
              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>

          <div className="w-full  p-[2%] lg:h-[20rem] mt-[5rem] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
            <div className=" w-full   relative text-black text-[2rem] lg:text-[2.5rem] font-normal font-['Katibeh'] ">
              Perspiciatis unde omnis perspiciatis unde omnis
            </div>
            <div className="w-full  relative  text-black  font-normal font-['Inter'] ">
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis perspicis perspiciatis unde
              omnis perspiciatisunde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis perspiciatis unde omnis perspiciatis unde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde omnis perspiciatis unde omnis perspiciatisunde omnis
              perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
              omnis perspiciatis unde omnis perspiciatis unde omnis perspiciatis
              unde.
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center   sm:flex-col mt-[2%] relative w-full ">
              <div className="w-full  flex flex-row md:gap-[1%]  lg:gap-[5%] ">
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Category :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="   relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Job Type :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative ">
                    Perspiciatis
                  </span>
                </div>
                <div className="    relative text-justify">
                  <span className="text-black text-xs sm:font-normal font-bold font-['Inter'] ">
                    Number of openings :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">12</span>
                </div>
                <div className="   sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Posted on :
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    {" "}
                    DD/MM/YYYY
                  </span>
                </div>
                <div className="    sm:hidden relative text-justify">
                  <span className="text-black text-xs font-bold font-['Inter'] ">
                    Last Date :{" "}
                  </span>
                  <span className=" text-xs sm:font-normal relative">
                    DD/MM/YYYY
                  </span>
                </div>
              </div>

              <button className="w-[10%] h-[35%] relative  bg-zinc-950   rounded-[10px] sm:w-[50%] sm:mt-[10%] sm:h-[10%] sm:p-[3%] text-white flex flex-col p-[1%] items-center justify-center text-sm font-bold font-['Inter'] ">
                <Link href="/jobdescription">Apply</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
