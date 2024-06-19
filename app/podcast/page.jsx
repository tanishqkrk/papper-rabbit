import React from "react";

import pod_img from "../../public/assets/podcastimg/img.png";
import podcastimg1 from "../../public/assets/podcastimg/img.png";
import podcastimg2 from "../../public/assets/podcastimg/img2.png";
import podcastimg3 from "../../public/assets/podcastimg/img3.png";
import podcastimg4 from "../../public/assets/podcastimg/img4.png";

import left from "../../public/assets/bannerimgs/Arrow---Left-2.jpg";
import right from "../../public/assets/bannerimgs/Arrow---Right-2.jpg";
import play from "../../public/assets/Play.jpg";
import Image from "next/image";

function Pod_cast() {
  return (
    <div className="w-full h-[200rem] sm:h-[400rem] relative bg-neutral-100 mt-10 overflow-scroll">
      <div className="flex  w-full relative justify-center items-center ">
        <div className="  flex flex-col w-[75%] sm:w-full h-full   relative    ">
          <div className="flex flex-row w-full h-full">
            <div className="w-full h-full md:hidden sm:hidden flex justify-center mac:hidden items-center lg:flex-row flex-col gap-[10rem] relative">
              <div className="flex flex-col ">
                <Image
                  className="w-[20rem] p-[1rem] h-[20rem] sm:h-[25rem] sm:w-[45rem] mac:w-[40rem] mac:h-[40rem] relative rounded-full"
                  src={pod_img}
                  alt=""
                />
                <div className="w-full h-[4rem] relative bg-white rounded-[10px] flex flex-row gap-[5rem] items-center  ">
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={left}
                    alt=""
                  />
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={play}
                    alt=""
                  />

                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={right}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full md:w-[60%] md:h-[40%] flex justify-center items-center lg:flex-row flex-col gap-[10rem] relative">
              <div className="flex flex-col ">
                <Image
                  className="w-[33rem] p-[1rem] h-[33rem] sm:h-[23rem] sm:w-[35rem] mac:w-[40rem] mac:h-[40rem] relative rounded-full"
                  src={pod_img}
                  alt=""
                />
                <div className="w-full sm:w-[80%] sm:ml-[3rem] h-[4rem] relative bg-white rounded-[10px] flex flex-row justify-center gap-[5rem] items-center  ">
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={left}
                    alt=""
                  />
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={play}
                    alt=""
                  />

                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={right}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex justify-center md:hidden sm:hidden mac:hidden items-center lg:flex-row flex-col gap-[10rem] relative">
              <div className="flex flex-col ">
                <Image
                  className="w-[20rem] p-[1rem] h-[20rem] sm:h-[25rem] sm:w-[45rem] mac:w-[40rem] mac:h-[40rem] relative rounded-full"
                  src={pod_img}
                  alt=""
                />
                <div className="w-full h-[4rem] relative bg-white rounded-[10px] flex flex-row justify-center gap-[5rem] items-center  ">
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={left}
                    alt=""
                  />
                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={play}
                    alt=""
                  />

                  <Image
                    className="relative justify-center z-20 items-center inline-flex  w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
                    src={right}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 mt-[10rem] mac:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-[5rem] sm:ml-[20%] relative ">
            <div className=" w-full  h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>

                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="flex  w-full h-full  sm:grid grid-cols-1 sm:gap-[5%] relative">
              <div className="w-full  h-[542px] sm:w-[64%] lg:h-[600px] sm:h-[420px] sm:w-relative flex  ">
                <div className=" ">
                  <Image
                    className="w-full  h-full rounded-[20px]"
                    src={podcastimg1}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 z-30 text-black  dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] ">
                    <div className="w-full h-full absolute -z-10 rounded-tl-[20px] bg-white dark:bg-black rounded-br-[20px] backdrop-blur-[20px] opacity-50 " />
                    334
                  </div>
                  <div className="w-full h-[50%] top-[-50%] relative rounded-[20px] flex flex-col justify-center items-start gap-2  ">
                    <div className="w-full h-full  relative rounded-[20px] flex flex-col justify-center items-start gap-2.5">
                      <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
                      <div className="w-full flex z-10 items-center justify-start px-3 ">
                        <span className="text-justify text-black dark:text-white text-[32px] font-normal font-['Katibeh'] ">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Category
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Tag
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                      <div className="w-full flex z-10 items-center justify-start px-3">
                        <span className="text-justify text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
                          Date
                        </span>{" "}
                        -
                        <span className="text-justify text-black dark:text-white text-xs font-['Inter'] leading-3">
                          Title
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Pod_cast;
