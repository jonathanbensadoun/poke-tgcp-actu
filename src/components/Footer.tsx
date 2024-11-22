import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-[#301D47] text-center  z-20 flex flex-col lg:flex-row justify-center items-center lg:gap-4 py-4">
      <p>
        &copy; {new Date().getFullYear()} poke-tgcp-actu. All rights reserved.
      </p>
      <p>
        <a href="mailto:bens.develop@gmail.com">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
