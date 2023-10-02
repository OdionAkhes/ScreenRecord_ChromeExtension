/** @format */

import React from "react";
import FeatureIcon1 from "../help_assets/record-circle.svg";
import FeatureIcon2 from "../help_assets/easy_share.svg";
import FeatureIcon3 from "../help_assets/revisit.svg";
import FeatureImage from "../help_assets/Video Repository.svg";

const Features = () => {
  return (
    <section id="features" className=" p-20 bg-white mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#120B48]">
          Features
        </h2>
        <p className="text-[#616163] tracking-wide mt-4">
          Key Highlights of our Extension
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <div className="flex-1 space-y-6  md:space-y-10 pr-0 sm:pr-10">
          <div className="flex items-start">
            <img
              src={FeatureIcon1}
              alt="Feature Icon"
              className="mr-4 bg-[#413C6D] rounded-full p-2"
            />
            <div>
              <h5 className="text-lg font-semibold text-[#1B233D]">
                Simple Screen Recording
              </h5>
              <p className="text-[#616163] tracking-wide">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img
              src={FeatureIcon2}
              alt="Feature Icon"
              className="mr-4 bg-[#413C6D] rounded-full p-2"
            />
            <div>
              <h5 className="text-lg font-semibold text-[#1B233D]">
                Easy-to-Share URL
              </h5>
              <p className="text-[#616163] tracking-wide">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img
              src={FeatureIcon3}
              alt="Feature Icon"
              className="mr-4 bg-[#413C6D] rounded-full p-2"
            />
            <div>
              <h5 className="text-lg font-semibold text-[#1B233D]">
                Revisit Recordings
              </h5>
              <p className="text-[#616163] tracking-wide">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 mb-8 sm:mb-0">
          <img
            src={FeatureImage}
            alt="Feature Presentation"
            className="rounded w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
