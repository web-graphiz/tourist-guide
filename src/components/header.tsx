"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed left-0 right-0 py-4 z-50 bg-black bg-opacity-50">
      <div className="px-4 flex sm:hidden justify-end">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="cursor-pointer"
        >
          <svg
            width="80"
            height="56"
            viewBox="0 0 80 56"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white w-8 h-8"
          >
            <path d="M4 8H76C78.209 8 80 6.209 80 4C80 1.791 78.209 0 76 0H4C1.791 0 0 1.791 0 4C0 6.209 1.791 8 4 8ZM76 24H4C1.791 24 0 25.791 0 28C0 30.209 1.791 32 4 32H76C78.209 32 80 30.209 80 28C80 25.791 78.209 24 76 24ZM76 48H4C1.791 48 0 49.791 0 52C0 54.209 1.791 56 4 56H76C78.209 56 80 54.209 80 52C80 49.791 78.209 48 76 48Z" />
          </svg>
        </button>
      </div>
      <nav
        className={`${
          toggleMenu ? "flex" : "hidden sm:flex"
        } mt-2 sm:mt-0 gap-3 sm:gap-5 lg:gap-10 flex-col sm:flex-row justify-center items-center`}
      >
        <a
          href="#home"
          className="uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all bg-green shadow-md"
        >
          Home
        </a>
        <a
          href="#packages"
          className="uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all hover:bg-green hover:shadow-md"
        >
          Packages
        </a>
        <a
          href="#about"
          className="uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all hover:bg-green hover:shadow-md"
        >
          About
        </a>
        <a
          href="#gallery"
          className="uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all hover:bg-green hover:shadow-md"
        >
          Gallery
        </a>

        <a
          href="#contact"
          className="uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 hover:bg-green rounded-2xl transition-all hover:shadow-md"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
