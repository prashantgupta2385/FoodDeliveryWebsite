import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {navigate}=useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
  const handler=(item)=>{
    setMenu(item)
    navigate(`/${item}`)
    

  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-24" />

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={assets.menu_icon} alt="Menu" className="w-6" />
      </button>

       {/* Navigation */}
       <ul className={`absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto flex flex-col md:flex-row items-center md:space-x-6 text-gray-700 font-semibold transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden md:flex"}`}>
        <li 
          className={`cursor-pointer px-4 py-2 ${menu === "home" ? "text-blue-500" : "hover:text-blue-400"}`}
          onClick={()=> handler('')}
        >
          Home
        </li>
        <li 
          className={`cursor-pointer px-4 py-2 ${menu === "menu" ? "text-blue-500" : "hover:text-blue-400"}`}
          onClick={()=> handler('menu')}
        >
          Menu
        </li>
        <li 
          className={`cursor-pointer px-4 py-2 ${menu === "mobile-app" ? "text-blue-500" : "hover:text-blue-400"}`}
        onClick={()=> handler("mobile-app")}
        >
          Mobile App
        </li>
        <li 
          className={`cursor-pointer px-4 py-2 ${menu === "contact-us" ? "text-blue-500" : "hover:text-blue-400"}`}
            onClick={() => handler("contact-us")}  
        >
          Contact Us
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
        <div className="relative">
          <img src={assets.bag_icon} alt="Cart" className="w-6 cursor-pointer" />
          {/* Cart quantity indicator */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
        </div>
        <button  onClick={()=>{
          setShowLogin(true)
          
          }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition hidden md:block">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;