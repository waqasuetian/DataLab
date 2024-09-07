import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-[999] bg-opacity-90 bg-[#1F3B4D] backdrop-blur-lg shadow-md border-b-[2px] border-[#00F5D4] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/Favicon/Favicon.png"
            alt="DataLabB Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-16"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#11F5D4]">
            <Link
              to={"/"}
              className="hover:text-[#7F78D2] transition-colors duration-300"
            >
              DataLabB Portfolio
            </Link>
          </h3>
        </div>
    </header>
  );
};

export default Header;

