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
import articles from "@/data/articles.json";

export default function Home() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust this value to scroll more or less
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const summary = [
    "Ectoplasma Hypnomade, le contrôle Psy !",
    "Feuille de Route des évènements de Décembre",
    "Utilisez cette ressource importante tant que vous le pouvez !",
    "Un nouveau format arrive, ce sont les joueurs qui en sont à l’origine",
    "L'évènement Apparition Massive de pokémon Feu ne fait pas l'unanimité",
    "Arbok Roucarnage, ou l’art de troll en beauté",
  ];
  return (
    <>
      <div className="relative z-10 p-4 flex items-center justify-center h-[82vh] lg:h-[80vh] ">
        <div className="flex flex-row justify-center items-center  ">
          <div className="w-full lg:w-2/4 py-8 flex flex-col justify-center items-center rounded-3xl  p-4 gap-8 mt-20 xl:mt-0 bg-[#301D47] bg-opacity-80 ">
            <h2 className="text-md lg:text-2xl font-bold  flex flex-col gap-2 text-center text-shadow-lg ">
              Bienvenue sur Poké TCGP Actu ! Votre rendez-vous regroupant tout
              ce dont vous aurez besoin pour devenir un maitre Pokémon TCG
              Pocket ! Decks, stratégie, actualité, ici vous trouverez tout pour
              être vainqueur et gagner les défis !
            </h2>
            <Link href="/decks">
              <Button className="rounded-full bg-[#301D47] hover:bg-[#382155]  hover:text-[#FFCB05] h-16 text-xl shadow-md border-[1px]  border-[#FFCB05]">
                Découvrir les decks
              </Button>
            </Link>

            <Button
              className="rounded-full bg-[#301D47] hover:bg-[#382155]  hover:text-[#FFCB05] h-16 text-xl shadow-md border-[1px]  border-[#FFCB05]"
              onClick={() => scrollToId("actu")}
            >
              Découvrir les actualités
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 mt-[4vh] lg:mt-[5.5vh]  " id="actu">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-t-xl flex flex-col justify-center items-center bg-[#301D47] bg-opacity-70 backdrop-blur-lg ">
            <PokeballFront />
            <div className="flex flex-col justify-center items-center gap-4 ">
              <h2 className="text-3xl font-bold text-[#FFCB05] p-4">
                Liste des articles
              </h2>
              {summary.map((title, index) => (
                <div
                  className="rounded-full flex justify-center items-center  bg-[#382155] hover:bg-[#301D47] p-1 w-full hover:text-[#FFCB05] min-h-24 text-lg shadow-md lg:w-full border-[1px]  border-[#FFCB05]"
                  key={index}
                  onClick={() => scrollToId(title)}
                >
                  <h2 className="text-md lg:text-xl font-bold text-white  text-center text-wrap">
                    {title}
                  </h2>
                </div>
              ))}
            </div>
            <PokeballLeft />
            <div className="flex flex-col justify-center items-center lg:w-screen ">
              {articles
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((post, index) => (
                  <div
                    key={post.id}
                    id={post.id}
                    className="flex flex-col justify-center items-center"
                  >
                    <BlogPost
                      {...post}
                      className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                    />
                    {index % 2 === 0 ? <PokeballRight /> : <PokeballLeft />}
                  </div>
                ))}
              {/* <div
                id="Ectoplasma Hypnomade, le contrôle Psy !"
                className="flex flex-col justify-center items-center"
              >
                <BlogPost
                  className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                  title=" Deck du jour : Ectoplasma Hypnomade, le contrôle Psy !"
                  content="Ectoplasma a toujours été un de mes Pokémon préférés, l’utiliser comme carte phare dans un deck était donc une obligation ! Ectoplasma possède le talent unique de bloquer les dresseurs, limitant grandement les tactiques de votre adversaire. Ses sous évolutions, Fantominus et Spectrum sont elles aussi assez intéressantes pour leur attaque à 1 d’énergie et un coût de retrait faible. Hypnomade de son retrait pourra soit servir de tank afin de préserver votre Ectoplasma, ou alors utiliser son talent afin de temporiser pendant que votre autre Pokémon fait le travail ! Hypnomade possède le talent d’endormir le Pokémon adverse sur un lancer de dés, l’empêchant de faire quoi que ce soit pendant son tour. Il devra ensuite lui-même effectuer un lancer de dés afin de sortir de cet état. L’incapacité à utiliser des dresseurs couplée avec l’endormissement font alors de ce deck un très bon archétype pour déstabiliser un adversaire trop confiant "
                  author="Driinja"
                  date="26/11/2024"
                  ImgPartie1={[
                    "/images/cards/A1-120.jpg",
                    "/images/cards/A1-120.jpg",
                    "/images/cards/A1-121.jpg",
                    "/images/cards/A1-121.jpg",
                    "/images/cards/A1-123.jpg",
                    "/images/cards/A1-123.jpg",
                    "/images/cards/A1-124.jpg",
                    "/images/cards/A1-124.jpg",
                    "/images/cards/A1-125.jpg",
                    "/images/cards/A1-125.jpg",
                    "/images/cards/P-A-001.jpg",
                    "/images/cards/P-A-002.jpg",
                    "/images/cards/P-A-002.jpg",
                    "/images/cards/P-A-005.jpg",
                    "/images/cards/P-A-005.jpg",
                    "/images/cards/P-A-007.jpg",
                    "/images/cards/P-A-007.jpg",
                    "/images/cards/A1-223.jpg",
                    "/images/cards/A1-223.jpg",
                    "/images/cards/A1-225.jpg",
                  ]}
                />
              </div>
              <PokeballRight />
              <div
                id="Feuille de Route des évènements de Décembre"
                className="flex flex-col justify-center items-center"
              >
                <BlogPost
                  className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                  title="Feuille de Route des évènements de Décembre - Pokémon TCG Pocket"
                  content="Le mois de Novembre aura été chargé pour les fans de Pokémon TCG Pocket entre l'événement Locklass, le JcJ Insignes, le Mass Outbreak et un ultime événement Magicarpe Leviatior qui devrait pointer le bout de son nez ! Que nous réserve Gamefreak pour ce mois de décembre ? Les leaks ont parlé, voici la liste provisoire des événements pour cette fin d'année ! "
                  subtitle1="Le Drop Florizarre"
                  content1="Un deuxième évènement similaire au très populaire Drop Locklass va avoir lieu du 28 Novembre au 12 décembre. Durant celui ci nous pourrons récupérer jusqu'à 6 cartes promo, la plupart d'entre elles étant des arts alternatifs de cartes existantes ! Deux cartes sortent du lot, Rondoudou qui gagne la capacité d'endormir sur son attaque et Spectrum qui pourra faire 50 dégâts sur un lancer de pièces ! Rendant chacune d'entre elles bien plus intéressantes."
                  subtitle2="La Pioche Miracle Bulbizarre Magneti "
                  content2="Un des membres des starters originel va avoir droit à son propre événement, c'est Bulbizarre qui sera au centre de celui-ci aux côtés de Magneti dans la Pioche Miracle un peu comme l'événement Miaouss / Leveinard que nous avons eu précédemment ! Comme la dernière fois, nous aurons un événement en deux temps, une première partie qui aura lieu du 5 au 12 décembre, et une deuxième du 12 au 19, avec évidemment sa boutique contenant des backgrounds, pièces et autres items exclusifs et relatifs à ces deux pokémons."
                  subtitle3="De nouvelles cartes en approche "
                  content3="La communauté est unanime, ce que les joueurs attendent le plus c'est évidemment de nouvelles cartes ! Bien qu'un nouveau set complet de plus de 260 cartes arrive fin janvier, le 16 décembre arrivera avec un mini set de nouvelles cartes, un ou deux boosters de pokémon ne faisant pas partie du premier set de TCG Pocket ! Cela devrait s'accompagner en théorie de nouvelles mécaniques et d'équilibrages visant à changer la méta actuelle, dominée à l'extrême par un certain Pikachu ! "
                  conclusion="Le besoin de nouveautés se fait clairement ressentir au sein de la communauté qui attend de pied ferme le set A2 sortant fin janvier, les évènements de décembre pourront ils étancher notre soif de cartes ? On fera le bilan en fin d'année ! "
                  author="Driinja"
                  date="25/11/2024"
                  ImgPartie1={[
                    "/images/Event_Decembre/partie_2/FlorAllt.jpg",
                    "/images/Event_Decembre/partie_1/AmphiAlt.jpg",
                    "/images/Event_Decembre/partie_1/OnAlt.jpg",
                    "/images/Event_Decembre/partie_1/RondAlt.jpg",
                    "/images/Event_Decembre/partie_1/SpectAlt.jpg",
                  ]}
                  ImgPartie2={[
                    "/images/Event_Decembre/partie_1/BulbAlt.jpg",
                    "/images/Event_Decembre/partie_2/BulbEvent1.jpg",
                    "/images/Event_Decembre/partie_2/BulbEvent2.jpg",
                    "/images/Event_Decembre/partie_2/BulbEvent3.jpg",
                  ]}
                  ImgPartie3={["/images/Event_Decembre/partie_3/Miniset.jpg"]}
                />
              </div>
              <div className="flex justify-center lg:justify-center items-end w-full lg:w-1/2">
                <PokeballLeft />
              </div>
              <div
                id="Utilisez cette ressource importante tant que vous le pouvez !"
                className="flex flex-col justify-center items-center"
              >
                <BlogPost
                  className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                  title="Pokémon TCG Pocket : Utilisez cette ressource importante tant que vous le pouvez !"
                  content="Comme vous le savez peut être chaque booster que vous ouvrez s’accompagne de points boosters, ressource qui fait office de “Pity system” !On peut définir ce terme technique comme une manière de lutter contre l'aléatoire du jeu, imaginez que vous ouvrez de plus en plus de boosters car vous souhaitez absolument avoir une carte précise mais la chance n'est pas avec vous. Chaque boosters s'accompagnant de points, vous pouvez directement acheter la carte que vous souhaitez grâce à cette ressource. Littéralement, le système a pitié de vous et vous échange votre carte contre vos points accumulés !"
                  content2="Ces points sont néanmoins liés à l’extension des boosters ouverts, autrement dit, nous sommes actuellement dans le premier set de Pokémon TCG Pocket, ces points boosters ne pourront pas être utilisés avec le deuxième set qui sortira fin janvier afin de récolter au plus vite les cartes les plus prisées de la première extension du TCG mobile."
                  content3="Pire, ces points points étant liés au set, ils seront voués à disparaître lorsque le set s’en ira de la boutique ! Pas d’inquiétude car en théorie, même si la première extension devrait arriver le 30 janvier avec un lot de plus de 220 cartes, cela ne signifie pas forcément que le set “Puissance Génétique” disparaîtra pour autant, donc pas d’inquiétude à avoir … pour l’instant."
                  conclusion="Une question se pose, comment récupérer les cartes qui nous manqueront lorsque le set “Puissance Génétique” prendra fin ? La réponse se trouve très certainement dans le très demandé système d'échange que la communauté réclame ardemment depuis le lancement du jeu. Une date de sortie partielle pour cette option a été révélée officiellement, certaines cartes (sûrement celles du premier set) devraient être échangeables courant janvier. "
                  author="Driinja"
                  date="25/11/2024"
                  ImgPartie1={["/images/Ressource/partie_1/Pointsbooster.gif"]}
                  ImgPartie2={["/images/Ressource/partie_2/Pointwarning.jpg"]}
                  ImgPartie3={["/images/Ressource/partie_3/Miniset.jpg"]}
                />
                <div className="flex justify-center lg:justify-center w-full lg:w-1/2">
                  <PokeballRight />
                </div>
                <div
                  id="Un nouveau format arrive, ce sont les joueurs qui en sont à l’origine"
                  className="flex flex-col justify-center items-center"
                >
                  <BlogPost
                    type={2}
                    className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                    title="Un nouveau format arrive dans Pokémon TCG Pocket, mais ce sont les joueurs qui en sont à l’origine"
                    content="Si vous vous êtes aventurés dans le mode joueur contre joueur de Pokémon TCG Pocket, vous avez peut être remarqués que La Méta actuelle est ultra dominée par les Pokémons EX, les données résumant les rencontres des 68 derniers tournois comprenant quasiment 35 000 matchs nous donnent l’information que dans le top 50 des Decks ayant le plus haut taux de victoire, seulement 8 decks ne comprennent aucune carte EX. En prime, seulement 2 decks regroupent plus de 50% des joueurs, et vous l’aurez deviné ce sont nos amis Mewtwo et Pikachu EX qui comptabilisent respectivement 25% et 26.5% des joueurs."
                    content1="Face à cette oppression de la méta, les joueurs ont trouvé un moyen de jouer dans leur propre format avant même que Game Freak ait besoin de mettre quoi que ce soit en place. Tout d’abord il faut savoir que comme mentionné précédemment, les tournois sont abondants sur Pokémon TCG Pocket et chacun y va de sa propre règle dont celle de ne pas utiliser de Pokémon EX lors de ces rencontres compétitives, créant ainsi un nouveau format pour les joueurs souhaitant s’engager dans ces tournois. "
                    content2="Notez que vous n'êtes pas obligés d'être un compétiteur afin de profiter du format NOEX, pour celà il faudra vous tourner vers l'outil de match privé ! Un mot de passe est nécessaire afin de participer à ces matchs privés, et un consensus est arrivé avec le code NOEX, les deux joueurs se doivent juste de respecter la règle tacite : ne pas utiliser de Pokémon EX lors de ce genre de rencontres."
                    content3="L’objectif de ce format est d’ouvrir le jeu à des decks qui ne pourraient pas avoir vraiment la chance de tenir face à la puissance accablante des decks métas, et ainsi expérimenter des manières de jouer et des combinaisons variées de cartes qu’on a peu l’occasion de voir. Les retours des joueurs sont d’ailleurs assez positifs et enthousiastes concernant ce mode de jeu que beaucoup espèrent voir arriver officiellement dans le jeu au cours des prochaines mises à jour."
                    content4="Néanmoins, ce système possède ses propres défauts. Echapper à une Méta ne fait qu'en créer une nouvelle où les meilleurs decks NOEX se partagent la part du lion. De plus, rien n'empêche des joueurs mal intentionnés d'intégrer le format avec des decks qui ne respectent pas les règles, dans le but d'obtenir des victoires plus facile ou juste s'amuser."
                    conclusion="Même s'il est loin d'être parfait, le format NOEX offre un mode de jeu alternatif intéressant que ce soit pour les joueurs ayant fait le tour de la méta actuelle, ou ceux qui n'ont pas encore les cartes pour être compétitif dans le format classique ! Dans tous tes cas cette initiative de la part des joueurs prouve deux choses, un la débrouillardise des joueurs. Et deux, le manque cruel de formats sur Pokémon TGCP. "
                    author="Driinja"
                    date="25/11/2024"
                    ImgPartie1={["/images/Format/partie_1/Ranking_compet.png"]}
                    ImgPartie2={["/images/Format/partie_2/Pokemeta.jpg"]}
                    ImgPartie3={["/images/Format/partie_3/NOEX.jpeg"]}
                    ImgPartie4={["/images/Format/partie_4/NOEXfake.jpeg"]}
                  />
                </div>
              </div>
              <PokeballLeft />
              <div
                id="L'évènement Apparition Massive de pokémon Feu ne fait pas l'unanimité"
                className="flex flex-col justify-center items-center"
              >
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
                  date="25/11/2024"
                  ImgPartie1={["/images/News_event/partie_1/Introevent.jpg"]}
                  ImgPartie2={["/images/News_event/partie_2/Piochebonus.jpg"]}
                  ImgPartie3={["/images/News_event/partie_3/Piocherare.jpg"]}
                  ImgPartie4={["/images/News_event/partie_4/Deckarca.jpg"]}
                />
              </div>
              <PokeballRight />
              <div
                id="Arbok Roucarnage, ou l’art de troll en beauté"
                className="flex flex-col justify-center items-center"
              >
                <BlogPost
                  className="bg-[#301D47] bg-opacity-70 rounded-lg m-2"
                  title=" Deck du jour : Arbok Roucarnage, ou l’art de troll en beauté"
                  content="Voici une combinaison comme on a pas l’habitude de voir mais si votre objectif du jour est de faire abandonner le joueur adverse, ce deck est exactement fait pour vous ! Les deux Pokémons phares du deck sont des cauchemars sur pattes, Arbok possède la capacité de totalement bloquer le Pokémon adverse, le rendant incabable de se replier sur son banc. Couplé avec le talent de Roucarnage à remplacer le pokémon au front par un du banc, et vous aurez un combo insupportable à infliger à vos adversaires ! Bien que ça ne soit pas un deck top tier, c’est vraiment une pépite si votre objectif est de troll efficacement. "
                  subtitle2="Version Ptera"
                  content2="Afin d’infliger encore plus de frustration à vos ennemis, on peut faire remplacer Arbok par Ptera. Ce Pokémon possède la capacité de renvoyer le Pokémon adverse dans la pioche sur un lancer de dés. Frustrant et énervant à souhait, vous pourrez admirer votre adversaire abandonner après avoir renvoyé son Pokémon durement set up, tout droit dans son paquet de cartes"
                  author="Driinja"
                  date="25/11/2024"
                  ImgPartie1={[
                    "/images/cards/A1-164.jpg",
                    "/images/cards/A1-164.jpg",
                    "/images/cards/A1-165.jpg",
                    "/images/cards/A1-165.jpg",
                    "/images/cards/A1-186.jpg",
                    "/images/cards/A1-186.jpg",
                    "/images/cards/A1-187.jpg",
                    "/images/cards/A1-187.jpg",
                    "/images/cards/A1-188.jpg",
                    "/images/cards/A1-188.jpg",
                    "/images/cards/P-A-001.jpg",
                    "/images/cards/P-A-001.jpg",
                    "/images/cards/P-A-002.jpg",
                    "/images/cards/P-A-002.jpg",
                    "/images/cards/P-A-005.jpg",
                    "/images/cards/P-A-005.jpg",
                    "/images/cards/P-A-007.jpg",
                    "/images/cards/P-A-007.jpg",
                    "/images/cards/A1-223.jpg",
                    "/images/cards/A1-223.jpg",
                  ]}
                  ImgPartie2={[
                    "/images/cards/A1-210.jpg",
                    "/images/cards/A1-225.jpg",
                  ]}
                />
              </div> */}
            </div>
          </div>

          <ScrollToTopButton />
        </div>
      </section>
    </>
  );
}
