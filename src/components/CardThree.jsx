// CardThree.js
import React from "react";
import shock from "../assets/shock.png";
import "./style.css";

const CardThree = () => {
  return (
    <div className="relative w-full md:w-[777px] bg-gradient-to-r from-black to-Background flex flex-col md:flex-row justify-between items-center rounded-3xl overflow-hidden p-10">
      <div className="md:w-1/2 mb-6 md:mb-0 w-full">
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left ">
          Support for
        </h1>
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left ">
          popular
        </h1>
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left">
          the most
        </h1>
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left">
          libraries and
        </h1>
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left">
          code
        </h1>
        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-left">
          frameworks
        </h1>
      </div>
      <div className="md:w-1/3 ">
        <div className="bg-roundFour rounded-full h-96 w-96 flex items-center justify-center rotate-circle relative">
          <div className="bg-roundThree rounded-full h-80 w-80 flex items-center justify-center">
            <div className="bg-roundTwo rounded-full h-64 w-64 flex items-center justify-center">
              <div className="bg-roundOne rounded-full h-36 w-36 flex items-center justify-center">
                <img src={shock} className="h-20 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
