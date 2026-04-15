import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex items-center md:justify-start justify-center gap-6 mt-12 pb-12">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
      >
        <FaXTwitter size={18} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
};
