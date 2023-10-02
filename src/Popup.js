import React from 'react'
import LogoIcon from "./help_assets/help_logo.svg";
import SettingsIcon from "./help_assets/setting-2.svg";
import CancelIcon from "./help_assets/close-circle.svg";
import FullScreenIcon from "./help_assets/monitor.svg";
import CurrentTabIcon from "./help_assets/copy.svg";
import CameraIcon from "./help_assets/video-camera.svg";
import AudioIcon from "./help_assets/microphone.svg";
import Recorder from './Recorder';
const Popup = () => {
  return (
    <div className="p-8  bg-white rounded-2xl shadow-md space-y-6  h-auto">
      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <img src={LogoIcon} alt="logo" />
          <h1 className="text-xl font-bold text-[#0F172A] align-middle">
            HelpMeOut
          </h1>
        </div>
        <div className="space-x-2 align-middle">
          <button className="">
            <img src={SettingsIcon} alt="settings" className="w-5 h-5" />
          </button>
          <button className="">
            <img src={CancelIcon} alt="cancel" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-sm text-left  pr-5 text-[#413C6D]">
        This extension helps you record and share help videos with ease.
      </p>

      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center space-y-1">
          <img src={FullScreenIcon} alt="settings" className="h-8 w-8" />
          <p className="text-sm">Full screen</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <img src={CurrentTabIcon} alt="settings" className="h-8 w-8" />
          <p className="text-sm text-blueColor font-bold">Current Tab</p>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-blueColor border rounded-xl mt-4">
        <div className="flex items-center space-x-2">
          <img src={CameraIcon} alt="camera" className="w-6 h-6" />
          <p className="text-[#0F172A] text-sm">Camera</p>
        </div>
        <input type="checkbox" className="toggle " disabled checked />
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-blueColor border rounded-xl mt-4">
        <div className="flex items-center space-x-2">
          <img src={AudioIcon} alt="audio" className="w-6 h-6" />
          <p className="text-[#0F172A] text-sm">Audio</p>
        </div>
        <input type="checkbox" className="toggle " disabled checked />
      </div>
   <Recorder/>
    </div>
  );
}

export default Popup