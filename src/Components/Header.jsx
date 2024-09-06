import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-[999] md:border-b-[2px] border-b-[1px] border-white md:p-2 backdrop-blur-md border-dashed bg-opacity-80 bg-[#1F3B4D]">
      <div className="flex items-center space-x-4">
        <img
          src="/Favicon/Favicon.png"
          alt="DataLabB Logo"
          className="h-10 sm:h-12 md:h-16 lg:h-20"
        />
        <h3 className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#00F5D4]">
          <Link to={"/"} className="hover:text-[#7F78D2] transition-colors duration-300">
            DataLabB Portfolio
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
