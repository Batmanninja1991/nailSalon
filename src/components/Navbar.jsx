import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="w-full h-full" ref={menuRef}>
      <div className="flex justify-between items-center w-full h-[100px] bg-white border-b border-black px-6">
        {openMenu ? (
          <AiOutlineClose
            size={30}
            onClick={handleClick}
            className="md:hidden"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={handleClick}
            className="md:hidden"
          />
        )}
        <h1 className="md:hidden text-pink-400 text-[36px] leading-none text-center caveat">
          Mint Nails Studio
        </h1>
        <ul className="hidden md:flex gap-2 md:text-[18px] roboto-slab-thin">
          <a href="#">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 hover:bg-black hover:text-white transition-all duration-300 rounded-full py-2 px-6"
            >
              Home
            </li>
          </a>
          <a href="#gallery">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 hover:bg-black hover:text-white transition-all duration-300 rounded-full py-2 px-6"
            >
              Gallery
            </li>
          </a>
          <a href="#prices">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 hover:bg-black hover:text-white transition-all duration-300 rounded-full py-2 px-6"
            >
              Prices
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 hover:bg-black hover:text-white transition-all duration-300 rounded-full py-2 px-6"
            >
              Contact Us
            </li>
          </a>
        </ul>
        <button
          onClick={handleCloseMenu}
          className="rounded-2xl text-white bg-black hover:bg-black/70 px-6 py-2 hover:scale-105 transition-all duration-200 delay-100"
        >
          Book Now
        </button>
      </div>
      <div
        className={`fixed top-[100px] left-0 w-full md:w-1/2 bg-white border-b border-black transition-transform duration-300 z-50 ${
          openMenu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6">
          <a href="#">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 transition-all duration-300 py-2"
            >
              Home
            </li>
          </a>
          <a href="#gallery">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 transition-all duration-300 py-2"
            >
              Gallery
            </li>
          </a>
          <a href="#prices">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 transition-all duration-300 py-2"
            >
              Prices
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={handleCloseMenu}
              className="hover:underline hover:scale-105 transition-all duration-300 py-2"
            >
              Contact Us
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
