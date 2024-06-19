import React from "react";
import linkedin from "../../public/assets/footer_assets/linkedin.svg";
import instagram from "../../public/assets/footer_assets/instagram.svg";
import facebook from "../../public/assets/footer_assets/facebook.svg";
import pintrist from "../../public/assets/footer_assets/pintrist.svg";
import twitter from "../../public/assets/footer_assets/twitter.svg";
import youtube from "../../public/assets/footer_assets/youtube.svg";
import Image from "next/image";
/*import { FaPhoneAlt } from "react-icons/fa";*/

function AddressForm() {
  return (
    <div className="w-full lg:grid mac:grid lg:grid-cols-2 lg:grid-rows-1 mac:grid-cols-2 mac:grid-rows-1 flex flex-col items-start justify-start  gap-8 ">
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="text-black dark:text-white text-[32px] font-bold font-['Inter'] leading-loose">
          Registered Office:
        </div>
        <div className="text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-none">
          24 GF, 4th B Cross, 1st Stage, KHB Colony, Basaveshwaranagar,
          Bangalore, Karnataka 560079, India.
        </div>
        <div className="text-black dark:text-white text-[32px] font-bold font-['Inter'] leading-loose">
          Office Address:
        </div>
        <div className="text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-none">
          24 GF, 4th B Cross, 1st Stage, KHB Colony, Basaveshwaranagar,
          Bangalore, Karnataka 560079, India.
        </div>
        <div className="text-black dark:text-white text-[32px] font-bold font-['Inter'] leading-loose">
          Get In Touch With US
        </div>
        <div className="text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-none grid grid-cols-1 grid-rows-2 gap-2">
          <div className="flex gap-2">
            <span>9998889990</span>
          </div>
          <div className="flex gap-2">
            <span>9998889990</span>
          </div>
        </div>

        <div className="text-black dark:text-white text-[32px] font-bold font-['Inter'] leading-loose">
          Connect US Even Here
        </div>

        <div className=" flex items-center justify-center gap-5">
          <Image className="w-[15px] h-[15px]" src={linkedin} alt="" />
          <Image className="w-[15px] h-[15px]" src={instagram} alt="" />
          <Image className="w-[15px] h-[15px]" src={pintrist} alt="" />
          <Image className="w-[15px] h-[15px]" src={facebook} alt="" />
          <Image className="w-[15px] h-[15px]" src={twitter} alt="" />
          <Image className="w-[15px] h-[15px]" src={youtube} alt="" />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 grid-rows-9 gap-4 text-black dark:text-white">
        <div className="text-black dark:text-white text-[32px] font-bold font-['Inter'] leading-loose col-span-2">
          Connect Form
        </div>

        <div className="flex flex-col items-start justify-start">
          <span className="text-xs pl-5 mb-2">First Name</span>
          <input
            type="text"
            placeholder="Full Name"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black "
          />
        </div>

        <div className="flex flex-col items-start justify-start">
          <span className="text-xs pl-5 mb-2">Company Name</span>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black "
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="text-xs pl-5 mb-2">Email Id</span>
          <input
            type="text"
            placeholder="Enter Email ID"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black "
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="text-xs pl-5 mb-2">Contact Number</span>
          <input
            type="text"
            placeholder="Enter Contact Number with country code"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black "
          />
        </div>

        <div className="flex flex-col items-start justify-start">
          <span className=" text-xs pl-5 mb-2">Service Looking For</span>
          <select
            type="text"
            placeholder="Full Name"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black"
          >
            <option value="dummy1"> dummy1 </option>
            <option value="dummy2"> dummy2 </option>
            <option value="dummy3"> dummy3 </option>
            <option value="dummy4"> dummy4 </option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-start">
          <span className="text-xs pl-5 mb-2">Subject</span>
          <input
            type="text"
            placeholder="Select"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[90%] h-[50px] text-black "
          />
        </div>

        <div className="flex flex-col items-start justify-start col-span-2 row-span-2">
          <span className="text-xs pl-5 mb-2">Brief About Subject</span>
          <textarea
            type="text"
            className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-sm w-[95%] h-[150px] text-black"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-start col-span-2 row-span-1 gap-2">
          <div className="w-full col-span-2 text-sm">
            <input type="checkbox" name="" id="" className="pr-5" />
            <span className="mr-10 text-xs">
              {" "}
              I here by agree that all filled content is correct and agree for
              the company to call me back
            </span>
          </div>
          <div className="w-full col-span-2 text-sm ">
            <input
              type="checkbox"
              name=" click on this to check box"
              id=""
              className="pr-5"
            />
            <span className="mr-10 text-xs">
              {" "}
              I here by agree that all filled content is correct and agree for
              the company to call me back
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center col-span-2 ">
          <button className="bg-black text-white dark:bg-white dark:text-black w-[20rem] h-11 rounded-lg">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AddressForm;
