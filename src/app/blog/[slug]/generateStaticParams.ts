import deckData from "@/data/decks.json";

export async function generateStaticParams() {
  return deckData.map((deck) => ({
    nameImg: deck.nameImg,
  }));
}
