import React from "react";
import article1 from "../../public/assets/articalimgs/artical1.jpg";
import article2 from "../../public/assets/articalimgs/artical2.jpg";
import article3 from "../../public/assets/articalimgs/artical3.jpg";
import article4 from "../../public/assets/articalimgs/artical4.jpg";
import Image from "next/image";

function ResourcesCard() {
  return (
    <div className="w-full  relative ">
      <Image
        className="w-full h-full z-20 rounded-[20px]"
        src={article1}
        alt=""
      />
      <div className=" w-full h-full -z-10 left-0 top-0  absolute  rounded-[20px]" />
      <div className="lg:w-[99%] w-[99%] lg:h-[50px] h-[40px]  bottom-1  absolute rounded-[20px] bg-opacity-50 backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
        Download
      </div>
    </div>
  );
}

export default ResourcesCard;
