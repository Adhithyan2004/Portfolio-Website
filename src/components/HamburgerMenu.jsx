import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const navigate = useNavigate();

  const handleNavCnt = () => {
    navigate("/contact");
  };

  const handleNavWrk = () => {
    navigate("/projects");
  };

  const handleNavHome = () => {
    navigate("/");
  };

  const handleNavAbt = () => {
    navigate("/about");
  };

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
    <div className="relative z-50" ref={menuRef}>
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
            className="text-primary hover:text-yellow-600 transition-colors"
            onClick={handleNavAbt}
          >
            About Me
          </a>
          <a
            className="text-primary hover:text-yellow-600 transition-colors"
            onClick={handleNavWrk}
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/adhithyan-banugoban-5b1515288/"
            target="_blank"
            rel="nooopener noreferrer"
            className="text-primary hover:text-yellow-600 transition-colors"
          >
            Linkedin
          </a>
          <a
            href="https://www.behance.net/adhithybanugob"
            target="_blank"
            rel="nooopener noreferrer"
            className="text-primary hover:text-yellow-600- transition-colors"
          >
            Behance
          </a>
          <a
            onClick={handleNavCnt}
            className="text-primary hover:text-yellow-600- transition-colors"
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
