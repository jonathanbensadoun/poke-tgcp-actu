import { PokeballRight } from "@/components/pokeball";
import deckData from "@/data/decks.json"; // Vérifie que le chemin est correct
import Image from "next/image";

export default async function DeckDetails({
  params,
}: {
  params: { nameImg: string };
}) {
  const { nameImg } = await params;
  // Récupère les données du deck correspondant à l'URL
  const deck = deckData.find((deck) => deck.nameImg === nameImg);

  // Si le deck n'est pas trouvé
  if (!deck) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Deck introuvable</h1>
        <p className="text-gray-500">
          Vérifiez l&apos;URL ou revenez à la liste des decks.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{deck.name}</h1>
      <p className=" mb-6">{deck.description}</p>
      <PokeballRight />
      <h2 className="text-2xl font-semibold mb-4">Cartes du deck :</h2>
      <ul className="flex flex-row justify-center items-center flex-wrap">
        {deck.deck.map((card, index) => (
          <li
            key={index}
            className="w-1/5 sm:w-1/5 md:w-2/12 lg:w-2/12 xl:w-1/12 p-1"
          >
            <Image
              src={`/images/${card}.jpg`}
              alt={`Deck Pokémon TCG Pocket ${deck.id} Card ${card}`}
              width={300}
              height={400}
              className="rounded-2xl w-full h-auto"
              priority={deck.id === 1}
            />
          </li>
        ))}
      </ul>
      {deck.alternat && (
        <div className="flex flex-col justify-center items-center">
          <PokeballRight />
          {deck.description_alternate && (
            <div className="w-1/2">
              <p className="text-gray-700 mt-6">{deck.description_alternate}</p>
            </div>
          )}
          <ul className="flex flex-row justify-center items-center flex-wrap">
            {deck.alternat.map((card, index) => (
              <li
                key={index}
                className="w-1/5 sm:w-1/5 md:w-2/12 lg:w-3/12 xl:w-3/12 p-1"
              >
                <Image
                  src={`/images/${card}.jpg`}
                  alt={`Deck Pokémon TCG Pocket ${deck.id} Card ${card}`}
                  width={300}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                  priority={deck.id === 1}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}