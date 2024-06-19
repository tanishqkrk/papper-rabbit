import React, { useContext } from "react";
import backward from "../../../assets/headerimg/backwardarrow.svg";
import { AppContext } from "../../../context/Appcontext";
import { Link } from "react-router-dom";
import Image from "next/image";

function InnerPageComp3() {
  const { changeCon, popup } = useContext(AppContext);

  return (
    <div className="w-[350px] h-[622px] sm:w-[300px] sm:h-[580px] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
      <div className="w-[228px] h-[196px] left-[48px] top-[40px] absolute">
        <div className="left-0 top-[36px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          {" "}
          <Link to="/hutchlayer" onClick={popup}>
            Branding
          </Link>
        </div>
        <div className="left-0 top-[70px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          UI/UX
        </div>
        <div className="left-0 top-[104px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Website
        </div>
        <div className="left-0 top-[138px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Editorials
        </div>
        <div className="left-0 top-[172px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Social Network
        </div>
        <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Portfolio
        </div>
      </div>
      <div className="w-[114px] h-[104px] left-[48px] top-[260px] absolute">
        <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Packaging{" "}
        </div>
        <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Interactive
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Campings
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Motion Graphics
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Illistration/ Comic book
        </div>
        <div className="left-[1px] top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Other Hutch
        </div>
      </div>
      <div className="w-[75px] h-[104px] left-[48px] top-[388px] absolute">
        <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Game Art & UI
        </div>
        <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Environment
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Exhibitions
        </div>
        <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Retail
        </div>
        <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Collection
        </div>
      </div>
      <div className="w-7 h-7 py-[7px] left-[10px] top-[34px] absolute justify-center items-center inline-flex">
        <Image alt="backward" src={backward} onClick={changeCon} />
      </div>
    </div>
  );
}

export default InnerPageComp3;
