import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineTrademark } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-pink-200">
      <div>
        <div className="py-6 twist">
          <h1 className="flex justify-center items-center text-[40px] font-mono tracking-tighter">
            Contact Us
          </h1>
          <div
            id="contact"
            className="flex justify-center items-center gap-8 py-6"
          >
            <a target="_blank" href="https://facebook.com/">
              <FaFacebook
                size={60}
                className="text-blue-600 hover:text-blue-500 hover:scale-125"
              />
            </a>
            <a target="_blank" href="https://instagram.com/mintnailzstudio">
              <FaInstagram
                size={60}
                className="text-red-500 hover:text-red-400 hover:scale-125"
              />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <FaTwitter
                size={60}
                className="text-blue-500 hover:text-blue-400 hover:scale-125"
              />
            </a>
          </div>
        </div>
        <hr className="border-pink-200 border-2" />
        <div className="flex flex-col items-center justify-center text-xl gap-16 py-16 font-medium font-mono tracking-tighter">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            className="hover:text-white"
          >
            <p>1234 Main St.</p>
          </a>
          <a
            href="tel:503-999-9999"
            target="_blank"
            className="hover:text-white"
          >
            <p>503-999-9999</p>
          </a>
          <a
            href="mailto:YourEmail@gmail.com"
            target="_blank"
            className="hover:text-white"
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
