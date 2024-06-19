"use client";
import React, { useState } from "react";
import banner2 from "../../public/assets/navbar_layers/Hutch_hero1.jpg";
import bannerimg from "../../public/assets/navbar_layers/Hatch_hero.jpg";
import Plus from "../../public/assets/Plus.jpg";
import BackBarId from "@/components/back/BackBarId";
import Image from "next/image";

function Hutchlayer() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [id, setId] = useState(0);

  const handleDropdownToggle = (id) => {
    setDropdownVisible(!dropdownVisible);
    setId(id);
  };
  return (
    <div className="w-full  relative bg-neutral-100 flex flex-col items-center justify-center">
      <BackBarId
        name={"Title"}
        one={"overview"}
        two={"why"}
        three={"specification"}
        four={"package"}
      />

      <Image
        className="w-full  h-[500px] relative"
        src={bannerimg}
        alt=""
      ></Image>

      <div className="flex justify-center items-center ">
        <div className="  flex flex-col justify-center items-center sm:w-[100%] sm:p-[1rem]  w-[75%] md:w-full p-[5%] gap-8 ">
          <div className="w-full relative flex flex-col justify-center items-center">
            <div className="w-full h-[6rem] relative content-center">
              <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
                Advertising
              </div>
              <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
                Title
              </div>
            </div>
          </div>

          <div
            className=" w-[full]   text-justify relative flex flex-col items-center justify-center gap-4 "
            id="overview"
          >
            <div className=" flex justify-center items-center  text-xl       relative text-black text-[32px] font-bold font-['Inter']">
              Bio
            </div>
            <div className="    text-xs leading-[18px]  w-full   relative  text-black  font-normal font-['Inter'] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
              sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna
              luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. <br />
            </div>
          </div>

          <div className=" w-[full]   text-justify  relative flex flex-col items-center justify-center gap-4">
            <div className=" flex justify-center items-center  text-xl       relative text-black text-[32px] font-bold font-['Inter']">
              What is Branding
            </div>
            <div className="    text-xs leading-[18px]  w-full   relative  text-black  font-normal font-['Inter'] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
              sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna
              luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. <br />
            </div>
          </div>

          <div className=" w-[full]    text-justify   relative flex flex-col items-center justify-center gap-4">
            <div className=" flex justify-center items-center  text-xl       relative text-black text-[32px] font-bold font-['Inter'] ">
              Why is it important
            </div>
            <div className="    text-xs leading-[18px]  w-full   relative  text-black  font-normal font-['Inter'] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
              sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna
              luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. <br />
            </div>
          </div>

          <div className=" w-[full]      text-justify relative flex flex-col items-center justify-center gap-4">
            <div className=" flex justify-center items-center  text-xl       relative text-black text-[32px] font-bold font-['Inter'] ">
              Why is it important
            </div>
            <div className="    text-xs leading-[18px]  w-full   relative  text-black  font-normal font-['Inter'] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
              sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna
              luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
              non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
              ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
              potenti. <br />
            </div>
          </div>

          <Image
            className="w-[full ]  lg:h-[500px]  lg:top-[0rem] relative "
            src={banner2}
            alt=""
          />

          <div className="  relative text-black   font-bold  lg:text-[32px] font-['Inter'] ">
            Packages
          </div>

          <div className="flex w-full h-full sm:flex-col   mac:grid mac:grid-cols-3  md:grid md:grid-cols-2 flex-row justify-center items-center gap-12">
            <div className="w-full h-full flex-item-center bg-gray-50 bg-opacity-20 rounded-[20px] border border-black backdrop-blur-[20px] relative p-4">
              <div className="  relative text-black   font-bold flex justify-center items-center lg:text-[32px] font-['Inter'] ">
                Packages
              </div>

              <div className="mt-[10%] relative">
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <div className="flex  justify-between items-center relative mt-16">
                  <div className="flex text-black text-4xl font-bold font-[Inter]">
                    $1233
                  </div>
                  <div className="w-[25%] h-[7%] relative bg-zinc-950 rounded-[10px]   text-white flex flex-col items-center justify-center text-sm font-bold font-['Inter'] leading-[30px]">
                    Enquire
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex-item-center bg-gray-50 bg-opacity-20 rounded-[20px] border border-black backdrop-blur-[20px] relative p-4">
              <div className="  relative text-black   font-bold flex justify-center items-center lg:text-[32px] font-['Inter'] ">
                Intermadiate
              </div>
              <div className="mt-[10%] relative">
                <ul className=" relative text-black  flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <div className="flex  justify-between items-center relative mt-16">
                  <div className="flex text-black text-4xl font-bold font-[Inter]">
                    $1233
                  </div>
                  <div className="w-[25%] h-[7%] relative bg-zinc-950 rounded-[10px]   text-white flex flex-col items-center justify-center text-sm font-bold font-['Inter'] leading-[30px]">
                    Enquire
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full h-full flex-item-center bg-gray-50 bg-opacity-20 md:ml-[15rem] rounded-[20px] border border-black backdrop-blur-[20px] relative p-4">
              <div className="  relative text-black   font-bold flex justify-center items-center lg:text-[32px] font-['Inter'] ">
                Advance
              </div>
              <div className="mt-[10%] relative">
                <ul className=" relative   flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>
                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <ul className=" relative text-black flex justify-center items-center  ">
                  <li>
                    Perspiciatis unde omnis unde omnis tis unde omnis unde
                  </li>
                </ul>

                <div className="flex  justify-between items-center relative mt-16">
                  <div className="flex text-black text-4xl font-bold font-[Inter]">
                    $1233
                  </div>
                  <div className="w-[25%] h-[7%] relative bg-zinc-950 rounded-[10px]   text-white flex flex-col items-center justify-center text-sm font-bold font-['Inter'] leading-[30px]">
                    Enquire
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[65%] mac:w-full md:w-full relative mt-[10%] p-2 h-[full] ">
            <div className=" flex justify-center items-center  relative text-black lg:text-[32px] font-bold font-['Inter'] leading-loose">
              Faq
            </div>

            <div className="w-full sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(1)}
                />{" "}
              </div>

              {dropdownVisible && id === 1 && (
                <div className="w-[85%] text-justify flex flex-col  justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex  justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem]  bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(2)}
                />{" "}
              </div>

              {dropdownVisible && id === 2 && (
                <div className="flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem] p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(3)}
                />{" "}
              </div>

              {dropdownVisible && id === 3 && (
                <div className=" flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(4)}
                />{" "}
              </div>

              {dropdownVisible && id === 4 && (
                <div className=" flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full  relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(5)}
                />{" "}
              </div>

              {dropdownVisible && id === 5 && (
                <div className=" flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(6)}
                />{" "}
              </div>

              {dropdownVisible && id === 6 && (
                <div className=" flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(7)}
                />{" "}
              </div>

              {dropdownVisible && id === 7 && (
                <div className=" flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center gap-[5%] w-full  items-center relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(8)}
                />{" "}
              </div>

              {dropdownVisible && id === 8 && (
                <div className="flex flex-col  w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>

            <div className="w-full  sm:w-full h-full mt-[1rem]  p-[1rem] bg-white rounded-[10px] flex flex-col justify-center gap-[5rem]     items-center  ">
              <div className="flex flex-row justify-center items-center gap-[5%] w-full relative">
                <div className="lg:flex h-full lg:justify-center  lg:items-center  text-black lg:text-base text-xs font-normal font-['Inter']">
                  Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                  und perspiciatis unde omnis perspiciatis und?
                </div>{" "}
                <Image
                  className=" "
                  src={Plus}
                  alt=""
                  onClick={() => handleDropdownToggle(9)}
                />{" "}
              </div>

              {dropdownVisible && id === 9 && (
                <div className="flex flex-col w-[85%] text-justify justify-center items-center overflow-hidden transition-all duration-50 relative">
                  <div className="bg-white rounded-[10px] flex justify-col w-full  items-center overflow-hidden ">
                    {}
                    Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                    und perspiciatis unde omnis perspiciatis und? Perspiciatis
                    unde omnis perspiciatis unde omnis perspiciatis und
                    perspiciatis unde omnis perspiciatis und? Perspiciatis unde
                    omnis perspiciatis unde omnis perspiciatis und perspiciatis
                    unde omnis perspiciatis und? Perspiciatis unde omnis
                    perspiciatis unde omnis perspiciatis und perspiciatis unde
                    omnis perspiciatis und? Perspiciatis unde omnis perspiciatis
                    unde omnis perspiciatis und perspiciatis unde omnis
                    perspiciatis und? Perspiciatis unde omnis perspiciatis unde
                    omnis perspiciatis und perspiciatis unde omnis perspiciatis
                    und? Perspiciatis unde omnis perspiciatis unde omnis
                    perspiciatis und perspiciatis unde omnis perspiciatis und?
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hutchlayer;
