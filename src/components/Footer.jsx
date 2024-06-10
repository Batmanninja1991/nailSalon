import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineTrademark } from "react-icons/ai";

AOS.init();

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-pink-200">
      <div>
        <div className="py-6">
          <h1 className="flex justify-center items-center text-[40px] font-mono tracking-tighter">
            Contact Us
          </h1>
          <div className="flex justify-center items-center gap-8 py-6">
            <a target="_blank" href="https://facebook.com/">
              <FaFacebook
                size={60}
                className="text-blue-600 hover:text-blue-500 twist"
              />
            </a>
            <a target="_blank" href="https://instagram.com/mintnailzstudio">
              <FaInstagram
                size={60}
                className="text-red-500 hover:text-red-400 twist"
              />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <FaTwitter
                size={60}
                className="text-blue-500 hover:text-blue-400 twist"
              />
            </a>
          </div>
        </div>
        <hr className="border-pink-200 border-2" />
        <div className="flex flex-col items-center justify-center text-xl gap-16 py-16 font-medium font-mono tracking-tighter">
          <a
            href="https://www.google.com/maps"
            className="hover:underline transition-all duration-200 delay-75 hover:scale-125"
          >
            <p>1234 Main St.</p>
          </a>
          <a
            href="tel:503-999-9999"
            className="hover:underline transition-all duration-200 delay-75 hover:scale-125"
          >
            <p>503-999-9999</p>
          </a>
          <a
            href="mailto:YourEmail@gmail.com"
            className="hover:underline transition-all duration-200 delay-75 hover:scale-125"
          >
            <p>YourEmail@gmail.com</p>
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
