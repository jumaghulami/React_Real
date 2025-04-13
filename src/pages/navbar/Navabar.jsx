import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className=" sticky  top-0 opacity-70">
      {/* Navbar Main */}
      <div className=" bg-gray-500 flex shadow-lg justify-between items-center px-5 md:px-20 py-4 ">
        <p className="text-2xl font-bold text-green-500">AyDaTECH❤️</p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navbar.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-gray-700 font-semibold hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden items-center bg-gray-400 py-4 gap-4">
          {navbar.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
