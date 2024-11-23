"use client";
import React from "react";
import Image from "next/image";

const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 flex justify-center items-center z-50 p-4">
      <div className="flex justify-center items-center w-full lg:w-1/6 lg:h-1/2">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={300}
          height={400}
          style={{ objectFit: "cover" }}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ZoomableImage;
