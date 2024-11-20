import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[100vh]">
      {" "}
      {/* Réduit à 60vh au lieu de 100vh */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/test3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
};

export default Header;
