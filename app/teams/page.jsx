import CommonRows from "@/components/articles_teams_content/CommonRows";
import React from "react";

function TeamsPage() {
  return (
    <div className="w-screen h-full flex flex-col mt-20">
      <div className="w-screen h-full flex flex-col gap-4 justify-center items-center">
        <CommonRows />
        <CommonRows />
      </div>
    </div>
  );
}

export default TeamsPage;
