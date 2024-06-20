import React, { useEffect, useState } from "react";
import bgImg from "../assets/purpleRock.jpg";
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
      className="relative w-full h-screen max-h-[800px] flex justify-center items-center text-center bg-no-repeat bg-cover lg:bg-bottom bg-centerpy-2 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
    </div>
  );
};

export default Hero;
