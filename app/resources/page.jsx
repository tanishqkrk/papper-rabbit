import React from "react";
import ResourcesCard from "@/components/resources/ResourcesCard";
import BackBar from "@/components/back/BackBar";

function ResourcePage() {
  return (
    <div className="flex flex-col items-start justify-center">
      <BackBar name={"Resources"} />
      <div className="mx-auto grid lg:grid-cols-4 lg:grid-rows-none mac:grid-cols-4 mac:grid-rows-none gap-2 w-[76%] md:w-full md:grid-cols-4 md:grid-rows-none  grid-cols-1 grid-rows-none p-4 mt-24">
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
        <ResourcesCard />
      </div>
    </div>
  );
}

export default ResourcePage;
