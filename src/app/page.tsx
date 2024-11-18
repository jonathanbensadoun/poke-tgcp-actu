import React from "react";
import BlogPost from "@/components/BlogPost";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <BlogPost
        className="bg-red-400 rounded-lg m-2"
        title="Hello, World!"
        content="Welcome to my blog!"
        author="John Doe"
        date="2022-01-01"
      />
      <BlogPost
        className="bg-gray-400 rounded-lg   m-2"
        title="Hello, World!"
        content="Welcome to my blog!"
        author="John Doe"
        date="2022-01-01"
      />
    </div>
  );
}
