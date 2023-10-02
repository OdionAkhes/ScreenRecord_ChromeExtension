/** @format */

import React from "react";
import LogoIcon from "../help_assets/help_logo.svg";

const Header = () => {
  return (
    <header className="bg-white px-4 sm:px-20 py-4 flex flex-wrap justify-between items-center shadow-md border">
      <div className="flex items-center space-x-2">
        <img
          src={LogoIcon}
          alt="logo"
          className="w-8 h-8 sm:w-auto sm:h-auto"
        />
        <h1 className="text-sm sm:text-xl font-bold text-[#0F172A] align-middle">
          HelpMeOut
        </h1>
      </div>
      <nav className="hidden sm:flex space-x-5 mt-4 sm:mt-0">
        <p className="text-[#120B48] hover:text-blue-400">Features</p>
        <p className="text-[#120B48] hover:text-blue-400">How It Works</p>
      </nav>
      <button className="text-sm sm:text-base text-[#120B48] px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-900 hover:text-white transition duration-300 mt-4 sm:mt-0">
        Get Started
      </button>
    </header>
  );
};

export default Header;
