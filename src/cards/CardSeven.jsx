import React from "react";
import graphOne from "../assets/1.jpg";
import graphTwo from "../assets/2.jpg";
import graphThree from "../assets/3.jpg";
import "./style.css"

const CardSeven = () => {
  return (
    <div className="mt-10 lg:mt-0 w-full lg:w-[778px] h-[582px] bg-gradient-to-b from-black via-BlueBackground to-white rounded-3xl flex flex-col justify-between">
      <div className="text-white p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Automate repetitive
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          tasks in one click
        </h1>
        <p className="text-base md:text-lg">
          Create stunning, professional-quality websites in record time with our
          powerful UI kit. Elevate your SaaS business and succeed today!
        </p>
        <button className="bg-black text-white rounded-full px-4 py-2 font-bold mt-4">
          Get Started For Free
        </button>
      </div>
      <div className="overflow-hidden flex justify-between gap-4 md:gap-8 rounded-b-3xl">
        <img
          src={graphOne}
          className="w-full md:w-1/4 rounded-t-3xl rounded-b-3xl animate-marquee-left"
        />
        <img
          src={graphTwo}
          className="w-full md:w-1/4 rounded-t-3xl animate-marquee-left"
        />
        <img
          src={graphThree}
          className="hidden md:block w-full md:w-1/4 rounded-t-3xl rounded-b-3xl animate-marquee-left"
        />
        <img
          src={graphTwo}
          className="w-full md:w-1/4 rounded-b-3xl animate-marquee-left"
        />
      </div>
    </div>
  );
};

export default CardSeven;
