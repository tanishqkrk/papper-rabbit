import BackBar from "@/components/back/BackBar";
import Casestudycontent from "@/components/casestudy/Casestudycontent";
import CasestudyContentReverse from "@/components/casestudy/CasestudyContentReverse";
import React from "react";

function Casestudy() {
  return (
    <div className="flex flex-col relative mt-[52px]">
      <BackBar name="Services" />
      <div className="flex flex-col items-center justify-center gap-20 w-screen h-full mt-10">
        <Casestudycontent />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
        <Casestudycontent />
        <CasestudyContentReverse />
      </div>
    </div>
  );
}

export default Casestudy;
