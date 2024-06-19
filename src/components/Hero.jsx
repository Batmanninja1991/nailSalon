import React from "react";
import bgImg from "../assets/purpleRock.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-screen h-screen flex justify-center items-center text-center bg-cover bg-center bg-no-repeat pt-10"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-x-0 top-0 bottom-0 bg-black bg-opacity-60"></div>
      <div className="w-11/12 md:w-2/3 lg:w-1/2 relative z-10 text-white flex flex-col p-4">
        <h1 className="text-5xl font-bold -translate-y-16 animate-fade-in-down roboto-slab-thin">
          Welcome to <br />
          Mint Nails Studio
        </h1>
      </div>
    </div>
  );
};

export default Hero;
