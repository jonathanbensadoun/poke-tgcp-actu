"use client";
import React from "react";
import BlogPost from "@/components/BlogPost";
import { PokeballLeft } from "@/components/pokeball";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/SrollToTop";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section avec le texte */}
      <div className="relative z-10 p-4 flex items-center justify-center h-[80vh]">
        <div className="flex flex-row justify-center items-center ">
          <div className="w-full lg:w-2/4 py-8 flex flex-col justify-center items-center rounded-lg p-4 gap-8 mt-64 xl:mt-0">
            <h2 className="text-2xl font-bold  flex flex-col gap-2 text-center text-shadow-lg   ">
              Bienvenue sur Poké TGCP Actu ! Votre destination incontournable
              pour tout savoir sur l’univers du jeu Pokémon TCG Pocket ! Que
              vous soyez un collectionneur passionné, un stratège aguerri ou un
              dresseur en herbe, Poké TGCP Actu est là pour vous aider à devenir
              le meilleur dresseur et dominer le jeu Pokémon TCG Pocket ?
              L’aventure commence ici, sur Poké TGCP Actu !
            </h2>
            <Link href="/decks">
              <Button className="rounded-full bg-[#301D47] hover:bg-[#382155]  hover:text-[#FFCB05] h-16 text-lg shadow-md">
                Découvrir les decks
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 mt-[6vh] ">
        {" "}
        {/* Ajusté à 60vh pour correspondre au header */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-t-xl flex flex-col justify-center items-center bg-[#301D47] bg-opacity-70 backdrop-blur-lg">
            <PokeballLeft />
            <BlogPost
              className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
              title="Feuille de Route des évènements de Décembre - Pokémon TCG Pocket"
              content="Le mois de Novembre aura été chargé pour les fans de Pokémon TCG Pocket entre l'événement Locklass, le JcJ Insignes, le Mass Outbreak et un ultime événement Magicarpe Leviatior qui devrait pointer le bout de son nez ! Mais que nous réserve Gamefreak pour ce mois de décembre ? Les leaks ont parlés, voici la liste provisoire des événements pour cette fin d'année ! "
              subtitle1="Le Drop Florizarre"
              content1="Tout d'abord un second événement similaire au Locklass devrait apparaître le 28 novembre et se poursuivre jusqu'au 12 décembre ! Durant différents niveaux de challenges nous aurons l'opportunité de gagner de nouvelles cartes, la plupart sont seulement des arts alternatifs de cartes que nous connaissons déjà. Seule grosse différence avec Spectrum qui se voit attribuer une nouvelle attaque infligeant 0 ou 50 de dégâts sur un lancer de pièce."
              subtitle2="La Pioche Miracle Bulbizarre Magneti "
              content2="Un des membres des starters originel va avoir droit à son propre événement, c'est Bulbizarre qui sera au centre de celui-ci aux côtés de Magneti dans la Pioche Miracle un peu comme l'événement Miaouss / Leveinard que nous avons eu précédemment ! Comme la dernière fois, nous aurons un événement en deux temps, une première partie qui aura lieu du 5 au 12 décembre, et une deuxième du 12 au 19, avec évidemment sa boutique contenant des backgrounds, pièces et autres items exclusifs et relatifs à ces deux pokémons."
              subtitle3="De nouvelles cartes en approche "
              content3="Mais ce que les joueurs attendent le plus, c'est évidemment de nouvelles cartes ! Bien qu'un nouveau set complet de plus de 260 cartes arrive fin janvier, le 16 décembre arrivera avec un mini set de nouvelles cartes, un ou deux boosters de pokémons ne faisant pas partie du premier set de TCG Pocket ! Cela devrait s'accompagner en théorie de nouvelles mécaniques et d'équilibrages visant à changer la méta actuelle, dominée à l'extrême par un certain Pikachu ! "
              conclusion="Le besoin de nouveautés se fait clairement ressentir au sein de la communauté qui attend de pied ferme le set A2 sortant fin janvier, en espérant que ces événements de décembre sauront étancher notre soif de cartes … pour le moment ! "
              author="Driinja"
              date="21/11/2024"
              ImgPartie1={[
                "/images/Event_Decembre/partie_1/AmphiAlt.jpg",
                "/images/Event_Decembre/partie_1/BulbAlt.jpg",
                "/images/Event_Decembre/partie_1/OnAlt.jpg",
                "/images/Event_Decembre/partie_1/RondAlt.jpg",
                "/images/Event_Decembre/partie_1/SpectAlt.jpg",
              ]}
              ImgPartie2={[
                "/images/Event_Decembre/partie_2/BulbEvent1.jpg",
                "/images/Event_Decembre/partie_2/BulbEvent2.jpg",
                "/images/Event_Decembre/partie_2/BulbEvent3.jpg",
                "/images/Event_Decembre/partie_2/FlorAllt.jpg",
              ]}
              ImgPartie3={["/images/Event_Decembre/partie_3/Miniset.jpg"]}
            />
          </div>
          <ScrollToTopButton />
        </div>
      </main>
    </>
  );
}
