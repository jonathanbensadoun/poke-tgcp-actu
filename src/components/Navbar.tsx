"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTwitch, FaYoutube, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:flex lg:justify-center lg:items-center fixed top-0  right-0 left-0 z-50">
      <div className="flex flex-row lg:flex-row items-center justify-between p-4 bg-[#301D47] text-[#FFCB05] bg-opacity-50 backdrop-blur-lg lg:rounded-b-lg lg:w-4/5 shadow">
        <Link href="/" className="hover:text-gray-400">
          <h1 className="text-xl font-bold lg:text-2xl">Poké TCGP Actu</h1>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-4 mx-auto lg:text-2xl">
          <Link href="/" className="hover:text-gray-400">
            News
          </Link>
          <Link href="/decks" className="hover:text-gray-400">
            Decks
          </Link>
          <Link href="/cards" className="hover:text-gray-400">
            Liste des cartes
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:text-2xl">
          <Link
            href="https://twitch.tv/driinja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitch />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.tiktok.com/@driinja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTiktok />
          </Link>
          <Link
            href="https://x.com/Driinja?t=BkkC5zc7iJ7kMxXeFB1bEg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaXTwitter />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-end lg:hidden   text-white p-4 ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        {isOpen && (
          <div className="bg-gray-800 text-white w-1/3 flex p-4 rounded-bl-lg flex-col justify-center items-center absolute">
            <div className="block lg:hidden mt-4">
              <div className="flex flex-col  space-y-4 ">
                <Link
                  href="/"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  News
                </Link>
                <Link
                  href="/decks"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  Decks
                </Link>
                <Link
                  href="/cards"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  Liste des cartes
                </Link>
                <div className="flex flex-row justify-center items-center gap-4 w-full">
                  <Link
                    href="https://twitch.tv/driinja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    <FaTwitch />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@driinja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    <FaTiktok />
                  </Link>
                  <Link
                    href="https://x.com/Driinja?t=BkkC5zc7iJ7kMxXeFB1bEg&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
