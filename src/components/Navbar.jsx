import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold text-purple-700">MadhuSangeet</a>

        {/* Nav Buttons */}
        <div className="flex items-center gap-8">
          <a href="#home" className="text-lg font-bold px-5 py-3 hover:text-purple-600 transition duration-300">Home</a>
          <a href="#courses" className="text-lg font-bold px-5 py-3 hover:text-purple-600 transition duration-300">Courses</a>
          <a href="#about" className="text-lg font-bold px-5 py-3 hover:text-purple-600 transition duration-300">About</a>
          <a href="#contact" className="text-lg font-bold px-5 py-3 hover:text-purple-600 transition duration-300">Contact</a>
          <a href="#demoform" className="text-lg font-bold px-5 py-3 hover:text-purple-600 transition duration-300">DemoForm</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
