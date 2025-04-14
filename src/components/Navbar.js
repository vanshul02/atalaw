import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 sticky top-0 z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-900">ATA Law Partners</h1>
      <div className="space-x-6 hidden md:block">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#practice" className="hover:text-blue-600">Practice Areas</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;