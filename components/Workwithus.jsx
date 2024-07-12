import React from "react";
import workwithusimg2 from "../public/assets/workwithus/workwithus2.png";
import Image from "next/image";
import Link from "next/link";

function Workwithus() {
  return (
    <div className="w-full flex dark:bg-black justify-center items-center p-10">
      <div className="lg:w-[70%] mac:w-[74%] lg:h-80 w-full h-72 relative mx-5 my-8 text-center flex flex-col lg:flex-row mac:flex-row mac:gap-10 items-center lg:justify-between justify-center">
        <Image
          className="lg:w-[1420px] lg:h-80 w-full h-72 left-0 top-0 absolute rounded-[20px]"
          src={workwithusimg2}
          alt="cta image"
        />
        <div className="lg:h-80 w-full h-72 left-0 top-0 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="sm:p-4 md:p-4 lg:w-full lg:h-full lg:pl-[40px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <p
            className="leading-tight text-left font-['Katibeh'] text-white w-full lg:w-[660px] md:text-[30px] sm:text-[20px] md:leading-[36px] sm:leading-[28px]"
            style={{ fontWeight: 400 }}
          >
            Lets make you build your dream into a reality and gain growth to
            your business with.
          </p>
          <div className="w-full flex items-start sm:justify-center gap-4 ">
            <span className="t text-[58px] sm:text-[28px] mac:text-[38px] md:text-[48px] font-bold font-['Inter']">
              <span
                style={{ fontWeight: 400 }}
                className="font-['Revelstoke'] text-black text-[96px] leading-[115px] sm:text-[40px] sm:leading-[50px] md:text-[60px] md:leading-[70px] lg:text-[80px] lg:leading-[90px] xl:text-[96px] xl:leading-[115px]"
              >
                CREATIVITY
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <Link href="/contactus" className="sm:hidden">
            <button className="sm:hidden  button1 relative inline-flex lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[35px] h-12 overflow-hidden rounded-[10px] p-[3px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50">
              <span className="absolute inset-[-200%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFC0CB_0%,#FF69B4_50%,#FFC0CB_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[8px] bg-zinc-950 dark:bg-white text-white dark:text-black text-xs lg:text-sm font-bold font-['Inter'] leading-[30px] backdrop-blur-3xl">
                Reach Us
              </span>
            </button>
          </Link>

          <Link href="/contactus" className="sm:block hidden">
            <button className="sm:block hidden button1 relative inline-flex lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[35px] h-12 overflow-hidden rounded-[10px] p-[3px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50 bg-zinc-950 dark:bg-white text-white dark:text-black text-xs lg:text-sm font-bold font-['Inter'] leading-[30px] backdrop-blur-3xl animate-border-glow">
              Reach Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
