/** @format */

import HeroImage1 from "../help_assets/woman_blue.svg";
import HeroImage2 from "../help_assets/father_son.svg";
import HeroImage3 from "../help_assets/woman_orange.svg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center p-20 bg-white ">
      {/* Left side */}
      <div className="flex-1 pr-10">
        <h1 className="text-6xl font-bold text-[#141414] mb-4">
          Show them <br /> Don't just tell
        </h1>
        <p className="text-[#000000BF] mb-6">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="text-white bg-[#120B48] px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
          Install HelpMeOut
        </button>
      </div>

      {/* Right side */}
      <div className="relative flex-1">
        {/* Background dots */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#e2e8f0" cx="10" cy="10" r="2"></circle>
            </pattern>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#dots)"
            ></rect>
          </svg>
        </div>

        {/* Images */}
        <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
          <div className="grid grid-rows-2 gap-4 rounded">
            <img src={HeroImage1} alt="small-image1" className="rounded" />

            <div className="relative rounded">
              {/* Dotted vector for image2 can be added here */}
              <img
                src={HeroImage2}
                alt="small-image2"
                className="relative z-10 rounded"
              />
            </div>
          </div>

          <div className="relative rounded">
            {/* Dotted vector for image3 can be added here */}
            <img
              src={HeroImage3}
              alt="larger-img"
              className="relative z-10 rounded h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
