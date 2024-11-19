"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import deckData from "@/data/decks.json"; // Vérifie que le chemin est correct

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
    <div className="flex flex-col   w-full">
      <h3 className="text-2xl font-bold mb-4 text-center">Rank {rank}</h3>
      {sortedDecks
        .filter((deck) => deck.rank === rank)
        .map((deck) => (
          <div
            key={deck.id}
            className="p-4 border rounded-lg shadow-lg flex flex-col items-center mb-4"
          >
            <h2 className="text-xl font-semibold">{deck.name}</h2>
            <p className="text-gray-500">Rank: {deck.rank}</p>
            <Link href={`/decks/${deck.nameImg}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 rounded-full shadow">
                Voir les détails
              </button>
            </Link>
          </div>
        ))}
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Liste des Decks</h1>
      <div className="flex flex-wrap gap-6">
        {renderDecksByRank("S")}
        {renderDecksByRank("A")}
        {renderDecksByRank("B")}
      </div>
    </div>
  );
}
