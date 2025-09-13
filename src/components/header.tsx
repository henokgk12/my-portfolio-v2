import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="font-bold text-xl">Henok G.</span>
        <div className="space-x-4">
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
