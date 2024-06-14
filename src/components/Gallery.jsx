import React from "react";
import img from "../assets/goldResize.jpg";
import img2 from "../assets/limeFlowersResize2.jpg";
import img3 from "../assets/purpleResize.jpg";
import img4 from "../assets/whiteFlowers.jpg";
import img5 from "../assets/lime.jpg";
import img6 from "../assets/orange.jpg";
import img7 from "../assets/purpleRock.jpg";
import img8 from "../assets/rainbow.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Gallery = () => {
  const openImage = (src) => {
    window.open(src, "_blank");
  };

  return (
    <div
      id="gallery"
      className="w-full h-full flex flex-col justify-center items-center pt-10"
    >
      <div>
        <h1 className="text-[30px] md:text-[32px] roboto-slab-thin pb-8">
          Gallery
        </h1>
      </div>
      <div className="scrollbar-thiner flex w-11/12 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 gap-4 pb-6">
        <img
          src={img}
          onClick={() => openImage(img)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Gold Nails"
        />
        <img
          src={img2}
          onClick={() => openImage(img2)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Lime Flowers"
        />
        <img
          src={img3}
          onClick={() => openImage(img3)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Purple"
        />
        <img
          src={img4}
          onClick={() => openImage(img4)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="White Flowers"
        />
        <img
          src={img5}
          onClick={() => openImage(img5)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Lime"
        />
        <img
          src={img6}
          onClick={() => openImage(img6)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Orange"
        />
        <img
          src={img7}
          onClick={() => openImage(img7)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Purple Rock"
        />
        <img
          src={img8}
          onClick={() => openImage(img8)}
          className="lg:max-w-[500px] max-w-[400px] h-auto rounded-xl border-black border-2 cursor-pointer"
          alt="Rainbow"
        />
      </div>
      <p className="flex justify-center items-center  gap-2 md:hidden">
        <AiOutlineArrowLeft />
        Scroll <AiOutlineArrowRight />
      </p>
    </div>
  );
};

export default Gallery;
