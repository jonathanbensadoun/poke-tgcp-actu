"use client";
import React from "react";
import Image from "next/image";
import deckData from "@/data/decks.json";

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl">Decks</h2>
      <div className="flex flex-wrap gap-2 justify-center items-center m-4">
        {deckData.map((deck) => (
          <div
            key={deck.id}
            className="flex flex-col justify-center items-center text-white bg-gray-300 bg-opacity-50 p-2 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl text-black">{deck.name}</h2>
            <div className="flex flex-wrap justify-center items-center ">
              {deck.deck.map((cardId, index) => (
                <Image
                  key={index}
                  src={`/images/${cardId}.jpg`}
                  alt={`Deck Pokémon TCG Pocket ${deck.id} Card ${cardId}`}
                  width={300}
                  height={400}
                  style={{ width: "auto", height: "auto" }}
                  priority={deck.id === 1}
                  className="rounded-2xl m-1"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
