/** @format */

import React from "react";


import LogoIcon from "../help_assets/help_logo.svg";
import avatarPlaceholder from "../help_assets/profile-circle.png";
import videoPlaceholder from "../help_assets/video frame.png"; 
import ArrowDown from "../help_assets/arrow-down.png"
import SearchIcon from "../help_assets/search-normal.png"
import icon1 from "../help_assets/link.png";
import icon2 from "../help_assets/more.png";

const VideoRepository = () => {
  return (
    <div className=" h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 pt-10  px-20">
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
        <div className="flex items-center">
          <img
            src={avatarPlaceholder}
            alt="John Mark"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="mr-2">John Mark</span>
          <span>
            <img src={ArrowDown} alt="" />
          </span>
        </div>
      </header>

 
      <div className="flex justify-between items-center mb-6 px-20">
        <div>
          <h1 className="text-2xl mb-1 font-bold tracking-wide">
            Hello, John Mark
          </h1>
          <p className="text-[#141414B2] text-sm">
            Here are your recorded videos
          </p>
        </div>
        <div className="relative w-2/5 ]">
          <input
            type="text"
            placeholder="Search for a particular video"
            className="border p-4 rounded-lg pl-8 w-full bg-[#E7E7ED] text-[bg-[#E7E7ED] text-sm"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <img src={SearchIcon} alt="" />
          </span>{" "}
          {/* Replace with your search icon */}
        </div>
      </div>
      <hr className="my-2 " />
      {/* Video Files Section */}
      <section className="px-20 mt-6">
        <h2 className="mb-4">Recent Files</h2>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <VideoCard />
          <VideoCard />
        </div>

        <h2 className="mb-4">Files from Last Week</h2>
        {/* You can duplicate <VideoCard /> as many times as you need for the number of files */}
        <div className="grid grid-cols-2 gap-8">
          <VideoCard />
          <VideoCard />
          {/* ... */}
        </div>
      </section>
    </div>
  );
};

const VideoCard = () => {
  return (
    <div className="p-3 border rounded-xl relative  bg-[#fdfdfd]">
      <img
        src={videoPlaceholder}
        alt="Video thumbnail"
        className="w-full mb-2"
      />
      <div className="flex justify-between items-center mb-1">
        <span>Video Name</span>
        <div className="flex gap-2">
          <img src={icon1} alt="Icon 1" className="w-4 h-4 mr-2" />
          <img src={icon2} alt="Icon 2" className="w-4 h-4" />
        </div>
      </div>
      <p className="text-xs text-[#B6B3C6]">SEPTEMBER 23, 2023</p>
    </div>
  );
};

export default VideoRepository;
