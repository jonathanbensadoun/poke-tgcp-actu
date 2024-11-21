import React from "react";
import BlogPost from "@/components/BlogPost";
import { PokeballLeft } from "@/components/pokeball";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section avec le texte */}
      <div className="relative z-10 p-4 flex items-center justify-center h-[80vh]">
        <div className="flex flex-row justify-center items-center">
          <div className="w-full lg:w-2/4 py-8 flex flex-col justify-center items-center  bg-[#301D47] bg-opacity-60  rounded-lg p-4 gap-8 ">
            <h2 className="text-2xl font-bold  flex flex-col gap-2 text-center ">
              Bienvenue sur Poké TGCP Actu ! Votre destination incontournable
              pour tout savoir sur l’univers du jeu Pokémon TCG Pocket ! Que
              vous soyez un collectionneur passionné, un stratège aguerri ou un
              dresseur en herbe, Poké TGCP Actu est là pour vous aider à devenir
              le meilleur dresseur et dominer le jeu Pokémon TCG Pocket ?
              L’aventure commence ici, sur Poké TGCP Actu !
            </h2>
            <Button>En savoir plus</Button>
          </div>
        </div>
      </div>

      <Header />

      {/* Main Content */}
      <main className="relative z-10 mt-[6vh] ">
        {" "}
        {/* Ajusté à 60vh pour correspondre au header */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-t-xl flex flex-col justify-center items-center bg-[#301D47] bg-opacity-70 backdrop-blur-lg">
            <PokeballLeft />
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="pompom"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="tonton"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />{" "}
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-red-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
            <BlogPost
              className="bg-gray-400 rounded-lg m-2"
              title="Hello, World!"
              content="Welcome to my blog!"
              author="John Doe"
              date="2022-01-01"
            />
          </div>
        </div>
      </main>
    </>
  );
}
