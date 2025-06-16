import React from "react";
import { SimilarPosts } from "../Blog/similar-posts";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="relative bg-transparent py-20 sm:py-32 my-20 px-5 sm:px-6 md:px-8 rounded-5xl">
      <div className="w-full h-full aspect-square absolute inset-0 overflow-hidden rounded-5xl -z-10">
        <Image
          src="/bg-form.svg"
          alt="hippokom hero background illustration"
          fill
          sizes="100vw"
          className="object-cover object-bottom rounded-5xl"
        />
      </div>
      <SimilarPosts title="Consultez nos derniers articles de blog" />
    </section>
  );
};

export default BlogSection;
