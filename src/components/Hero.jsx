import React, { useEffect, useState } from "react";
import bgImg from "../assets/goldResize.jpg";
import bgImgDesktop from "../assets/bgImg-2.png";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(bgImg);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth >= 700) {
        setBackgroundImage(bgImgDesktop);
      } else {
        setBackgroundImage(bgImg);
      }
    };

    window.addEventListener("resize", updateBackgroundImage);
    updateBackgroundImage();

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-[700px] flex justify-center text-center py-24 bg-center lg:bg-bottom bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute md:hidden inset-x-0 top-0 bottom-0 bg-black bg-opacity-60"></div>
      <div className="md:hidden w-11/12 md:w-2/3 lg:w-1/2 relative z-10 text-white flex flex-col p-4">
        <h1 className="text-5xl font-bold -translate-y-16 animate-fade-in-down roboto-slab-thin">
          Welcome to <br />
          Mint Nails Studio
        </h1>
      </div>
    </div>
  );
};

export default Hero;
