import React from "react";
import backarrow from "../../public/assets/headerimg/Vector.png";
import Image from "next/image";

function BackBarId(props) {
  const name = props.name;
  const one = props.one;
  const two = props.two;
  const three = props.three;
  const four = props.four;

  return (
    <div className="w-full fixed z-40 flex flex-col items-center justify-center top-11  p-2 backdrop-blur-lg bg-gray-50 bg-opacity-20">
      <div className="relative h-12 lg:w-[45%] mac:w-[49%] w-full flex justify-between items-center mx-11  p-2 b">
        <div className="flex flex-col justify-center gap-4 items-end h-full">
          <div className="flex justify-center items-center text-black text-xl font-bold font-['Inter'] leading-[15px]">
            {name}{" "}
          </div>
          <div className="w-full flex justify-start items-center gap-1 text-black text-xs font-normal font-['Inter'] leading-none">
            <div>
              <Image className="w-2 h-2" src={backarrow} alt="" />
            </div>
            <div
              to="/"
              className="text-black text-xs font-normal font-['Inter'] leading-none"
            >
              Home
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center font-['Inter'] leading-[15px] gap-4">
          <div>
            <a
              href={"#" + one}
              className="text-black text-xs font-normal font-['Inter'] leading-none"
            >
              {one}
            </a>
          </div>
          <div>
            <a
              href={"#" + two}
              className="text-black text-xs font-normal font-['Inter'] leading-none"
            >
              {two}?
            </a>
          </div>
          <div>
            <a
              href={"#" + three}
              className="text-black text-xs font-normal font-['Inter'] leading-none"
            >
              {three}
            </a>
          </div>

          <div>
            <a
              href={"#" + four}
              className="text-black text-xs font-normal font-['Inter'] leading-none"
            >
              {four}
            </a>
          </div>
          <button className="text-white bg-black w-16 h-8 text-xs rounded-[10px]">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackBarId;
