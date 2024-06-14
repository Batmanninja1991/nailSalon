import React, { useState, useEffect } from "react";
import mobile from "../assets/mobileBackground.webp";
import desktop from "../assets/desktopBackground.webp";

const Hero = () => {
  const [bgImage, setBgImage] = useState(mobile);

  const handleResize = () => {
    if (window.innerWidth >= 700) {
      setBgImage(desktop);
    } else {
      setBgImage(mobile);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const parallaxElement = document.querySelector('.parallax::before');
    const scrollPosition = window.scrollY;
    parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-screen flex justify-center items-center text-center bg-cover bg-center pt-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-x-0 top-2 bottom-0 bg-black bg-opacity-60"></div>
      <div className="w-11/12 md:w-2/3 lg:w-1/2 relative z-10 text-white flex flex-col p-4">
        <h1 className="text-5xl font-bold -translate-y-16 animate-fade-in-down">
          Welcome to <br />Mint Nails Studio
        </h1>
      </div>
    </div>
  );
};

export default Hero;