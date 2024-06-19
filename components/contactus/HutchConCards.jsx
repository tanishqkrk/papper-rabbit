import React from "react";
import services0 from "../../public/assets/hutchimg/img2.png";
import Image from "next/image";

function HutchConCards() {
  return (
    <div className="min-w-[160px] relative z-10 mx-auto">
      <div className="relative rounded-[20px] overflow-hidden">
        <Image
          src={services0}
          alt="Service Image"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-50 bg-opacity-20 rounded-[20px] backdrop-blur-[20px] flex flex-col justify-center items-center gap-2 p-4">
          <div className="text-black dark:text-white text-lg lg:text-2xl font-bold font-['Inter'] text-center">
            Perspiciatis unde omnis
          </div>
          <div className="text-black dark:text-white text-xs font-normal font-['Inter'] text-center">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </div>
          <div className="relative">
            <button className="w-[122px] lg:h-11 h-8 bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HutchConCards;
