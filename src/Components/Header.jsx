import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex space-x-5 items-center text-black sticky top-0 z-[999] md:border-b-[2px] border-b-[1px] border-black md:p-1 backdrop-blur-sm border-dashed">
      <img
        src="/Favicon/Favicon.png"
        alt="DataLabB Logo"
        className="h-12 sm:h-12 md:h-16 lg:20 bg-blend-multiply"
      />
      <h3 className="text-center text-sm sm:text-sm md:text-md lg:text-lg font-semibold px-5">
        <Link to={"/"} className="Name">DataLabB Portfolio</Link>
      </h3>
    </div>
  );
};

export default Header;
