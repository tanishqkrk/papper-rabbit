import React from "react";
import BackBar from "@/components/back/BackBar";
import HutchPageCards from "@/components/hutch/HutchPageCards";

function Hutch() {
  return (
    <div className="w-full flex flex-col items-center justify-center place-content mt-10">
      <BackBar name={"Hutch"} />
      <div className="lg:w-[74%] gap-8 sm:gap-2 items-center justify-center mac:max-w-[80%] w-full grid lg:grid-cols-4 lg:grid-rows-2 mac:grid-cols-4 mac:grid-rows-4 md:grid-cols-2 grid-cols-2 mt-20">
        {[...Array(12)].map((_, index) => (
          <HutchPageCards
            key={index}
            src={`/assets/hutchimg/img${index % 2 === 0 ? 1 : 2}.png`}
            varValue={index % 2 === 0 ? 0 : 40}
          />
        ))}
      </div>
    </div>
  );
}

export default Hutch;
