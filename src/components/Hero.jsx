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
      className="relative w-full h-[650px] flex justify-center items-center text-center bg-no-repeat bg-cover bg-center lg:bg-bottom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
};

export default Hero;
