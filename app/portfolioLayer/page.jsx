import React from "react";
import portfolioimg from "../../public/assets/bannerimgs.jpg";
import img1 from "../../public/assets/1.jpg";
import clientpic from "../../public/assets/client pic.jpg";
import sample from "../../public/assets/sample.jpg";
import sample1 from "../../public/assets/sample1.jpg";
import Port from "../../public/assets/port.jpg";
import BackBar from "@/components/back/BackBar";
import Image from "next/image";

function Portfoliolayer() {
  return (
    <div className="w-full  relative bg-neutral-100">
      <BackBar name={"Lounge"} />
      <Image
        className="w-full  sm:h-[430px] lg:h-[576px]  md:h-[560px]  relative"
        src={portfolioimg}
        alt=""
      ></Image>

      <div className="flex w-full h-full relative justify-center items-center ">
        <div className="  flex flex-col justify-center  relative items-center h-full md:w-full sm:w-full w-[75%] gap-12">
          <div className="flex sm:flex-row p-[5%] w-full gap-12 h-full  ">
            <div className="  w-[20%] h-[full]  flex flex-justify-center items-center relative">
              <div className=" w-full h-full flex-justify-col-1 items-center relative">
                <Image
                  className="relative rounded-[300px] "
                  src={img1}
                  alt=""
                />

                <div className=" text-black lg:text-2xl relative  font-bold font-[Inter] ">
                  Company Name
                </div>
                <div className=" text-black lg:text-2xl relative  font-bold font-[Inter] ">
                  Domain
                </div>
              </div>
            </div>

            <div className="flex sm:w-[60%] justify-center items-center relative">
              <div className="w-full sm:hidden relative  mt-[2rem] text-black flex lg:flex-justify-center items-center lg:text-2xl  text-justify font-bold font-[Inter]">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis undemns omnis undemns Perspiciatis unde omnis
                perspiciatis unde omnis perspiciatis unde omnis undemns omnis
                undemns Perspiciatis unde omnis perspiciatis unde omnis
                perspiciatis unde omnis undemns omnis undemns
              </div>

              <div className="w-full lg:hidden mac:hidden md:hidden relative  mt-[2rem] text-black flex flex-justify-center items-center  text-justify font-bold font-[Inter]">
                Perspiciatis unde omnis perspiciatis unde omnis perspiciatis
                unde omnis undemns omnis undemns
              </div>
            </div>
          </div>

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

          <div className="w-full h-[full] p-[1%] flex flex-row-reverse sm:flex-col relative ">
            <Image
              className="lg:w-[21rem] sm:w-[21rem] h-[22rem] sm:ml-[5%] md:h-[45rem] md:w-[21rem] relative rounded-[20px]"
              src={Port}
              alt=""
            />

            <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="  relative text-black  font-bold  lg:text-[32px] font-['Inter'] ">
            Packages
          </div>

          <div className="w-full h-[full] p-[1rem] text-justify relative">
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              adipiscing{" "}
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam. Sed nisi. Nulla quis sem at nibh{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              elementum
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
              sed{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              augue
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              className{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              aptent
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur sodales ligula in libero. Sed
              dignissim lacinia nunc. Curabitur tortor.{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              Pellentesque
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              cursus
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              elementum imperdiet
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              . Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
              semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              className aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              {" "}
              himenaeos
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              . Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
            </span>
            <span className="text-black text-base font-bold font-['Inter'] leading-normal">
              Curabitur
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
              tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at
              dolor. Maecenas mattis.
            </span>
            <span className="text-black text-sm font-normal font-['Inter'] leading-normal">
              {" "}
            </span>
          </div>

          <div className="w-full h-[full] p-[1%] flex flex-row sm:flex-col relative ">
            <Image
              className="lg:w-[21rem] sm:w-[21rem] h-[22rem]  md:h-[45rem] md:w-[21rem] sm:ml-[5%]  relative rounded-[20px]"
              src={Port}
              alt=""
            />

            <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="w-full h-[full] p-[1%] flex flex-row-reverse sm:flex-col relative ">
            <Image
              className="lg:w-[21rem] sm:w-[21rem] h-[22rem] sm:ml-[5%] md:h-[45rem] md:w-[21rem]  relative rounded-[20px]"
              src={Port}
              alt=""
            />

            <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. className aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. <br />
              Curabitur tortor. <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="  relative text-black  font-bold  lg:text-[32px] font-['Inter'] ">
            Mockups
          </div>

          <div className="w-full lg:h-[7%] h-[full] p-[4rem] flex gap-[2rem] lg:flex-row flex-col relative">
            <Image
              className="lg:w-[20%] w-[full]  h-[40%] lg:mt-[10rem]  relative"
              src={sample}
              alt=""
            />

            <Image
              className="w-[50%]  h-[40%] lg:mt-[10rem]  relative"
              src={sample}
              alt=""
            />

            <Image
              className="w-[20%]  h-[40%] lg:mt-[20.5rem] relative"
              src={sample1}
              alt=""
            />

            <Image
              className="w-[10%] h-[40%] lg:mt-[27.5rem] relative"
              src={sample1}
              alt=""
            />
          </div>

          <div className="  relative text-black font-bold  lg:text-[32px] font-['Inter'] ">
            Client Testmony
          </div>

          <div className="w-full  h-full relative flex  flex-row sm:flex-col flex-justify-center items-center mt-[3rem] gap-[1rem] ">
            <div className="grid grid-cols-2 grid-rows-1 gap-1 h-full w-full">
              <Image
                className=" p-[2%] md:p-[0]   sm:w-full sm:h-full   relative rounded-[20px]"
                src={clientpic}
                alt=""
              />

              <div className="w-[100%] h-[100%] relative bg-gray-50 bg-opacity-70 flex flex-col items-center justify-start  rounded-[20px]  backdrop-blur-[20px] gap-4 p-4">
                <div className="relative w-full  flex flex-row">
                  <div className="text-black text-xs font-bold font-[Inter]">
                    Client Name -{" "}
                  </div>{" "}
                  <div className="text-black text-xs font-normal font-[Inter]">
                    {" "}
                    Lorem ipsum
                  </div>
                </div>

                <div className="relative w-full flex flex-row">
                  <div className="text-black text-xs font-bold font-[Inter]">
                    Client Name -{" "}
                  </div>{" "}
                  <div className="text-black text-xs font-normal font-[Inter]">
                    {" "}
                    Lorem ipsum
                  </div>
                </div>

                <div className="w-full  relative  text-black text-sm font-normal text-justify  font-['Inter'] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta.t nibh elementum imperdiet. Duis sagittis
                  ipsum. Praesent
                </div>
              </div>
            </div>

            <div className="w-full h-full bg-gray-50 bg-opacity-70  md:hidden md:ml-[35%] rounded-[20px] flex  backdrop-blur-[20px] p-[2%] relative ">
              <div className="grid grid-rows-3 lg:grid-rows-4 grid-flow-col p-[10%] gap-[5%] w-full h-full mr-[7rem] lg:gap-[10%]  relative ">
                <div className=" relative text-black text-[32px] font-bold rotate-[-22.82deg] ">
                  lorum1
                </div>
                <div className="  relative text-black text-[32px] font-bold sm:hidden origin-top-left rotate-[-1.08deg]  ">
                  lorum2
                </div>
                <div className=" relative text-black text-[32px] rotate-[24.86deg] sm:hidden font-bold  ">
                  lorum3
                </div>
                <div className=" relative text-black text-[32px] rotate-[-1.08deg]  font-bold  ">
                  lorum4
                </div>
                <div className=" relative text-black text-[32px]  sm:hidden rotate-[-1.08deg] font-bold  ">
                  lorum5
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg] font-bold">
                  lorum6
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg]  font-bold ">
                  lorum7
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg]  font-bold ">
                  lorum8
                </div>

                <div className=" relative text-black text-[32px]  rotate-[4.60deg] font-bold ">
                  lorum10
                </div>
                <div className=" relative text-black text-[32px] rotate-[18.96deg] font-bold ">
                  lorum11
                </div>
                <div className=" relative text-black text-[32px] t rotate-[24.86deg] font-bold  ">
                  lorum12
                </div>
                <div className=" relative text-black text-[32px] font-bold  ">
                  lorum13
                </div>
              </div>
            </div>
          </div>

          <div className="p-[5%] w-full h-full relative mac:hidden">
            <div className="w-full bg-gray-50 bg-opacity-70 lg:hidden sm:hidden mt-[5%] rounded-[20px] flex flex-justify-center items-center backdrop-blur-[20px] p-[2%] relative">
              <div className="grid grid-rows-3 grid-flow-col p-[10%] gap-[5%] w-full items-center mac:gap-[10%] relative ">
                <div className=" relative text-black text-[32px] font-bold rotate-[-22.82deg] ">
                  lorum1
                </div>
                <div className="  relative text-black text-[32px] font-bold sm:hidden origin-top-left rotate-[-1.08deg]  ">
                  lorum2
                </div>
                <div className=" relative text-black text-[32px] rotate-[24.86deg] sm:hidden font-bold  ">
                  lorum3
                </div>
                <div className=" relative text-black text-[32px] rotate-[-1.08deg]  font-bold  ">
                  lorum4
                </div>
                <div className=" relative text-black text-[32px]  sm:hidden rotate-[-1.08deg] font-bold  ">
                  lorum5
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg] font-bold">
                  lorum6
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg]  font-bold ">
                  lorum7
                </div>
                <div className=" relative text-black text-[32px] sm:hidden rotate-[-1.08deg]  font-bold ">
                  lorum8
                </div>

                <div className=" relative text-black text-[32px]  rotate-[4.60deg] font-bold ">
                  lorum10
                </div>
                <div className=" relative text-black text-[32px] rotate-[18.96deg] font-bold ">
                  lorum11
                </div>
                <div className=" relative text-black text-[32px] t rotate-[24.86deg] font-bold  ">
                  lorum12
                </div>
                <div className=" relative text-black text-[32px] font-bold  ">
                  lorum13
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliolayer;
