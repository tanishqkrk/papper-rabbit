import BackBar from "@/components/back/BackBar";
import AddressForm from "@/components/contactus/AddressForm";
import ArticleCon from "@/components/contactus/ArticleCon";
import HutchContact from "@/components/contactus/HutchContact";
import banner from "../../public/assets/contactusimg/bannerimg.svg";

import Map from "@/components/contactus/Map";
import Image from "next/image";
import React from "react";

function ContactUsPage() {
  return (
    <div className="w-full dark:bg-black flex flex-col items-center justify-start z-10 mt-11">
      <BackBar name="Contact Us" />

      <div className="w-full h-[350px] ">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-[76%] mac:w-[76%] w-full flex flex-col items-center justify-start p-4 gap-8">
        <div className="w-full text-justify text-black dark:text-white lg:text-[40px] mac:text-[40px] text-[20px] font-normal font-['Katibeh'] lg:leading-10 mac:leading-10 mt-10">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.&quot;
        </div>

        <AddressForm />

        <Map />

        <HutchContact />

        <ArticleCon />
      </div>
    </div>
  );
}

export default ContactUsPage;
