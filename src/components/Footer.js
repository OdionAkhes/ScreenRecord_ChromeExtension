/** @format */

import React from "react";
import LogoIcon from "../help_assets/help_logo.svg";

const Footer = () => {
  return (
    <footer className="text-white footer pt-16 pb-16 pl-20 pr-10 bg-[#120B48]  ">
      <aside>
        <div className="flex items-center space-x-2 mr-0">
          <img src={LogoIcon} alt="logo" />
          <h1 className="text-white font-bold align-middle">HelpMeOut</h1>
        </div>
      </aside>
      <nav>
        <header className=" capitalize text-white font-semibold">Menu</header>
        <div className="link link-hover">Home</div>
        <div className="link link-hover">Converter</div>
        <div className="link link-hover">How it Works</div>
      </nav>
      <nav className="">
        <header className="capitalize text-white font-semibold">
          About us
        </header>
        <div className="link link-hover">About</div>
        <div className="link link-hover">Contact Us</div>
        <div className="link link-hover">Privacy Policy</div>
      </nav>
      <nav>
        <header className="font-semibold capitalize text-white">
          Screen Record
        </header>
        <div className="link link-hover">Browser Window</div>
        <div className="link link-hover">Desktop</div>
        <div className="link link-hover">Application</div>
      </nav>
    </footer>
  );
};

export default Footer;
