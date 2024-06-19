import BackBar from "@/components/back/BackBar";
import BlogPageCards from "@/components/blogs/BlogPageCards";
import React from "react";

function BlogPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center place-content mt-28">
      <BackBar name={"Blogs"} />
      <div className="lg:w-[74%] gap-8 sm:gap-2 items-center justify-center mac:max-w-[80%] w-full h-full grid lg:grid-cols-4 lg:grid-rows-2 mac:grid-cols-4 mac:grid-rows-2  grid-rows-4 grid-cols-2 mt-10">
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
        <BlogPageCards />
      </div>
    </div>
  );
}

export default BlogPage;
