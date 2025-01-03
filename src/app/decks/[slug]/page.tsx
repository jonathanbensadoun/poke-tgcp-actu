import { PokeballLeft, PokeballRight } from "@/components/pokeball";
import deckData from "@/data/decks.json"; // Vérifie que le chemin est correct
import Image from "next/image";
type tParams = Promise<{ slug: string }>;
export default async function DeckDetails({ params }: { params: tParams }) {
  const { slug } = await params;
  console.log(slug);
  // Récupère les données du deck correspondant à l'URL
  const deck = deckData.find((deck) => deck.nameImg === slug);

  // Si le deck n'est pas trouvé
  if (!deck) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold">Deck introuvable</h2>
        <p className="text-gray-500">
          Vérifiez l&apos;URL ou revenez à la liste des decks.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col justify-center items-center min-h-screen rounded-lg bg-[#301D47] bg-opacity-50 backdrop-blur-lg  m-4 lg:mx-60 mt-24 lg:mt-20">
      <h2 className="text-4xl font-bold mb-4">{deck.name}</h2>
      <p className=" mb-6">{deck.description}</p>
      <PokeballRight />
      <h3 className="text-2xl font-semibold mb-4">Cartes du deck :</h3>
      <ul className="flex flex-row justify-center items-center flex-wrap">
        {deck.deck.map((card, index) => (
          <li
            key={index}
            className="w-[8rem] sm:w-1/5 md:w-2/12 lg:w-3/12 xl:w-[12rem] p-1"
          >
            <Image
              src={`/images/cards/${card}.jpg`}
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
          <PokeballLeft />
          {deck.description_alternate && (
            <div className="w-2/3 my-8">
              <p className=" mt-6">{deck.description_alternate}</p>
            </div>
          )}
          <ul className="flex flex-row justify-center items-center flex-wrap ">
            {deck.alternat.map((card, index) => (
              <li
                key={index}
                className="w-[8rem] sm:w-1/5 md:w-2/12 lg:w-3/12 xl:w-[12rem] p-1"
              >
                <Image
                  src={`/images/cards/${card}.jpg`}
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
