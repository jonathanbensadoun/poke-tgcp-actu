"use client";
import React, { useState } from "react";
import Image from "next/image";
import cardData from "@/data/cards.json";
import ScrollToTopButton from "@/components/SrollToTop";
import ZoomableImage from "@/components/ZoomableImage";
import { Skeleton } from "@/components/ui/skeleton";

interface Card {
  id: string;
  img: string;
  hp: number;
  stage: string;
  type: string | number;
}

const getTypeName = (type: string | number): string => {
  const typeStr = typeof type === "number" ? type.toString() : type;
  switch (typeStr) {
    case "1":
      return "Plante";
    case "2":
      return "Feu";
    case "3":
      return "Eau";
    case "4":
      return "Électrique";
    case "5":
      return "Psy";
    case "6":
      return "Combat";
    case "7":
      return "Obscurité";
    case "8":
      return "Métal";
    case "9":
      return "Dragon";
    case "10":
      return "Incolore";
    default:
      return "Inconnu";
  }
};

const CardsPage: React.FC = () => {
  const [cardId, setCardId] = useState("");
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (id: string) => {
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center lg:m-4 mt-24 lg:mt-20 ">
      {cardData.map((card: Card) => (
        <div
          key={card.id}
          className="flex flex-col justify-center items-center rounded-lg shadow-lg w-1/4 sm:w-1/5 md:w-2/12 lg:w-2/12 xl:w-1/12"
        >
          {loading[card.id] && <Skeleton className="h-[400px] w-[300px]" />}
          <Image
            src={`/images/cards/${card.id}.jpg`}
            alt={`Carte Pokémon TCG Pocket ${card.id} de type ${getTypeName(
              String(card.type)
            )} avec ${card.hp} points de vie et de stade ${card.stage}`}
            width={300}
            height={400}
            style={{ width: "auto", height: "auto" }}
            priority={card.id === "A1-001"}
            className={`rounded-lg ${loading[card.id] ? "hidden" : ""}`}
            onClick={() => setCardId(card.id)}
            onLoad={() => handleImageLoad(card.id)}
          />

          {cardId === card.id && (
            <div onClick={() => setCardId("")}>
              <ZoomableImage
                src={`/images/cards/${card.id}.jpg`}
                alt="Exemple de carte Pokémon"
              />
            </div>
          )}
          <ScrollToTopButton />
        </div>
      ))}
    </div>
  );
};

export default CardsPage;
