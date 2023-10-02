import React from "react";


import LogoIcon from "../help_assets/help_logo.svg";
import EditIcon from "../help_assets/edit.svg";
import videoPlaceholder from "../help_assets/video frame.png";
import ShareFacebook from "../help_assets/Facebook svg.svg";
import ShareWhatsApp from "../help_assets/whatsapp.svg"; 
import ShareTelegram from "../help_assets/telegram.svg"; 
import avatarPlaceholder from "../help_assets/profile-circle.png";

import ArrowDown from "../help_assets/arrow-down.png";

const SingleVideo = () => {
  return (
    <div className="h-screen bg-white p-20">
      {/* Header */}
      <header className="flex justify-between items-center mb-8  mt-0">
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
          <span className="mr-2 text-sm">John Mark</span>
          <span>
            <img src={ArrowDown} alt="" />
          </span>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="flex space-x-2 mb-4 text-sm">
        <span>Home</span> / <span>Recent Videos</span> /{" "}
        <span>How to create a Facebook Ad Listing</span>
      </nav>

      {/* Video Info */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl flex items-center space-x-2">
            How to create a Facebook Ad Listing
            <img
              src={EditIcon}
              alt="Edit video name"
              className="w-5 h-5 ml-4"
            />
          </h2>
        </div>
        <div className="p-4 border">
          <img src={videoPlaceholder} alt="Video" className="w-full" />
        </div>
      </div>

      {/* Share Info */}
      <div className="flex justify-between mb-4 gap-10">
        <div className="relative w-2/5 text-xs ">
          <input
            type="text"
            placeholder="Enter email of receiver"
            className="border p-4 bg-[#f1f0f4] rounded-lg w-full pr-16"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#bfbfce] text-white rounded-lg px-6 py-2 ">
            Send
          </button>
        </div>
        <div className="relative flex items-center w-3/5 space-x-2 text-xs">
          <input
            type="text"
            value="https://www.helpmeout/Untitled_Video_20232509"
            readOnly
            className="border overflow-hidden p-4 rounded-lg  bg-[#FAFAFA] flex-grow pr-16"
          />
          <button
            onClick={() => {}}
            className="absolute right-2 top-1/2 border-black transform -translate-y-1/2 rounded-lg border px-2 py-2"
          >
            Copy URL
          </button>
        </div>
      </div>

      <h4 className="text-sm mb-2 ">Share your video</h4>
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center space-x-2 border border-black p-2 rounded text-xs px-2">
          <img
            src={ShareFacebook}
            alt="Share to Facebook"
            className="w-4 h-4"
          />
          <span>Facebook</span>
        </button>
        <button className="flex items-center space-x-2 border border-black p-2 rounded text-xs px-2">
          <img
            src={ShareWhatsApp}
            alt="Share to WhatsApp"
            className="w-4 h-4"
          />
          <span>WhatsApp</span>
        </button>
        <button className="flex items-center space-x-2 border border-black p-2 rounded text-xs px-2">
          <img
            src={ShareTelegram}
            alt="Share to Telegram"
            className="w-4 h-4"
          />
          <span>Telegram</span>
        </button>
      </div>

      <div className="my-6">
        <h3 className="text-xl mb-2">Transcript</h3>
        <select className="mb-2 border p-2 rounded text-[#9D9D9D]">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum...
        </p>
      </div>
    </div>
  );
};

export default SingleVideo;
