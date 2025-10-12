import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MadhuSangeet</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/courses" className="hover:text-yellow-400">Courses</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        <Link to="/demo" className="bg-yellow-400 text-purple-700 px-3 py-1 rounded hover:bg-yellow-300">
          Attend Free Demo
        </Link>
      </nav>
    </header>
  );
}

export default Header;
