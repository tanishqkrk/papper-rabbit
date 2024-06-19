import React, { useContext } from "react";
import backward from "../../../assets/headerimg/backwardarrow.svg";
import { AppContext } from "../../../context/Appcontext";
import { Link } from "react-router-dom";
import Image from "next/image";

function InnerPageComp4() {
  const { changeCon, popup } = useContext(AppContext);

  return (
    <div className="w-[350px] h-[622px] sm:w-[300px] sm:h-[580px] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
      <div className="w-[228px] h-[196px] left-[48px] top-[40px] absolute">
        <div className="left-0 top-[36px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          {" "}
          <Link to="/hutchlayer" onClick={popup}>
            Blog
          </Link>
        </div>
        <div className="left-0 top-[70px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Article
        </div>
        <div className="left-0 top-[104px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Casestudy
        </div>
        <div className="left-0 top-[138px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Insight
        </div>
        <div className="left-0 top-[172px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">
          Podcast
        </div>
        <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Lounge
        </div>
      </div>
      <div className="w-[114px] h-[104px] left-[48px] top-[260px] absolute">
        <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Faq
        </div>
        <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Resources
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Gallery
        </div>
        <div className="left-[1px] top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Other Hutch
        </div>
      </div>
      <div className="w-[75px] h-[104px] left-[48px] top-[388px] absolute">
        <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Lorum Ipsum
        </div>
        <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Lorum Ipsum
        </div>
        <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">
          Lorum Ipsum
        </div>
        <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">
          Quick Links
        </div>
      </div>
      <div className="w-7 h-7 py-[7px] left-[10px] top-[34px] absolute justify-center items-center inline-flex">
        <Image alt="backward" src={backward} onClick={changeCon}></Image>
      </div>
    </div>
  );
}

export default InnerPageComp4;
