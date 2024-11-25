"use Client";
import React from "react";
import { LuChevronsUp } from "react-icons/lu";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-24 lg:bottom-16 right-10 text-[#301D47] bg-white bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center 0 z-30">
      <LuChevronsUp onClick={scrollToTop} className="text-2xl animate-blink" />
    </div>
  );
};

export default ScrollToTopButton;
