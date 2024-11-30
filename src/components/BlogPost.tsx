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
  ImgPartie1?: string[];
  ImgPartie2?: string[];
  ImgPartie3?: string[];
  ImgPartie4?: string[];
  ImgPartie5?: string[];
  subtitle1?: string;
  content1?: string;
  subtitle2?: string;
  content2?: string;
  subtitle3?: string;
  content3?: string;
  subtitle4?: string;
  content4?: string;
  subtitle5?: string;
  content5?: string;
  conclusion?: string;
  type?: number;
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
  ImgPartie4,
  ImgPartie5,
  content1,
  content2,
  content3,
  content4,
  content5,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  conclusion,
  type = 1,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isGif = (src: string) => src.endsWith(".gif");
  return (
    <>
      {type === 1 && (
        <article className={`w-full lg:w-1/2 m-2 p-4 ${className}`}>
          <h3 className="text-2xl lg:text-3xl font-bold </article>mb-2 my-4">
            {title}
          </h3>
          <div className="flex flex-row items-center gap-2">
            <Image
              quality={50}
              src={`/images/Avatar/${author}.png`}
              alt={`Avatar de l'auteur ${author} pour l'article ${title}`}
              width={50}
              height={50}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
              className="rounded-full"
            />
            <div className="text-gray-500 mb-4 my-4 text-center">
              {`Par ${author} | ${new Date(date).toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
            </div>
          </div>
          <div className="prose prose-lg my-4">{content}</div>

          {isExpanded && (
            <>
              {subtitle1 && (
                <h4 className="text-xl font-semibold mt-4 text-center my-4 lg:text-2xl ">
                  {subtitle1}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4 ">
                {ImgPartie1 &&
                  ImgPartie1.length > 0 &&
                  ImgPartie1.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 1 de l'article `}
                      width={100}
                      height={300}
                      // style={{
                      //   width: ImgPartie1.length > 1 ? "auto" : "250px",
                      //   height: "auto",
                      // }}
                      className={`rounded-lg ${
                        ImgPartie1.length > 1 ? "w-auto" : "w-[250px]"
                      } h-auto `}
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content1 && (
                <div className="prose prose-lg my-4">{content1}</div>
              )}
              {subtitle2 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle2}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie2 &&
                  ImgPartie2.length > 0 &&
                  ImgPartie2.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 2 de l'article `}
                      width={ImgPartie2.length > 1 ? 100 : 300}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content2 && (
                <div className="prose prose-lg my-4">{content2}</div>
              )}

              {subtitle3 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle3}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie3 &&
                  ImgPartie3.length > 0 &&
                  ImgPartie3.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 3 de l'article `}
                      width={ImgPartie3.length > 1 ? 100 : 300}
                      height={200}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content3 && (
                <div className="prose prose-lg my-4">{content3}</div>
              )}
              {subtitle4 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle4}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie4 &&
                  ImgPartie4.length > 0 &&
                  ImgPartie4.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 4 de l'article `}
                      width={100}
                      height={300}
                      // style={{
                      //   width: ImgPartie1.length > 1 ? "auto" : "250px",
                      //   height: "auto",
                      // }}
                      className={`rounded-lg ${
                        ImgPartie4.length > 1 ? "w-auto" : "w-[250px]"
                      } h-auto `}
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content4 && (
                <div className="prose prose-lg my-4">{content4}</div>
              )}
              {subtitle5 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle5}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie5 &&
                  ImgPartie5.length > 0 &&
                  ImgPartie5.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 5 de l'article `}
                      width={500}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
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
      )}
      {type === 2 && (
        <article className={`w-full lg:w-1/2 m-2 p-4 ${className}`}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 my-4">{title}</h3>
          <div className="flex flex-row items-center gap-2">
            <Image
              quality={50}
              src={`/images/Avatar/${author}.png`}
              alt={`Avatar de l'auteur ${author} pour l'article ${title}`}
              width={50}
              height={50}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
              className="rounded-full"
            />
            <div className="text-gray-500 mb-4 my-4 text-center">
              {" "}
              {`Par ${author} | ${new Date(date).toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
            </div>
          </div>
          <div className="prose prose-lg my-4">{content}</div>

          {isExpanded && (
            <>
              {subtitle1 && (
                <h4 className="text-xl font-semibold mt-4 text-center my-4 lg:text-2xl ">
                  {subtitle1}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4 ">
                {ImgPartie1 &&
                  ImgPartie1.length > 0 &&
                  ImgPartie1.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 1 de l'article`}
                      width={800}
                      height={300}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content1 && (
                <div className="prose prose-lg my-4">{content1}</div>
              )}
              {subtitle2 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle2}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie2 &&
                  ImgPartie2.length > 0 &&
                  ImgPartie2.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 2 de l'article `}
                      width={600}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content2 && (
                <div className="prose prose-lg my-4">{content2}</div>
              )}

              {subtitle3 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle3}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie3 &&
                  ImgPartie3.length > 0 &&
                  ImgPartie3.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 3 de l'article `}
                      width={300}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content3 && (
                <div className="prose prose-lg my-4">{content3}</div>
              )}
              {subtitle4 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle4}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie4 &&
                  ImgPartie4.length > 0 &&
                  ImgPartie4.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 4 de l'article `}
                      width={300}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content4 && (
                <div className="prose prose-lg my-4">{content4}</div>
              )}
              {subtitle5 && (
                <h4 className="text-xl font-semibold mt-4 my-4 text-center lg:text-2xl ">
                  {subtitle5}
                </h4>
              )}
              <div className="flex flex-row justify-center items-center flex-wrap gap-4 my-4">
                {ImgPartie5 &&
                  ImgPartie5.length > 0 &&
                  ImgPartie5.map((img, index) => (
                    <Image
                      quality={50}
                      key={index}
                      src={img}
                      alt={`image illustrant la partie 5 de l'article `}
                      width={300}
                      height={400}
                      className="rounded-lg w-auto h-auto"
                      unoptimized={isGif(img)}
                    />
                  ))}
              </div>
              {content5 && (
                <div className="prose prose-lg my-4">{content5}</div>
              )}
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
      )}
    </>
  );
};

export default BlogPost;
