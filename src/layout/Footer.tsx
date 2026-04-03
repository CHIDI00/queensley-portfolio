"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="w-full border-t border-[#E9E8E3] bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#242633] text-lg font-semibold mb-2 tracking-tight">
              Queensley Sofuratu Seghosime, mni
            </h3>
            <p className="text-[#6c6e75] text-sm font-medium">
              Vice President, ICAN &middot; Tax Policy Strategist &middot;
              National Reformer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6c6e75] hover:text-[#2A2B33] transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-[#8e8f96] text-sm font-medium">
          &copy; {new Date().getFullYear()} Queensley Sofuratu Seghosime. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
