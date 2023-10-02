/** @format */

import React from "react";
import ImgSrc1 from "../help_assets/Screenshot 2023-10-01 at 12.42.51 AM.png";
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Record Screen",
      description:
        'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
      imgSrc: ImgSrc1,
    },
    {
      number: 2,
      title: "Share Your Recording",
      description:
        "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
      imgSrc: ImgSrc1,
    },
    {
      number: 3,
      title: "Learn Effortlessly",
      description:
        "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
      imgSrc: ImgSrc1,
    },
  ];

  return (
    <section className="p-20 bg-white mt-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl pb-10 font-bold text-[#120B48]">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center mt-4">
        {steps.map((step) => (
          <div key={step.number} className="text-center relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-2xl  text-white  bg-[#120B48] rounded-full w-12 h-12 flex items-center justify-center">
              {step.number}
            </div>
            <h5 className="text-lg font-semibold mb-4 text-[#1B233D] pt-6">
              {step.title}
            </h5>
            <p className="mb-6 text-[#616163]">{step.description}</p>
            <img
              src={step.imgSrc}
              alt={step.title}
              className="mx-auto w-full h-auto border rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
