"use client";

import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  className?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
  className,
}) => {
  return (
    <article className={` w-full lg:w-1/2 m-2 p-4 ${className}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{`Par ${author} | ${date}`}</p>
      <div className="prose prose-lg">{content}</div>
    </article>
  );
};

export default BlogPost;
