import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[100vh]">
      {" "}
      {/* Réduit à 60vh au lieu de 100vh */}
      <div className="absolute lg:inset-y-1/4 2xl:ml-20 z-0">
        {/* <Image
          src="/giphy_1.gif"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
        <Image
          src="/6190b541579ccdce26c4957664000c88.gif"
          alt="Background"
          width={100}
          height={400}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
      <div className="absolute lg:inset-y-1/4 right-0 z-0 hidden xl:block">
        {/* <Image
          src="/giphy_1.gif"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
        <Image
          src="/6190b541579ccdce26c4957664000c88.gif"
          alt="Background"
          width={100}
          height={400}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
