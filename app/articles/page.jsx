import CommonRows from "@/components/articles_teams_content/CommonRows";
import BackBar from "@/components/back/BackBar";
import React from "react";

function ArticlesPage() {
  return (
    <div className="flex flex-col relative mt-[52px]">
      <BackBar name="Articles" />
      <div className="w-[100%] h-full flex flex-col mt-20">
        <div className="w-[100%] h-full flex flex-col gap-4 justify-center items-center">
          <CommonRows />
          <CommonRows />
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
