import React from "react";
import footerlogo from "../public/assets/footer_assets/paperrabbitlogo.png";
import linkedin from "../public/assets/footer_assets/linkedin.svg";
import instagram from "../public/assets/footer_assets/instagram.svg";
import facebook from "../public/assets/footer_assets/facebook.svg";
import pintrist from "../public/assets/footer_assets/pintrist.svg";
import twitter from "../public/assets/footer_assets/twitter.svg";
import youtube from "../public/assets/footer_assets/youtube.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-[100%]  flex lg:flex-row mac:flex-row flex-col items-center justify-center mt-[100px] bg-neutral-100 backdrop-blur-[20px] ">
      <div className="lg:w-[1420px] w-full h-full lg:mx-auto lg:h-[496px] relative flex flex-col items-center justify-center">
        <div className="flex lg:flex-row mac:flex-row mac:w-[74%] w-full h-full lg:h-[296px] flex-col items-center justify-evenly">
          <div className="w-[250px] h-[250px] flex flex-col items-center justify-evenly">
            <Image src={footerlogo} alt="" />
          </div>
          <div className="w-full h-full flex items-center justify-evenly relative">
            <div className="w-[98px] h-[190px] relative flex flex-col gap-3 ">
              <div className=" text-black text-[24px] lg:text-[32px] font-normal font-['Katibeh'] leading-loose">
                Company{" "}
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                About Us
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Career
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Team
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Resources
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                FAQ
              </div>
            </div>
            <div className="w-[117px] h-[190px] relative flex flex-col gap-3">
              <div className=" text-black text-[24px] lg:text-[32px] font-normal font-['Katibeh'] leading-loose">
                Policies{" "}
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Support
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Privacy Policies
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Service Policies
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Affiliation Policies
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                T&C
              </div>
            </div>
            <div className="w-[78px] h-[190px] relative flex flex-col gap-3">
              <div className=" text-black text-[24px] lg:text-[32px] font-normal font-['Katibeh'] leading-loose">
                Explore
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Blog
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Article
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Case Study
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Portfolio
              </div>
              <div className=" text-black text-sm font-normal font-['Inter'] leading-none">
                Podcaste
              </div>
            </div>
          </div>

          <div className="w-[341px] h-[190px] relative flex flex-col items-center justify-center gap-2">
            <div className=" text-black text-[24px] lg:text-[32px] font-normal font-['Katibeh'] leading-loose">
              News Letter
            </div>

            <div className="w-[340px] h-[50px] relative bg-gray-50 bg-opacity-20 rounded-[10px] border border-black backdrop-blur-[20px] justify-start items-center inline-flex">
              <div className="w-[206px] text-stone-400 text-sm text-center font-normal font-['Inter'] leading-none">
                Enter your Email to Subscribe
              </div>
            </div>
            <div className="w-[340px] h-[40px] relative bg-zinc-950 rounded-[10px] text-white flex flex-col items-center justify-center text-sm font-bold font-['Inter'] leading-[30px]">
              Subscribe
            </div>
          </div>
        </div>

        <div className="w-full h-[200px] flex flex-col items-center justify-center gap-4">
          <div className=" flex items-center justify-center gap-5">
            <Image className="w-[30px] h-[30px]" src={linkedin} alt="" />
            <Image className="w-[30px] h-[30px]" src={instagram} alt="" />
            <Image className="w-[30px] h-[30px]" src={pintrist} alt="" />
            <Image className="w-[30px] h-[30px]" src={facebook} alt="" />
            <Image className="w-[30px] h-[30px]" src={twitter} alt="" />
            <Image className="w-[30px] h-[30px]" src={youtube} alt="" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className=" text-black text-sm font-semibold font-['Inter'] leading-none">
              ©{" "}
            </div>
            <div className=" text-black text-sm font-semibold font-['Inter'] leading-none">
              All Right Reserved ; 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
