import React from "react";
import men from "../assets/men.jpg";
import woman from "../assets/woman.jpg";
import "./style.css";

const CardSix = () => {
  return (
    <div className="relative w-full md:w-[389px] h-[582px] ">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-BlueBackground to-white rounded-3xl px-8 py-6 flex flex-col justify-between">
        <div className="font-bold mt-10 ">
          <h1 className="text-2xl md:text-4xl">
            Need Support? Create Ticket 🙂
          </h1>
        </div>
        <div className="mt-10 text-sm md:text-sm">
          <div className="flex items-center mb-4">
            <img
              src={men}
              className="rounded-full w-10 h-10 md:w-14 md:h-14 mr-2"
            />
            <div className="bg-messageBg rounded-full p-2 md:p-3">
              <p>i needed updates for DMC Expert software.</p>
            </div>
          </div>
          <div className="flex items-center justify-end mb-4">
            <div className="bg-messageWoman rounded-full p-2 md:p-3">
              <p>All updates are automat</p>
            </div>
            <img
              src={woman}
              className="rounded-full w-10 h-10 md:w-14 md:h-14 ml-2"
            />
          </div>
          <div className="flex items-center mb-4">
            <img
              src={men}
              className="rounded-full w-10 h-10 md:w-14 md:h-14 mr-2"
            />
            <div className="bg-messageBg rounded-full p-2 md:p-3">
              <p>Sounds good. By the way, how cool is this Codeify app 🔥.</p>
            </div>
          </div>
          <div className="flex items-center justify-end mb-4">
            <div className="bg-messageWoman rounded-full p-2 md:p-3">
              <p>Oh gosh, it’s the greatest thing I’ve ever seen 😍</p>
            </div>
            <img
              src={woman}
              className="rounded-full w-10 h-10 md:w-14 md:h-14 ml-2"
            />
          </div>
          <div className="flex items-center">
            <img
              src={men}
              className="rounded-full w-10 h-10 md:w-14 md:h-14 mr-2"
            />
            <div className="bg-messageBg rounded-full p-2 md:p-3">
              <p>i know right, simply available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute rounded-3xl bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black opacity-60"></div>
    </div>
  );
};

export default CardSix;
