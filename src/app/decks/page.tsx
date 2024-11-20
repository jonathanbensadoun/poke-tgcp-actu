"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import deckData from "@/data/decks.json"; // Vérifie que le chemin est correct
import Image from "next/image";

// Définir le type des données des decks
type Rank = "S" | "A" | "B"; // Les valeurs possibles pour `rank`
type Deck = {
  id: number;
  name: string;
  rank: Rank;
  nameImg: string;
};

export default function DecksPage() {
  // Assure TypeScript que deckData est de type Deck[]
  const sortedDecks = (deckData as Deck[]).sort((a, b) => {
    const rankOrder: { [key in Rank]: number } = { S: 1, A: 2, B: 3 };
    return rankOrder[a.rank] - rankOrder[b.rank];
  });

  const renderDecksByRank = (rank: Rank) => (
    <div className="flex flex-col justify-center items-center ">
      <h3 className="text-2xl font-bold mb-4 text-center">Rank {rank}</h3>
      <div className="flex flex-row gap-4 flex-wrap justify-center items-center  ">
        {sortedDecks
          .filter((deck) => deck.rank === rank)
          .map((deck) => (
            <div
              key={deck.id}
              className="border rounded-lg shadow-lg flex flex-col items-center mb-4 bg-[#301D47] bg-opacity-70 backdrop-blur-lg "
            >
              <Link href={`/decks/${deck.nameImg}`}>
                <Image
                  src={`/images/decks/${deck.nameImg}.png`}
                  alt={`Carte Pokémon TCG Pocket miniature du deck ${deck.nameImg} `}
                  width={500}
                  height={0}
                  style={{ width: "auto", height: "auto" }}
                  priority
                  className="rounded-lg"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 m-8 bg-[#301D47] bg-opacity-70  flex flex-col justify-center items center rounded-lg">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/test3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">Liste des Decks</h1>
      <div className="flex flex-col flex-wrap gap-6">
        {renderDecksByRank("S")}
        {renderDecksByRank("A")}
        {renderDecksByRank("B")}
      </div>
    </div>
  );
}
