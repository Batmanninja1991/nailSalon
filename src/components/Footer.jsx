import React from "react";
import { AiOutlineTrademark } from "react-icons/ai";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="w-full h-full bg-black text-pink-200">
      <div className="p-4">
        {/*
        <div className="py-6 twist">
          <h1 className="flex justify-center items-center text-[40px] font-mono tracking-tighter">
            Contact Us
          </h1>
          <div
            id="contact"
            className="flex justify-center items-center gap-8 py-6"
          >
            <a target="_blank" href="https://instagram.com/mintnailzstudio" rel="noopener noreferrer">
        <FaInstagram
          size={60}
          className="text-pink-600 hover:text-pink-500 hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a target="_blank" href="https://www.youtube.com/@Melodymintnailstudio" rel="noopener noreferrer">
        <FaYoutube
          size={60}
          className="text-red-600 hover:text-red-500 hover:scale-110 transition-transform duration-300"
        />
      </a>
          </div>
        </div>
        <hr className="border-pink-200 border-2" />
        */}
        <div className="flex flex-col items-center justify-center text-xl gap-16 py-16 font-medium font-mono tracking-tighter">
          <a
            href="https://www.google.com/maps/place/Portland,+OR/@45.5425955,-122.8192068,11z/data=!3m1!4b1!4m6!3m5!1s0x54950b0b7da97427:0x1c36b9e6f6d18591!8m2!3d45.515232!4d-122.6783853!16s%2Fm%2F02frhbc?entry=ttu"
            target="_blank"
            className="hover:text-white"
          >
            <p>Portland, Oregon</p>
          </a>
          <a
            href="tel:949-338-1743"
            target="_blank"
            className="hover:text-white"
          >
            <p>949-338-1743</p>
          </a>
          <a
            href="mailto:rylocan2@gmail.com"
            target="_blank"
            className="hover:text-white"
          >
            <p>rylocan2@gmail.com</p>
          </a>
        </div>
        <hr className="border-pink-200 border-1" />
        <div className="flex items-center justify-center gap-1 py-4 font-mono tracking-tighter">
          <p>All Rights Reserved</p>
          <AiOutlineTrademark size={15} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
