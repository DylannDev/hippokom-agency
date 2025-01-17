import BlogCard from "@/components/Blog/BlogCard";
import { blogArticles } from "@/data";
import React from "react";

const BlogList = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-4">
        {blogArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
