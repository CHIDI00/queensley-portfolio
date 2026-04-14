"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="w-full bg-[#3a5af8] pt-16 pb-16 lg:pt-24 lg:pb-20 mt-auto border-t border-[#E9E8E3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col">
          <Link href="/home" className="flex items-center gap-3 mb-10">
            <Image
              src="/QSSlogowhite.png"
              alt="Queensley"
              width={100}
              height={100}
              className="object-contain"
            />
            {/* <span className="text-2xl font-bold text-[#1A1A1A]">Queensley</span> */}
          </Link>

          <h2 className="text-5xl sm:text-[60px] lg:text-[64px] text-[#1A1A1A] leading-[1.05] tracking-[0.02em] mb-12">
            <span className="font-bold">Get Ready</span>{" "}
            <span className="font-light text-white font-sans">
              To Create
              <br />
              Great
            </span>
          </h2>

          {/* <div className="relative w-full max-w-sm border-b border-gray-300 pb-3 flex items-center">
            <input
              type="email"
              placeholder="Email Adress"
              className="w-full bg-transparent outline-none text-[#1A1A1A] placeholder-gray-500 text-[15px]"
            />
            <HiOutlineMail className="text-gray-800 text-xl absolute right-0" />
          </div> */}
        </div>

        {/* Middle Column: Quick Link */}
        <div className="lg:col-span-3 lg:col-start-7 flex flex-col">
          <h3 className="text-[22px] font-bold text-[#d1d1d1] mb-8">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-[#e1e1e1] transition-colors text-[16px] font-medium"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/thought_leadership"
                className="text-white hover:text-[#e1e1e1] transition-colors text-[16px] font-medium"
              >
                Thought Leadership
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-white hover:text-[#e1e1e1] transition-colors text-[16px] font-medium"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact */}
        <div className="lg:col-span-3 flex flex-col">
          <h3 className="text-[22px] font-bold text-[#d1d1d1] mb-8">Contact</h3>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
