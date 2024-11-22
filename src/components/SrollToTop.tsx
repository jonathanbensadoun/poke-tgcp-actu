"use Client";
import React from "react";
import { LuChevronsUp } from "react-icons/lu";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-24 lg:bottom-16 right-10 bg-white w-10 h-10 rounded-full flex justify-center items-center bg-opacity-20 z-30">
      <LuChevronsUp onClick={scrollToTop} className="text-2xl animate-blink" />
    </div>
  );
};

export default ScrollToTopButton;
