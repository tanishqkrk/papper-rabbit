"use client";
import React, { useState, useRef } from "react";
import aboutuslogo from "../../public/assets/aboutuspngs/aboutuslogo.svg";
import banner from "../../public/assets/contactusimg/bannerimg.svg";
import img1 from "../../public/assets/1.jpg";
import add from "../../public/assets/services/add.svg";
import GalleryAdvertising from "@/components/GalleryAdvertising";
import BackBar from "@/components/back/BackBar";
import Image from "next/image";

function AboutUsPage() {
  const [visible, setVisible] = useState(false);

  const container = useRef(null);

  function popup() {
    if (visible) {
      setVisible(!visible);
      document.body.classList.remove("modal-open");
      container.current.classList.remove("visible");
      container.current.classList.add("invisible");
    } else {
      setVisible(!visible);
      document.body.classList.add("modal-open");
      container.current.classList.add("visible");
      container.current.classList.remove("invisible");
    }
  }

  return (
    <div className="dark:bg-black flex flex-col items-center justtify-center">
      <BackBar name={"About_us"} />
      <div className="w-full h-[350px] ">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="w-full text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal p-8">
          &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="h-full flex items-center justify-center md:flex-col sm:flex-col gap-10 p-8">
          <div className="h-full max-w-[400px] text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            <br />_ DARSHAN PRAKASH
          </div>
          <div className="h-full text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            <Image src={aboutuslogo} alt="logo" />
          </div>
          <div className="max-h-full  max-w-[400px] text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            <br />_ DARSHAN PRAKASH
          </div>
        </div>
        <div className="w-full text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal p-8">
          &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10 p-4">
        <div className="text-[2rem] font-bold">what we are?</div>
        <div className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eligendi ullam
          perferendis molestiae repudiandae rem quibusdam facilis illum rerum ea
          voluptates a minima repellendus, nostrum maxime quo quam iusto
          assumenda culpa. Sed, quasi nesciunt. Omnis minus, dolores aliquam
          libero harum quia accusantium explicabo aperiam culpa eius, doloremque
          dignissimos reiciendis illum magnam. Ea, aliquid fugiat architecto,
          animi cupiditate ex commodi et corporis incidunt cum pariatur natus,
          unde labore. Cupiditate, repellat tempora! Ad repellat, quod
          consequatur atque, iusto maiores exercitationem deleniti cum numquam
          iure quam impedit vitae consectetur asperiores Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aspernatur ipsa, soluta corporis
          aliquid quis odit id omnis vitae deserunt accusamus, a quaerat
          delectus perferendis dolore iste saepe officiis illo minima dolores?
          Amet laboriosam provident quos esse cum harum dicta quae. Deleniti
          aliquam iste tempora hic eveniet ex voluptatibus! Odio assumenda
          doloremque dolore temporibus similique, nulla repudiandae officia?
          Sed, nesciunt iste. veniam laborum quia nesciunt natus. Est qui
          facilis unde perspiciatis, exercitationem dolores ex sequi
          reprehenderit consequuntur!
        </div>
      </div>

      <GalleryAdvertising />

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10 p-4">
        <div className="text-[2rem] font-bold">Our Mission</div>
        <div className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eligendi ullam
          perferendis molestiae repudiandae rem quibusdam facilis illum rerum ea
          voluptates a minima repellendus, nostrum maxime quo quam iusto
          assumenda culpa. Sed, quasi nesciunt. Omnis minus, dolores aliquam
          libero harum quia accusantium explicabo aperiam culpa eius, doloremque
          dignissimos reiciendis illum magnam. Ea, aliquid fugiat architecto,
          animi cupiditate ex commodi et corporis incidunt cum pariatur natus,
          unde labore. Cupiditate, repellat tempora! Ad repellat, quod
          consequatur atque, iusto maiores exercitationem deleniti cum numquam
          iure quam impedit vitae consectetur asperiores Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aspernatur ipsa, soluta corporis
          aliquid quis odit id omnis vitae deserunt accusamus, a quaerat
          delectus perferendis dolore iste saepe officiis illo minima dolores?
          Amet laboriosam provident quos esse cum harum dicta quae. Deleniti
          aliquam iste tempora hic eveniet ex voluptatibus! Odio assumenda
          doloremque dolore temporibus similique, nulla repudiandae officia?
          Sed, nesciunt iste. veniam laborum quia nesciunt natus. Est qui
          facilis unde perspiciatis, exercitationem dolores ex sequi
          reprehenderit consequuntur!
        </div>
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="text-[2rem] font-bold">Moto</div>
        <div className="w-full grid grid-cols-6 grid-rows-2">
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full"></div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" />
          </div>
          <div className="w-full h-full"></div>
        </div>
        <div className=" text-justify p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ipsa, soluta corporis aliquid quis odit id omnis vitae deserunt
          accusamus, a quaerat delectus perferendis dolore iste saepe officiis
          illo minima dolores? Amet laboriosam provident quos esse cum harum
          dicta quae. Deleniti aliquam iste tempora hic eveniet ex voluptatibus!
          Odio assumenda doloremque dolore temporibus similique, nulla
          repudiandae officia? Sed, nesciunt iste. veniam laborum quia nesciunt
          natus. Est qui facilis unde perspiciatis, exercitationem dolores ex
          sequi reprehenderit consequuntur!
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-10">
        <div className="  relative text-black font-bold text-2xl font-['Inter'] ">
          Process(icons)
        </div>

        <div className="flex  p-[3%]  flex-justify-center items-center relative gap-8">
          <div className="w-full h-full flex  flex-col items-center relative">
            <Image className="relative rounded-[300px]" src={img1} alt="" />
            <div className="mt-[1rem] text-black text-2xl sm:text-xl relative  font-bold font-[Inter] ">
              Domain
            </div>
          </div>

          <div className="w-full h-full flex  flex-col items-center relative">
            <Image className="relative rounded-[300px]" src={img1} alt="" />
            <div className="mt-[1rem] text-black text-2xl relative sm:text-xl font-bold font-[Inter] ">
              Domain
            </div>
          </div>

          <div className="w-full h-full flex  flex-col items-center relative">
            <Image className="relative rounded-[300px]" src={img1} alt="" />
            <div className="mt-[1rem] text-black text-2xl relative sm:text-xl font-bold font-[Inter] ">
              Domain
            </div>
          </div>

          <div className="w-full h-full flex  flex-col items-center relative">
            <Image className="relative rounded-[300px]" src={img1} alt="" />
            <div className="mt-[1rem] text-black text-2xl relative  sm:text-xl font-bold font-[Inter] ">
              Domain
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col items-center justify-center">
        <div>Why Choose Paper Rabbit?</div>
        <div className="w-[74%] h-full flex items-center justify-center  gap-4">
          <div className=" w-[450px] h-[300px]   ">
            {/* // <Image className=" relative top-0 rounded-[20px]" src={services0} alt='' /> */}
            <div className=" w-full  flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">
                Lorem ipsum dolor sit amet.
              </div>
              <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                nisi!
              </div>
            </div>
            <Image
              className="w-[42px] h-[42px] right-4 bottom-4  backdrop-blur-[20px] rounded-full"
              src={add}
              alt=""
              onClick={popup}
            />
          </div>

          <div className=" w-[450px] h-[300px]   ">
            {/* // <Image className=" relative top-0 rounded-[20px]" src={services0} alt='' /> */}
            <div className=" w-full  flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">
                Lorem ipsum dolor sit amet.
              </div>
              <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                dolorum?
              </div>
            </div>
            <Image
              className="w-[42px] h-[42px] right-4 bottom-4  backdrop-blur-[20px] rounded-full"
              src={add}
              alt=""
              onClick={popup}
            />
          </div>

          <div className=" w-[450px] h-[300px]   ">
            {/* // <Image className=" relative top-0 rounded-[20px]" src={services0} alt='' /> */}
            <div className=" w-full  flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">
                Lorem ipsum dolor sit amet.
              </div>
              <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                optio!
              </div>
            </div>
            <Image
              className="w-[42px] h-[42px] right-4 bottom-4  backdrop-blur-[20px] rounded-full"
              src={add}
              alt=""
              onClick={popup}
            />
          </div>

          <div className=" w-[450px] h-[300px]   ">
            {/* // <Image className=" relative top-0 rounded-[20px]" src={services0} alt='' /> */}
            <div className=" w-full  flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-zinc-950 text-xs md:text-sm font-normal font-['Inter'] leading-none">
                Lorem ipsum dolor sit amet.
              </div>
              <div className=" text-zinc-950 text-base md:text-2xl font-bold font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, provident.
              </div>
            </div>
            <Image
              className="w-[42px] h-[42px] right-4 bottom-4  backdrop-blur-[20px] rounded-full"
              src={add}
              alt=""
              onClick={popup}
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="text-[2rem] font-bold">Our Affliciation</div>
        <div className="w-full grid grid-cols-6 grid-rows-1">
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
        </div>
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="text-[2rem] font-bold">Our Tech Partners</div>
        <div className="w-full grid grid-cols-6 grid-rows-1">
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
          <div className="w-full h-full">
            <Image src={aboutuslogo} alt="" className="rounded-full" />
            <div className=" text-center">lorem ipsum 22</div>
          </div>
        </div>
      </div>

      <div className="w-full h-full ">
        <Image src="" alt="" />
      </div>
    </div>
  );
}

export default AboutUsPage;
