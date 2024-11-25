import type { Metadata } from "next";
import React from "react";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Pokémon TCGP Actu - Actualités et Stratégies",
  description:
    "Découvrez les dernières actualités, stratégies et astuces pour le jeu de cartes Pokémon, pokemon tcgp, pokemon tcg pocket.",
  icons: {
    icon: "/favicon.ico", // Icône de favicon
  },
  openGraph: {
    title: "Pokémon TCGP Actu - Actualités et Stratégies",
    description:
      "Explorez tout ce qui concerne les stratégies et actualités Pokémon, pokemon tcgp, pokemon tcg pocket. ",
    url: "https://poke-tcgp-actu.netlify.app",
    siteName: "Pokémon TCGP Actu",
    images: [
      {
        url: "https://poke-tcgp-actu.netlify.app/fav.png",
        width: 1200,
        height: 630,
        alt: "Pokémon TCGP Actu logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@driinja",
    title: "Pokémon TCGP Actu - Actualités et Stratégies",
    description: "Découvrez les dernières actualités et stratégies Pokémon.",
    images: ["https://poke-tcgp-actu.netlify.app/fav.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Pokémon TCGP Actu - Actualités et Stratégies</title>
        <meta
          name="description"
          content="Découvrez les dernières actualités, stratégies et astuces pour le jeu de cartes Pokémon tgc pocket ."
        />
        <meta
          name="google-site-verification"
          content="XCGQaSbNSir8BXvWV739ohmYGxYFoLqSU_VVN7WztuQ"
        />
      </head>
      <body className={`${fredoka.className}  antialiased bg-[#3d2368] `}>
        <header>
          <Navbar />
          <Header />
        </header>
        <main className="absolute lg:pb-14 ">{children}</main>
        <footer className="lg:fixed lg:bottom-0 w-full z-20 hidden lg:block">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
