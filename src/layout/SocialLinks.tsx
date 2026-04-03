import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-12 pb-12">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
      >
        <FaXTwitter size={18} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
};
