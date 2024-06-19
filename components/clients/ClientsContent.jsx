import React from "react";
import clientimg from "../../public/assets/clients/clientspage/img.png";
import link from "../../public/assets/clients/clientspage/link.png";
import Image from "next/image";

function ClientsContent({ companyname, domain, industry }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center lg:p-0 p-2 lg:mb-20">
      <div>
        <Image
          className="w-[21rem] lg:h-[21rem]  h-[15rem] rounded-[20px]"
          src={clientimg}
          alt="clientsimage"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-3">
          <div>
            <Image
              className="lg:w-[1.5rem] lg:h-[1.5rem] w-[1rem] h-[1rem] "
              src={link}
              alt="clientsimage"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-black dark:text-white lg:text-[2rem] mac:text-[1.7rem] text-[1.6rem] font-['Katibeh'] ">
            {companyname}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-black dark:text-white lg:text-[2rem] text-[1.2rem] font-normal font-['Katibeh'] leading-loose">
          Domain - {domain}
        </div>
        <div className="w-full flex flex-col items-center justify-center text-black dark:text-white lg:text-[2rem] text-[1.2rem] font-normal font-['Katibeh'] leading-loose">
          Industry - {industry}
        </div>
      </div>
    </div>
  );
}

export default ClientsContent;
