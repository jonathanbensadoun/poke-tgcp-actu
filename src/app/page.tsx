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
          <div className="w-2/4 py-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-white ">
              Bienvenue sur Poké TGCP Actu ! toutes les news sur les jeux
              pokémon TGCP , les tiers list et les tournois ! des conseils et
              des astuces pour devenir le meilleur dresseur !
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
