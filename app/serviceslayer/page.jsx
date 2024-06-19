import React from "react";
import bannerimg from "../../public/assets/navbar_layers/Hatch_hero.jpg";

import BackBarId from "@/components/back/BackBarId";
import Image from "next/image";
import Services from "@/components/Services";

function Servicelayer() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative bg-neutral-100">
      <BackBarId
        name={"Service"}
        one={"overview"}
        two={"why"}
        three={"specification"}
        four={"package"}
      />

      <Image
        className="w-full  sm:h-[430px] lg:h-[576px]  md:h-[560px]   "
        src={bannerimg}
        alt=""
      ></Image>

      <div className="flex w-full justify-center lg:mt-[3rem] items-center ">
        <div className=" flex flex-col justify-center items-center w-[75%] sm:w-full p-[5%]  gap-10">
          <div className="w-full relative flex flex-col justify-center items-center">
            <div className="w-full h-[6rem] relative content-center">
              <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
                Advertising
              </div>
              <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
                Service
              </div>
            </div>
          </div>

          <div className=" w-full   text-justify relative flex flex-col items-center justify-center gap-4">
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

          <div className=" w-full  relative flex flex-col items-center justify-center gap-4">
            <div className=" flex justify-center items-center  text-xl       relative text-black text-[32px] font-bold font-['Inter'] ">
              Why is it important
            </div>
            <div className="    text-xs leading-[18px]  w-full  text-justify relative  text-black  font-normal font-['Inter'] ">
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

          <div className=" w-full    text-justify   relative flex flex-col items-center justify-center gap-4">
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

          <div className=" w-full    text-justify  relative flex flex-col items-center justify-center gap-4">
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

          <Services />
        </div>
      </div>
    </div>
  );
}

export default Servicelayer;
