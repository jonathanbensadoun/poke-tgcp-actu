import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <div className=" p-4 flex items-center justify-between h-screen">
      <div className="flex flex-row justify-center">
        <Image src="/test1.png" alt="Logo" width={500} height={500} />
        <div className="w-2/4 py-8">
          <h2 className="text-2xl font-bold">
            Bienvenue sur Poké TGCP Actu ! toutes les news sur les jeux pokémon
            TGCP , les tiers list et les tournois ! des conseils et des astuces
            pour devenir le meilleur dresseur !
          </h2>
          <Button>En savoir plus</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
