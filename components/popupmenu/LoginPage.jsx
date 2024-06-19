import React, { useContext } from "react";
import backward from "../../public/assets/headerimg/backwardarrow.svg";
import Image from "next/image";

function LoginPage() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="w-[350px] h-[622px] mt-[5rem] relative bg-gray-50/opacity-70 rounded-[20px] backdrop-blur-[20px]">
        <div className="left-[104px] top-[40px] absolute text-black text-xl font-semibold font-['Inter'] leading-normal">
          Welcome Back
        </div>
        <Image
          className="w-2 h-3.5 left-[20px] top-[45px] absolute"
          src={backward}
          alt="backward"
          //   onClick={changeCon}
        />
        <div className="w-[310px] h-[76px] left-[20px] top-[104px] absolute">
          <div className="w-[310px] h-[50px] left-0 top-[26px] absolute bg-gray-50/opacity-70 rounded-[10px] border border-black backdrop-blur-[20px]" />
          <div className="left-[20px] top-[36px] absolute text-stone-400 text-sm font-normal font-['Inter'] leading-none">
            Enter your Email ID
          </div>
          <div className="left-[20px] top-0 absolute text-zinc-950 text-sm font-normal font-['Inter'] leading-none">
            Emaill ID
          </div>
        </div>
        <div className="w-[310px] h-[76px] left-[20px] top-[200px] absolute">
          <div className="w-[310px] h-[50px] left-0 top-[26px] absolute bg-gray-50/opacity-70 rounded-[10px] border border-black backdrop-blur-[20px]" />
          <div className="left-[20px] top-[36px] absolute text-stone-400 text-sm font-normal font-['Inter'] leading-none">
            Enter your password
          </div>
          <div className="left-[20px] top-0 absolute text-zinc-950 text-sm font-normal font-['Inter'] leading-none">
            Password
          </div>
          <div className="w-3.5 h-3.5 px-[1.17px] py-[2.33px] left-[276px] top-[44px] absolute justify-center items-center inline-flex" />
        </div>
        <div className="left-[25px] top-[285px] absolute text-zinc-950 text-sm font-normal font-['Inter'] leading-none">
          Forget Password?
        </div>
        <div className="w-[310px] h-10 left-[20px] top-[328px] absolute">
          <div className="w-[310px] h-10 left-0 top-0 absolute bg-zinc-950 rounded-[10px]" />

          <button className="left-[133px] top-[5px] absolute text-white text-sm font-bold font-['Inter'] leading-[30px]">
            Login
          </button>
        </div>
        <div className="left-[113px] top-[401px] absolute text-zinc-950 text-sm font-normal font-['Inter'] leading-none">
          New User?
        </div>
        <div className="left-[190px] top-[401px] absolute text-zinc-950 text-sm font-semibold font-['Inter'] leading-none">
          Signup
        </div>
      </div>
    </div>

    /*
<div className='flex justify-center items-center relative'>
        <div className="w-[350px] h-[622px] sm:w-[300px] sm:h-[580px] relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
       <div className=''
        <div className="w-[114px] h-[104px] left-[48px] top-[260px] absolute">
            <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">Marketing & PR</div>
            <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">End-to-End solution</div>
            <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">Brand Glossary</div>
            <div className="left-[1px] top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">Other Hutch</div>
        </div>
        <div className="w-[75px] h-[104px] left-[48px] top-[388px] absolute">
            <div className="left-[1px] top-[36px] absolute text-black text-xs font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
            <div className="left-0 top-[62px] absolute text-black text-xs font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
            <div className="left-[1px] top-[88px] absolute text-black text-xs font-normal font-['Inter'] leading-none">Lorum Ipsum</div>
            <div className="left-0 top-0 absolute text-neutral-600 text-xs font-light font-['Inter'] leading-none">Quick Links</div>
        </div>
        <div className="w-7 h-7 py-[7px] left-[10px] top-[34px] absolute justify-center items-center inline-flex">
            <Image src={backward} ></Image>
        </div>
    </div></div>

        <div className="w-[350px] h-[622px] sm:w-[300px] sm:h-[580px]relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]">
<div className='h-full w-full flex flex-row justify-center items-center '>
<div className="w-7 h-7 py-[7px] left-[10px] top-[34px] absolute justify-center items-center inline-flex">
                <Image src={backward}  ></Image>
            </div>
            <div className="  text-black text-lg font-semibold font-['Inter'] leading-normal">Welcome Back</div>
</div>
        </div>
    */
  );
}

export default LoginPage;
