import React from "react";
import blog from "../../public/assets/blog.jpg";
import arrowleft from "../../public/assets/bannerimgs/left arrow.svg";
import arrowright from "../../public/assets/bannerimgs/right arrow.png";
import article1 from "../../public/assets/articalimgs/artical1.jpg";
import article2 from "../../public/assets/articalimgs/artical2.jpg";
import article4 from "../../public/assets/articalimgs/artical4.jpg";
import BackBar from "@/components/back/BackBar";
import Image from "next/image";

function Article_inner() {
  return (
    <div className="w-full relative bg-neutral-100">
      <BackBar name={"article_inner"} />
      <Image
        className="w-full  lg:w-full h-[400px] lg:h-[532px] sm:h-[430px] md:h-[500] left-0 top-0 absolute"
        src={blog}
        alt=""
      ></Image>

      <button>
        <Image
          className="absolute justify-center z-20 items-center inline-flex left-[120px] sm:left-[10px] top-[1%] lg:top-[13%] mac:top-[9%] md:top-[9%] sm:mt-[20rem] w-6 h-5  lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
          src={arrowleft}
          alt=""
        />
      </button>
      <button>
        <Image
          className=" absolute justify-center z-20 items-center inline-flex right-[120px] sm:right-[10px]  top-[1%] lg:top-[13%] mac:top-[9%] w-6 h-5  sm:mt-[20rem] md:top-[9%] lg:w-10 lg:h-10  mac:w-10 mac:h-10 "
          src={arrowright}
          alt=""
        />
      </button>

      <div className="w-full relative flex flex-col justify-center sm:mt-[10rem] mt-[10rem] items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-[-3rem] top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Title
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center ">
        <div className="  flex flex-col justify-center items-center mt-[10rem] w-[75%] md:w-full sm:w-full lg:mt-[20rem]  ">
          <div className="flex  flex-row lg:gap-[9.5rem] gap-[3rem] sm:mt-[10rem] h-[full] relative">
            <div className="flex flex-row">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Author -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem{" "}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-black text-xs  font-bold font-['Inter'] ">
                Category -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Tag -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>

            <div className="flex flex-row sm:hidden ">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Tag -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>

            <div className="flex sm:hidden flex-row">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Tag -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>
          </div>

          <div className="flex lg:hidden mac:hidden md:mt-[5%] lg:flex-row md:hidden  sm:mt-[2rem] flex-col-3 gap-[5rem] lg:gap-[9.5rem] tm-[5rem]  h-[1%] relative">
            <div className="flex flex-row">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Tag -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-black text-xs font-bold font-['Inter'] ">
                Tag -{" "}
              </div>
              <div className="text-black text-xs font-normal font-['Inter'] ">
                Lorem
              </div>
            </div>
          </div>

          <div className="w-full h-full mt-[10rem] mac:mt-[5rem] md:mt-[8rem] sm:mt-[5rem] p-[1rem] text-justify text-black text-sm font-normal font-['Inter'] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            <br />
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
            <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
            metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
            augue eget diam. <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.{" "}
            <br />
            Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
            tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
            tristique, dignissim in, ultrices sit amet, augue. Proin sodales
            libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
            lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
            accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
            blandit orci. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
            <br />
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.{" "}
            <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
            metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
            augue eget diam. <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.{" "}
            <br />
            Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
            tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
            tristique, dignissim in, ultrices sit amet, augue. Proin sodales
            libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
            lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
            accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
            blandit orci. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
            <br />
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.{" "}
            <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
            metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
            augue eget diam. <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.{" "}
            <br />
            Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
            tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
            tristique, dignissim in, ultrices sit amet, augue. Proin sodales
            libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
            lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
            accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
            blandit orci. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
            <br />
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.{" "}
            <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
            metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
            augue eget diam. <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.{" "}
            <br />
            Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
            tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
            tristique, dignissim in, ultrices sit amet, augue. Proin sodales
            libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
            lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
            accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
            blandit orci. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{" "}
            <br />
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.{" "}
            <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
            tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante
            quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
            feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
            quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
            metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
            augue eget diam.
            <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus.{" "}
          </div>

          <div className="flex p-[1rem] lg:flex-row gap-[2rem] w-full mt-[5rem] h-[1%] relative">
            <div className="  text-black text-xs font-bold font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs font-bold font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs font-bold font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden  font-bold font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden font-bold font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden font-bold font-['Inter'] md:hidden ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden font-bold md:hidden font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden font-bold md:hidden font-['Inter'] ">
              #loremipsum
            </div>
            <div className="  text-black text-xs sm:hidden md:hidden mac:hidden font-bold font-['Inter']">
              #loremipsum
            </div>
          </div>

          <div className="flex p-[3rem] lg:hidden mac:hidden lg:flex-row gap-[2.5rem] w-full  h-[1%] relative">
            <div className="  text-black text-xs font-bold font-['Inter'] leading-3">
              #loremipsum
            </div>
            <div className="  text-black text-xs font-bold font-['Inter'] leading-3">
              #loremipsum
            </div>
            <div className="  text-black text-xs font-bold font-['Inter'] leading-3">
              #loremipsum
            </div>
          </div>

          <div className="w-[240px] h-[40px] relative bg-zinc-950 rounded-[10px] text-white flex flex-col items-center justify-center mt-[10rem] sm:mt-[5rem] text-sm font-bold font-['Inter'] ">
            Explore
          </div>
        </div>{" "}
      </div>

      <div className=" flex justify-center items-center mt-[5rem] relative text-black lg:text-[32px] font-bold font-['Inter'] leading-loose">
        Similar Blogs
      </div>

      <div className="flex  justify-center items-center ">
        <div className="w-full h-full flex flex-row sm:flex sm:flex-col md:gap-[2%] p-[2%] gap-[5%] ">
          <div className="w-full h-full relative mt-[3rem] group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={article1}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>

          <div className="w-full h-full relative mt-[3rem] group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={article1}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>

          <div className="w-full h-full relative mt-[3rem] group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={article1}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-amber-200 rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-amber-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-amber-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>

          <div className="w-full h-full relative mt-[3rem]  group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={article2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-red-200 rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article_inner;
