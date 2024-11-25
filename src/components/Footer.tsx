import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="  bg-[#301D47] text-center z-20 flex flex-col lg:flex-row justify-center items-center lg:gap-4 py-4">
      <p>
        &copy; {new Date().getFullYear()} poke-tcgp-actu. All rights reserved.
      </p>
      <p>
        <a href="mailto:driinjagaming@gmail.com">Contact</a>
      </p>
    </div>
  );
};

export default Footer;
