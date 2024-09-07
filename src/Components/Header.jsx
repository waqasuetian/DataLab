import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-opacity-90 bg-[#2E8B57] backdrop-blur-lg shadow-md border-b-2 border-[#00F5D4] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/Favicon/Favicon.png"
            alt="DataLabB Logo"
            className="h-10"
          />
          <h3 className="text-xl font-bold text-white">
            <Link
              to="/"
              className="hover:text-[#7F78D2] transition-colors duration-300"
            >
              DataLabB Portfolio
            </Link>
          </h3>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/projects"
            className="text-lg font-medium text-white hover:text-[#7F78D2] transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-white hover:text-[#7F78D2] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-white hover:text-[#7F78D2] transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


