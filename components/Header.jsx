"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import dayimg from "../public/assets/headerimg/Group 2.svg";
import darkimg from "../public/assets/headerimg/night.svg";
import darkpr from "../public/assets/headerimg/PR2.svg";
import lightpr from "../public/assets/headerimg/PR.svg";
import search from "../public/assets/portfolioimg/Icons/search_24px.svg";
import searchHutch from "./subnavbars/Hutch";
import Dark from "../public/assets/portfolioimg/Icons/search_dark.png";
import Services from "./subnavbars/Services";
import Portfolio from "./subnavbars/Portfolio";
import Lounge from "./subnavbars/Lounge";
import { AppContext } from "@/context/DataContext";
import PopupMenu from "./popupmenu/PopupMenu";
import Hutch from "./subnavbars/Hutch";

function Header(props) {
  const { mode, container, popup, visible } = useContext(AppContext);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let navi = useRef(null);
  const disappear = () => {
    setHide(!hide);
  };

  return (
    <div className="fixed top-0 w-[100%] h-11  dark:bg-black  z-50 flex justify-center items-center  bg-opacity-90  dark:bg-opacity-50 dark:backdrop-blur-sm bg-gray-50">
      <div className="lg:w-[90%] mac:w-[80%] w-full z-40  h-11 relative flex items-center justify-between sm:p-2 md:p-2">
        {/* <div className="h-full text-zinc-950 dark:text-white relative lg:text-[2rem] text-[1.5rem] font-normal font-['Revelstoke'] "> */}
        <Link href="/">
          <div className="h-11 text-zinc-950 dark:text-white relative lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.2rem] text-[1.2rem] font-normal font-['Revelstoke'] flex justify-center items-center object-contain">
            PAPER RABBIT
          </div>
        </Link>
        {/* </div> */}
        <div className="h-full w-[68%]  relative lg:grid mac:grid grid-cols-10 grid-rows-1 hidden  ">
          <div
            className={`${
              hide
                ? " flex-col  h-full text-center cursor-pointer  flex items-center justify-center"
                : " flex-col  h-full text-center cursor-pointer  flex items-center justify-center group/item"
            }`}
            onClick={disappear}
          >
            <Link href="/">
              <div className=" text-zinc-950 dark:text-white  text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Home
              </div>
            </Link>
          </div>
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/hutch">
              <div className="text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Hutch
              </div>
            </Link>
          </div>
          <Hutch />
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/services">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Services
              </div>
            </Link>
          </div>
          <Services />
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/portfolio">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Portfolio
              </div>
            </Link>
          </div>
          <Portfolio />
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/lounge">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Lounge
              </div>
            </Link>
          </div>
          <Lounge />
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              <Link href="/aboutus">About Us</Link>
            </div>
          </div>
          {/* <AboutUs /> */}
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/career">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Career
              </div>
            </Link>
          </div>
          {/* <AboutUs /> */}
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <Link href="/store">
              <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
                Store{" "}
              </div>
            </Link>
          </div>
          {/* <AboutUs /> */}
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              World
            </div>
            {/* <World /> */}
          </div>
          <div
            className={`${
              hide
                ? " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
                : " flex-col   h-full text-center cursor-pointer  flex items-center justify-center nav-buttons"
            }`}
            onClick={disappear}
          >
            <div className=" text-zinc-950 dark:text-white text-sm mac:text-xs font-normal font-['Inter'] leading-normal ">
              <Link href="/contactus">Contact Us</Link>
            </div>
            {/* <Contactus /> */}
          </div>
        </div>
        {/* <div className="h-full relative sm:hidden md:hidden ">
        </div> */}
        <div className="relative flex items-center justify-center gap-[4rem]">
          {mounted ? (
            theme === "dark" ? (
              <FiSun className="w-6 h-6 text-white" onClick={modeChange} />
            ) : (
              <FiMoon className="w-6 h-6 text-black" onClick={modeChange} />
            )
          ) : (
            <div className="w-6 h-6 bg-gray-400 rounded-full" />
          )}
          <Image
            className="w-7 h-7"
            src={theme === "light" ? search : Dark}
            alt="Search"
          />
          <Image
            className="block-bg w-9 h-9"
            src={theme === "light" ? darkpr : lightpr}
            alt="Popup"
            onClick={popup}
          />
        </div>
      </div>
      {/* </div> */}
      <div
        className="w-full h-screen absolute z-[100] top-0  flex items-center justify-center invisible"
        ref={container}
      >
        <div className="w-full h-screen absolute  bg-white opacity-70" />
        <PopupMenu />
      </div>
    </div>
  );
}
export default Header;
