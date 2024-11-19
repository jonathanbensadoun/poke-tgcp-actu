import React from "react";
import BlogPost from "@/components/BlogPost";
import { PokeballLeft } from "@/components/pokeball";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-2 ">
      <Header />

      <PokeballLeft />
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
