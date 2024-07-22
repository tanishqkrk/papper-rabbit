import BackBar from "@/components/back/BackBar";
import ServicesContent from "@/components/services/ServicesContent";
import React from "react";

function Services() {
  const names = ["shyam", "dhruv"];
  const components = [
    { name: names[0], reverse: false },
    { name: names[1], reverse: true },
    { reverse: false },
    { reverse: true },
    { reverse: false },
    { reverse: true },
    { reverse: false },
    { reverse: true },
  ];

  return (
    <div className="flex flex-col relative mt-[52px] z-10 ">
      <BackBar name="Services" />
      <div className="flex flex-col items-center justify-center gap-20 w-full h-full mt-10">
        {components.map((component, index) => (
          <ServicesContent
            key={index}
            name={component.name}
            reverse={component.reverse}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
