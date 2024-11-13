"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", name: "Home" },
  { id: "packages", name: "Package" },
  { id: "about", name: "About" },
  { id: "gallery", name: "Gallery" },
  { id: "contact", name: "Contact" },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

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
        {sections.map((menu: any, i: number) => {
          return (
            <a
              key={i}
              href={`#${menu.id}`}
              className={`uppercase font-semibold text-sm sm:text-base text-white text-center w-full sm:w-auto sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all ease-linear hover:bg-green hover:shadow-md ${
                activeSection == menu.id ? "bg-green shadow-md" : ""
              }`}
            >
              {menu.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
