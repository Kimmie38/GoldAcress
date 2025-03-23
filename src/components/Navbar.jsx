"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logogo.svg" alt="Gold Acres Logo" width={100} height={100} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="text-xl hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/more" className="text-xl hover:text-yellow-400" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link href="/contact" className="text-xl hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link href="/gallery" className="text-xl hover:text-yellow-400" onClick={() => setIsOpen(false)}>Gallery</Link>
        <button className="text-lg bg-yellow-500 px-6 py-2 rounded-md" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </nav>
  );
};

export default Navbar;
