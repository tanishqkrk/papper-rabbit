"use client";

import React, { useContext } from "react";
import forward from "../../public/assets/headerimg/forwardarrow.svg";
import login_icon from "../../public/assets/Iconly/Bold/Profile.svg";
import linkedin from "../../public/assets/footer_assets/linkedin.svg";
import instagram from "../../public/assets/footer_assets/instagram.svg";
import facebook from "../../public/assets/footer_assets/facebook.svg";
import pintrist from "../../public/assets/footer_assets/pintrist.svg";
import twitter from "../../public/assets/footer_assets/twitter.svg";
import youtube from "../../public/assets/footer_assets/youtube.svg";

import { div } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/DataContext";

function MainPage() {
  const { changeCon, popup } = useContext(AppContext);

  return (
    <div className="w-[350px] h-[622px] sm:w-[300px] sm:h-[580px] flex-col justify-center items-start gap-0.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 bg-gray-50 bg-opacity-70 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[20px] justify-center items-center inline-flex">
        <div className="text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/" onClick={popup}>
            Home
          </Link>
        </div>
      </div>

      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/hutch" onClick={popup}>
            Hutch
          </Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex">
          <Image alt="foward" src={forward} onClick={changeCon}></Image>
        </div>
      </div>

      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/services" onClick={popup}>
            Services
          </Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex">
          <Image alt="fwd" src={forward} onClick={changeCon}></Image>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          Portfolio
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex">
          <Image alt="fwd" src={forward}></Image>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/lounge">Lounge</Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex">
          <Image alt="fwd" src={forward}></Image>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/aboutus">About Us</Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex"></div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/career">Career</Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex"></div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          Store
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex"></div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          World
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex"></div>
      </div>
      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/contactus">Contact Us</Link>
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex"></div>
      </div>

      <div className="self-stretch grow shrink basis-0 pl-[98px] pr-[11px]  bg-gray-50 bg-opacity-70 backdrop-blur-[20px] justify-end items-center gap-[59px] inline-flex">
        <div className="w-full  text-center text-black text-sm font-normal font-['Inter'] leading-none">
          Client Login{" "}
        </div>
        <div className="w-7 h-7 py-[7px] justify-center items-center inline-flex">
          <Link href="/login">
            {" "}
            <Image alt="login" src={login_icon}></Image>{" "}
          </Link>
        </div>
      </div>

      <div className="w-full py-4 bg-gray-50 bg-opacity-70 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center gap-5 inline-flex">
        <Image
          className="w-[30px] h-[30px]"
          src={linkedin}
          alt="LinkedIn Icon"
        />
        <Image
          className="w-[30px] h-[30px]"
          src={instagram}
          alt="Instagram Icon"
        />
        <Image
          className="w-[30px] h-[30px]"
          src={pintrist}
          alt="Pinterest Icon"
        />
        <Image
          className="w-[30px] h-[30px]"
          src={facebook}
          alt="Facebook Icon"
        />
        <Image className="w-[30px] h-[30px]" src={twitter} alt="Twitter Icon" />
        <Image className="w-[30px] h-[30px]" src={youtube} alt="YouTube Icon" />
      </div>
      {/* <div className=' flex items-center justify-center gap-5'>
 
        </div> */}
    </div>
  );
}

export default MainPage;
