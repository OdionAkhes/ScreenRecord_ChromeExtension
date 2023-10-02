/** @format */
import React from "react";
import FacebookIcon from "../help_assets/Facebook svg.svg";
import GoogleIcon from "../help_assets/Google svg.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className=" p-10 w-[475px]">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Log in or Sign Up
        </h1>
        <p className="text-[#434343] text-center mb-6 max-w-xs items-center flex justify-center mx-auto">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <button className="flex justify-center items-center bg-transparent border border-gray-500 hover:bg-gray-100 text-[#141414] py-2 px-4 w-full rounded-lg mb-5 gap-3">
          <img src={GoogleIcon} alt="Google Icon" className="mr-2" />
          Continue with Google
        </button>
        <button className="flex justify-center items-center bg-transparent border border-gray-500 hover:bg-gray-100 text-[#141414] py-2 px-4 w-full rounded-lg mb-6 gap-3 ">
          <img src={FacebookIcon} alt="Facebook Icon" className="mr-2" />
          Continue with Facebook
        </button>
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-t border-gray-400 mx-2" />
          <span className="text-gray-600">or</span>
          <hr className="flex-grow border-t border-gray-400 mx-2" />
        </div>
        <label className="block text-gray-700 mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="border p-2 w-full mb-3 rounded-lg"
        />
        <label className="block text-gray-700 mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          className="border p-2 w-full mb-4 rounded-lg"
        />
        <button className="bg-[#120B48] text-white py-2 px-4 w-full rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
