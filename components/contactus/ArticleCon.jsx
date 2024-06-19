import React from "react";
import article1 from "../../public/assets/articalimgs/artical1.jpg";
import article2 from "../../public/assets/articalimgs/artical2.jpg";
import article3 from "../../public/assets/articalimgs/artical3.jpg";
import article4 from "../../public/assets/articalimgs/artical4.jpg";
import Image from "next/image";

function ArticleCon() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center h-full">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-[24rem] h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Longue
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Advertise{" "}
          </div>
        </div>
      </div>

      <div className=" mac:w-[100%] h-full grid grid-rows-1 grid-cols-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-4 mt-20 sm:p-2 md:p-2">
        <div className="w-full h-full relative  group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article1}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>
        <div className="w-full h-full relative  group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-red-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>
        <div className="w-full h-full relative  group/items ">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article3}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-sky-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-sky-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-sky-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>
        <div className="w-full h-full relative  group/items ">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article4}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-amber-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-amber-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-amber-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        {/* <div className="w-[350px] h-[360px] absolute top-[-19.5rem] left-[-5rem] rounded-xl bg-red-100" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur voluptatem repellat nulla!
                        </div> */}
      </div>
    </div>
  );
}

export default ArticleCon;
