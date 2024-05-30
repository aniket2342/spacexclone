import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/home/logo (2).png'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className=" p-4 flex fixed left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Flowbite Logo" />
        </a>
        <div className="hidden md:flex space-x-4">
          <Link to="/falcon9" className="text-white text-xs font-bold">FALCON 9</Link>
          <Link to="/falconheavy" className="text-white text-xs font-bold">FALCON HEAVY</Link>
          <Link to="/dragon" className="text-white text-xs font-bold">DRAGON</Link>
          <Link to="/starship" className="text-white text-xs font-bold">STARSHIP</Link>
          <a href="#humanspaceflight" className="text-white text-xs font-bold">HUMAN SPACEFLIGHT</a>
          <a href="#rideshare" className="text-white text-xs font-bold">RIDESHARE</a>
          <a href="#starshield" className="text-white text-xs font-bold">STARSHIELD</a>
          <a href="#shop" className="text-white text-xs font-bold">SHOP</a>
          <a href="#starlink" className="text-white text-xs font-bold">STARLINK</a>
        </div>
        
        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link to="/falcon9" className="block text-white py-2">FALCON 9</Link>
          <Link to="/falconheavy" className="block text-white py-2">FALCON HEAVY</Link>
          <Link to="/dragon" className="block text-white py-2">DRAGON</Link>
          <Link to="/starship" className="block text-white py-2">STARSHIP</Link>
          <a href="#humanspaceflight" className="block text-white py-2">HUMAN SPACEFLIGHT</a>
          <a href="#rideshare" className="block text-white py-2">RIDESHARE</a>
          <a href="#starshield" className="block text-white py-2">STARSHIELD</a>
          <a href="#shop" className="block text-white py-2">SHOP</a>
          <a href="#starlink" className="block text-white py-2">STARLINK</a>
        </div>
      )}
    </nav>
    
    </>
  )
}

export default Navbar