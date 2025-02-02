import React, { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  //to handle toggling  the menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  // Close hammenu whe touch outside
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Close hammenu when scrolled outside r anywhere
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-between w-8 h-6 z-10 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span
          className={`block w-full h-1 bg-secondary rounded transition-transform ${
            menuOpen ? "translate-y-3 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-1 bg-secondary rounded transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-1 bg-secondary rounded transition-transform ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Menu Options */}
      {menuOpen && (
        <div className="absolute top-10 right-0 bg-secondary shadow-lg w-[120px] rounded-lg p-4 flex flex-col gap-3">
          <a
            href="#option1"
            className="text-primary hover:text-gray-600 transition-colors"
          >
            About
          </a>
          <a
            href="#option2"
            className="text-primary hover:text-gray-600 transition-colors"
          >
            News
          </a>
          <a
            href="#option3"
            className="text-primary hover:text-gray-600 transition-colors"
          >
            Ask Tamriel
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
