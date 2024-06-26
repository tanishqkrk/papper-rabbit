import React from "react";
import workwithusimg2 from "../public/assets/workwithus/workwithus2.png";
import Image from "next/image";
import Link from "next/link";

function Workwithus() {
  return (
    <div className="w-full flex dark:bg-black justify-center items-center pt-10 pb-10">
      <div className="lg:w-[70%] mac:w-[74%] lg:h-80 w-full h-72 relative mx-5 my-8 text-center flex flex-col lg:flex-row mac:flex-row mac:gap-10 items-center lg:justify-between justify-center">
        <Image
          className="lg:w-[1420px] lg:h-80 w-full h-72 left-0 top-0 absolute rounded-[20px]"
          src={workwithusimg2}
          alt="cta image"
        />
        <div className="lg:h-80 w-full h-72 left-0 top-0 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full lg:pl-[40px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center  lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <p
            className=" leading-tight text-left font-['Katibeh'] text-white w-[660px]"
            style={{ fontWeight: 400, fontSize: "40px", lineHeight: "48px" }}
          >
            Lets makes you build your dream into a reality and gain growth to
            your business with.
          </p>
          <div className="w-full flex items-start sm:justify-center gap-4 ">
            <span className="t text-[58px] sm:text-[28px] mac:text-[38px] font-bold font-['Inter']">
              <span
                className="font-['Revelstoke'] text-black"
                style={{
                  fontWeight: 400,
                  fontSize: "96px",
                  lineHeight: "115px",
                }}
              >
                CREATIVITY
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <Link href="/contactus">
            <button className=" button2 lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] sm:w-[5rem] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex hover:shadow-pink">
              Reach Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
