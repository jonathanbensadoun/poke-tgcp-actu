"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:flex lg:justify-center lg:items-center">
      <div className="flex flex-row lg:flex-row items-center justify-between p-4 bg-gray-800 text-white lg:rounded-b-lg lg:w-4/5">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">Poké TCGP Actu</h1>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4 mx-auto">
          <Link href="#news" className="hover:text-gray-400">
            News
          </Link>
          <Link href="#deck" className="hover:text-gray-400">
            Deck
          </Link>
          <Link href="#cards" className="hover:text-gray-400">
            Liste des cartes
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href="https://www.twitch.tv"
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
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTiktok />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-end lg:hidden  bg-gray-800 text-white p-4 ">
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
          <div className="bg-gray-800 text-white w-1/3 flex p-4 rounded-bl-lg flex-col justify-center items-center ">
            <div className="block lg:hidden mt-4">
              <div className="flex flex-col  space-y-4 ">
                <Link href="#news" className="hover:text-gray-400">
                  News
                </Link>
                <Link href="#deck" className="hover:text-gray-400">
                  Deck
                </Link>
                <Link href="#cards" className="hover:text-gray-400">
                  Liste des cartes
                </Link>
                <div className="flex flex-row justify-center items-center gap-4 w-full">
                  <Link
                    href="https://www.twitch.tv"
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
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaTiktok />
                  </Link>
                  <Link
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaTwitter />
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
