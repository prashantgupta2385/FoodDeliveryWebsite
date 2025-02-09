import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenu(location.pathname === "/" ? "home" : location.pathname.replace("/", ""));
  }, [location]);

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`; // Redirect to home with hash
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="Logo" className="w-24 cursor-pointer" />
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={assets.menu_icon} alt="Menu" className="w-6" />
      </button>

      {/* Navigation */}
      <ul className={`absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto flex flex-col md:flex-row items-center md:space-x-6 text-gray-700 font-semibold transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden md:flex"}`}>
        <li className={`cursor-pointer px-4 py-2 ${menu === "home" ? "text-blue-500" : "hover:text-blue-400"}`}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={`cursor-pointer px-4 py-2 ${menu === "menu" ? "text-blue-500" : "hover:text-blue-400"}`} onClick={() => handleScroll("menu")}>
          Menu
        </li>
        <li className={`cursor-pointer px-4 py-2 ${menu === "mobile-app" ? "text-blue-500" : "hover:text-blue-400"}`} onClick={() => handleScroll("mobile-app")}>
          Mobile App
        </li>
        <li className={`cursor-pointer px-4 py-2 ${menu === "contact-us" ? "text-blue-500" : "hover:text-blue-400"}`} onClick={() => handleScroll("contact-us")}>
          Contact Us
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.bag_icon} alt="Cart" className="w-6 cursor-pointer" />
            {/* Cart quantity indicator */}
            <span className="absolute -top-1 -right-1 bg-[#FF6347] text-white text-xs px-2 py-0.5 rounded-full">
              {Object.values(cartItems).reduce((acc, quantity) => acc + (quantity > 0 ? 1 : 0), 0)}
            </span>
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition hidden md:block">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
