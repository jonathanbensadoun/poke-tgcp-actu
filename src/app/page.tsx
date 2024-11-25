"use client";
import React from "react";
import BlogPost from "@/components/BlogPost";
import {
  PokeballFront,
  PokeballLeft,
  PokeballRight,
} from "@/components/pokeball";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/SrollToTop";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative z-10 p-4 flex items-center justify-center h-[90vh] lg:h-[80vh] ">
        <div className="flex flex-row justify-center items-center  ">
          <div className="w-full lg:w-2/4 py-8 flex flex-col justify-center items-center rounded-3xl  p-4 gap-8 mt-64 xl:mt-0 bg-[#301D47] bg-opacity-80 ">
            <h2 className="text-md lg:text-2xl font-bold  flex flex-col gap-2 text-center text-shadow-lg ">
              Bienvenue sur Poké TCGP Actu ! Votre destination incontournable
              pour tout savoir sur l’univers du jeu Pokémon TCG Pocket ! Que
              vous soyez un collectionneur passionné, un stratège aguerri ou un
              dresseur en herbe, Poké TCGP Actu est là pour vous aider à devenir
              le meilleur dresseur et dominer le jeu Pokémon TCG Pocket ?
              L’aventure commence ici, sur Poké TCGP Actu !
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
      <section className="relative z-10 mt-[4vh] lg:mt-[5.5vh]  ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-t-xl flex flex-col justify-center items-center bg-[#301D47] bg-opacity-70 backdrop-blur-lg">
            <PokeballFront />

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
            <div className="flex justify-center lg:justify-center items-end w-full lg:w-1/2">
              <PokeballLeft />
            </div>

            <BlogPost
              className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
              title="Pokémon TCG Pocket : Utilisez cette ressource importante tant que vous le pouvez !"
              content="La hype du nouveau venu de la licence Pokémon est inarrêtable, Pokemon TCGP est sorti il y a à peine 3 semaines et a déjà généré plus de 120 millions de revenus et vous pouvez imaginer la quantité de boosters qui ont étés ouverts pendant cette période ! "
              content1="Comme vous le savez peut être chaque booster que vous ouvrez s’accompagne de points boosters, ressource qui fait office de “Pity system” ! Vous pouvez ensuite utiliser ces points afin d’acheter les cartes dont vous aurez besoin pour un montant relativement exorbitant, ce système de points, se cumulant grâce à l’ouverture de boosters et non pas avec les doublons de cartes (comme on peut le retrouver sur Hearthstone avec le désenchantement par exemple) permet néanmoins de cibler des cartes nécessaires et récalcitrantes à tomber, ou de parfaire sa collection."
              content2="Ces points sont néanmoins liés à l’extension des boosters ouverts, autrement dit, nous sommes actuellement dans le premier set de Pokémon TCG Pocket, ces points boosters ne pourront pas être utilisés avec le deuxième set qui sortira fin janvier afin de récolter au plus vite les cartes les plus prisées de la première extension du TCG mobile."
              content3="Pire, ces points points étant liés au set, ils seront voués à disparaître lorsque le set s’en ira de la boutique ! Mais pas d’inquiétude car en théorie, même si la première extension devrait arriver le 30 janvier avec un lot de plus de 220 cartes, cela ne signifie pas forcément que le set “Puissance Génétique” disparaîtra pour autant, donc pas d’inquiétude à avoir … pour l’instant."
              conclusion="Mais une question se pose, comment récupérer les cartes qui nous manqueront lorsque le set “Puissance Génétique” prendra fin ? La réponse se trouve très certainement dans le très demandé système d'échange que la communauté réclame ardemment depuis le lancement du jeu. Une date de sortie partielle pour cette option a été révélée officiellement, certaines cartes (sûrement celles du premier set) devraient être échangeables courant janvier. "
              author="Driinja"
              date="22/11/2024"
              ImgPartie1={["/images/Ressource/partie_1/Pointsbooster.gif"]}
              ImgPartie2={["/images/Ressource/partie_2/Pointwarning.jpg"]}
              ImgPartie3={["/images/Ressource/partie_3/Miniset.jpg"]}
            />
            <div className="flex justify-center lg:justify-center w-full lg:w-1/2">
              <PokeballRight />
            </div>
            <BlogPost
              type={2}
              className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
              title="Un nouveau format arrive dans Pokémon TCG Pocket, mais ce sont les joueurs qui en sont à l’origine"
              content="Si vous vous êtes aventurés dans le mode joueur contre joueur de Pokémon TCG Pocket, vous avez peut être remarqués que La méta actuelle est ultra dominée par les Pokémons EX, les données résumant les rencontre dès 68 derniers tournois comprenant quasiment 35 000 matchs nous donne l’information que dans le top 50 des Decks ayant le plus haut taux de victoire, seulement 8 decks ne comprennent aucune carte EX. En prime, seulement 2 decks regroupent plus de 50% des joueurs, et vous l’aurez deviné ce sont nos amis Mewtwo et Pikachu EX qui comptabilisent respectivement 25% et 26.5% des joueurs."
              content1="Face à cette oppression de la méta, les joueurs ont trouvé un moyen de jouer dans leur propre format avant même que Game Freak ait besoin de mettre quoi que ce soit en place. Tout d’abord il faut savoir que comme mentionné précédemment, les tournois sont abondants sur Pokémon TCG Pocket et chacun y va de sa propre règle dont celle de ne pas utiliser de Pokémon EX lors de ces rencontres compétitives, créant ainsi un nouveau format pour les joueurs souhaitant s’engager dans ces tournois. "
              content2="Une deuxième manière, cette fois pour un côté plus d'entente est aussi possible et ce grâce à l’outil de match privé ! Un mot de passe est nécessaire afin de participer à ces matchs privés, et un consensus est arrivé avec le code NOEX, les deux joueurs se doivent juste de respecter la règle tacite : Ne pas utiliser de Pokémon EX lors de ce genre de rencontres."
              content3="L’objectif de ce format est d’ouvrir le jeu à des decks qui ne pourraient pas avoir vraiment la chance de tenir face à la puissance accablante des decks métas, et ainsi expérimenter avec des playstyles et des combinaisons variées de cartes qu’on a peu l’occasion de voir. Les retours des joueurs sont d’ailleurs assez positifs et enthousiastes concernant ce mode de jeu que beaucoup espèrent voir arriver officiellement dans le jeu au cours des prochaines mises à jour."
              content4="Néanmoins le modèle n’est pas parfait, car en créant ce nouveau format afin d’échapper à la méta, ne fait qu’en créer une nouvelle, et les decks NOEX qui brillent dans le format classique (on peut citer, le Deck Auguste Feunard, Koga Smogogo, Alakazam, Dracolosse etc …) le sont encore plus lorsqu’ils ne font pas face à la pression de Pokémon EX du côté opposé. De plus, c'est un modèle qui repose seulement sur le bon vouloir des joueurs, celà n’empêche pas des joueurs avec des mauvaises intentions de venir utiliser des decks avec EX dans ce format tels les petits trolls qu’ils sont."
              conclusion="Mais même si il est loin d’être parfait, c’est une expérience que je vous recommande de par la variété des decks proposés et le manque d’options de la part de Pokémon TCG Pocket afin d’offrir des modes de jeux alternatifs et accessibles aux joueurs n’ayant pas la chance de tirer des cartes EX. "
              author="Driinja"
              date="22/11/2024"
              ImgPartie1={["/images/Format/partie_1/Ranking_compet.png"]}
              ImgPartie2={["/images/Format/partie_2/Pokemeta.jpg"]}
              ImgPartie3={["/images/Format/partie_3/NOEX.jpeg"]}
              ImgPartie4={["/images/Format/partie_4/NOEXfake.jpeg"]}
            />
            <PokeballLeft />
            <BlogPost
              type={2}
              className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
              title="Un nouvel évènement a débarqué dans Pokémon TCG Pocket … et il ne fait pas l'unanimité "
              content="Ce vendredi un nouvel évènement est arrivé dans Pokémon TCG Pocket avec comme thème le feu ardent d’Arcanin, nous aurons la possibilité pendant une semaine d’avoir des pioches miracles orientées vers la thématique des flammes avec notamment des pokémons de types et des cartes Auguste à récupérer communément, mais aussi et surtout nous verrons apparaître des pioches rares avec des Pokémons EX comme Arcanin à l’intérieur."
              content1="Malheureusement ce n’est pas assez pour les joueurs qui s’étaient imaginés monts et merveilles grâce à des leaks sur reddit mal interprétées, des quantités de vidéos sur Youtube ont ainsi fusées, incitant les joueurs à garder leurs ressources aux vues de drops plus rare de cartes dans les boosters, ce qui était évidemment faux"
              content2="La deuxième raison de cette déception tient dans les récompenses de l'événement en elles même, les pioches miracles n’étant tout d’abord pas la partie la plus excitante du jeu, les pioches bonus présentent un intérêt tout à fait relatifs pour les joueurs car les cartes restent très basiques, et les pioches rares s’accompagnent d’un prix de 3 Vitalités Miracles, nécessaire afin de tenter de récupérer le fameux Arcanin EX."
              content3="Néanmoins l'événement offre quand même la chance de compléter un cartodex pas forcément évident à remplir en free to play avec des cartes très fortes dans la Pioche gratuite telles que feunard, Galopa ou même Auguste afin de créer un deck Aggro très efficace dans la méta actuelle, et même si la pioche rare coûte relativement chère, celà reste une opportunité supplémentaire de gagner une carte très intéressante et compétitive actuellement de par sa facilité de setup et sa puissance de frappe."
              conclusion="Par contre ce que les joueurs attendant vraiment c’est un nouvel évènement solo similaire au combat Lokhlass qui a été vraiment populaire auprès de la communauté, mais n’ayez crainte c’est exactement ce que nous aurons le 28 Novembre avec de nouveaux challenges ainsi que de belles cartes promo à récupérer grâce à l'évènement Florizarre !"
              author="Driinja"
              date="22/11/2024"
              ImgPartie1={["/images/News_event/partie_1/Introevent.jpg"]}
              ImgPartie2={["/images/News_event/partie_2/Piochebonus.jpg"]}
              ImgPartie3={["/images/News_event/partie_3/Piocherare.jpg"]}
              ImgPartie4={["/images/News_event/partie_4/Deckarca.jpg"]}
            />
          </div>

          <ScrollToTopButton />
        </div>
      </section>
    </>
  );
}
