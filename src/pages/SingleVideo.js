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
    <div className="h-screen bg-white p-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 pt-10 px-20">
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

      {/* Breadcrumbs */}
      <nav className="flex space-x-2 mb-8 text-sm">
        <span>Home</span> / <span>Recent Videos</span> /{" "}
        <span>How to create a Facebook Ad Listing</span>
      </nav>

      {/* Video Info */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl flex items-center space-x-2">
            How to create a Facebook Ad Listing
            <img src={EditIcon} alt="Edit video name" />
          </h2>
        </div>
        <div className="p-4 border">
          <img src={videoPlaceholder} alt="Video" className="w-full" />
        </div>
      </div>

      {/* Share Info */}
      <div className="flex justify-between mb-4">
        <div className="relative w-2/5">
          <input
            type="text"
            placeholder="Enter email of receiver"
            className="border p-2 rounded-lg w-full pr-16"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded px-4 py-1">
            Send
          </button>
        </div>
        <div className="relative flex items-center w-2/5 space-x-2">
          
          <input
            type="text"
            value="http://example.com/video"
            readOnly
            className="border p-2 rounded-lg flex-grow pr-16"
          />
          <button
            onClick={() => {}}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded border px-2 py-1"
          >
            Copy URL
          </button>
        </div>
      </div>


          
      <h3 className="text-xl mb-2">Share your video:</h3>
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center space-x-2 border p-2 rounded">
          <img src={ShareFacebook} alt="Share to Facebook" />
          <span>Facebook</span>
        </button>
        <button className="flex items-center space-x-2 border p-2 rounded">
          <img src={ShareWhatsApp} alt="Share to WhatsApp" />
          <span>WhatsApp</span>
        </button>
        <button className="flex items-center space-x-2 border p-2 rounded">
          <img src={ShareTelegram} alt="Share to Telegram" />
          <span>Telegram</span>
        </button>
      </div>


      <div className="mb-6">
        <h3 className="text-xl mb-2">Transcript</h3>
        <select className="mb-2">
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
