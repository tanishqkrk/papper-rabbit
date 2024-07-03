"use client";
import GlobaltractionCard from "./GlobalTractionCard";
import data from "./data.json";

function GlobalTraction() {
  const [projects, startups, countries, years] = data.counts;

  return (
    <div className="w-full dark:bg-black bg-white lg:mx-auto flex flex-col justify-between items-center relative mt-8 pt-10">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Traction
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Global
          </div>
        </div>
      </div>

      <div className="w-full h-full place-items-center grid grid-cols-2 grid-rows-2 lg:flex lg:justify-center lg:items-center mac:grid mac:grid-cols-4 mac:grid-rows-1 mac:w-[74%] relative mt-10 lg:mt-20">
        <div className="relative flex flex-col items-center justify-center lg:w-[159px] lg:h-[155px] lg:mx-[4rem] mac:mx-[1rem]">
          <div className="text-center text-red-200 text-xl lg:text-[60px] mac:text-[45px] md:text-[45px] sm:text-[35px] font-normal font-['Revelstoke']">
            Projects
          </div>
          <div className="text-center">
            <GlobaltractionCard
              data={{
                id: projects.id,
                number: parseInt(projects.number),
                duration: parseInt(projects.duration),
              }}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[131px] h-[155px] lg:mx-[4rem] mac:mx-[1rem]">
          <div className="text-center text-emerald-200 text-xl lg:text-[60px] mac:text-[45px] font-normal md:text-[45px] sm:text-[35px] font-['Revelstoke']">
            StartUps
          </div>
          <div className="text-center">
            <GlobaltractionCard
              data={{
                id: startups.id,
                number: parseInt(startups.number),
                duration: parseInt(startups.duration),
              }}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[154px] h-[155px] lg:mx-[4rem] mac:mx-[1rem]">
          <div className="text-center text-sky-200 text-xl lg:text-[60px] mac:text-[45px] font-normal md:text-[45px] sm:text-[35px] font-['Revelstoke']">
            Countries
          </div>
          <div className="text-center">
            <GlobaltractionCard
              data={{
                id: countries.id,
                number: parseInt(countries.number),
                duration: parseInt(countries.duration),
              }}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[120px] h-[155px] lg:mx-[4rem] mac:mx-[1rem]">
          <div className="text-center text-amber-200 text-xl lg:text-[60px] mac:text-[45px] font-normal md:text-[45px] sm:text-[35px] font-['Revelstoke']">
            Years
          </div>
          <div className="text-center">
            <GlobaltractionCard
              data={{
                id: years.id,
                number: parseInt(years.number),
                duration: parseInt(years.duration),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalTraction;
