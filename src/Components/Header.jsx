import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-opacity-90 bg-[#2E8B57] backdrop-blur-lg shadow-md border-b-2 border-[#00F5D4] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
      
          <h3 className="text-xl font-bold text-black">
            <Link
              to="/"
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


