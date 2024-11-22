"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  className?: string;
  ImgPartie1: string[];
  ImgPartie2: string[];
  ImgPartie3: string[];
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  subtitle3: string;
  content3: string;
  conclusion: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
  className,
  ImgPartie1,
  ImgPartie2,
  ImgPartie3,
  subtitle1,
  content1,
  subtitle2,
  content2,
  subtitle3,
  content3,
  conclusion,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`w-full lg:w-1/2 m-2 p-4 ${className}`}>
      <h3 className="text-2xl lg:text-3xl font-bold mb-2 my-4">{title}</h3>
      <p className="text-gray-500 mb-4 my-4">{`Par ${author} | ${date}`}</p>
      <div className="prose prose-lg my-4">{content}</div>
      <h4 className="text-xl font-semibold mt-4 text-center my-4 lg:text-2xl ">
        {subtitle1}
      </h4>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
        {ImgPartie1.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`image illustrant la partie 1 de l'article `}
            width={100}
            height={400}
            style={{ width: "auto", height: "auto" }}
            className="rounded-lg"
          />
        ))}
      </div>
      <div className="prose prose-lg my-4">{content1}</div>
      {isExpanded && (
        <>
          <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
            {subtitle2}
          </h4>
          <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
            {ImgPartie2.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`image illustrant la partie 2 de l'article `}
                width={150}
                height={400}
                className="rounded-lg"
              />
            ))}
          </div>
          <div className="prose prose-lg my-4">{content2}</div>
          <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
            {subtitle3}
          </h4>
          <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
            {ImgPartie3.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`image illustrant la partie 3 de l'article `}
                width={500}
                height={400}
                className="rounded-lg"
              />
            ))}
          </div>
          <div className="prose prose-lg my-4">{content3}</div>
          <div className="prose prose-lg mt-4 my-4">{conclusion}</div>
        </>
      )}
      <div className="flex justify-center items-center ">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full bg-[#251636] hover:bg-[#382155]  hover:text-[#FFCB05]  py-6 px-12 text-lg shadow-md"
        >
          {isExpanded ? "Voir moins" : "Voir plus"}
        </Button>
      </div>
    </article>
  );
};

export default BlogPost;
