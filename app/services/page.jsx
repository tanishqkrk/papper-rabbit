import BackBar from "@/components/back/BackBar";
import ServicesContent from "@/components/services/ServicesContent";
import ServicesContentReverse from "@/components/services/ServicesContentReverse";
import React from "react";

function Services() {
  const names = ["shyam", "dhruv"];
  const [name1, name2] = names;
  return (
    <div className="flex flex-col relative mt-[52px] z-10 ">
      <BackBar name="Services" />
      <div className=" flex flex-col items-center justify-center gap-20 w-full h-full mt-10">
        <ServicesContent name={name1} key={1} />
        <ServicesContentReverse name={name2} key={2} />
        <ServicesContent />
        <ServicesContentReverse />
        <ServicesContent />
        <ServicesContentReverse />
        <ServicesContent />
        <ServicesContentReverse />
      </div>
    </div>
  );
}

export default Services;
