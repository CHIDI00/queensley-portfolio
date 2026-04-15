"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  if (pathname === "/") return null;

  const links = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Thought Leadership", href: "/thought_leadership" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <div
      className={`w-full flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-0" : "bg-transparent py-0"
      }`}
    >
      <header className="mx-auto w-full px-6 md:px-12 py-5 flex justify-between items-center max-w-[1440px]">
        {/* Logo Section */}
        <Link href="/home" className="flex items-center gap-2 z-50">
          <Image
            src="/QSS Monogram Blue.png"
            alt="Queensley Sofuratu Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-semibold text-[#1A1A1A]">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[#3a73f8]"
                  : "hover:text-[#3a5af8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-2">
            <Link
              href="https://www.instagram.com/queensleyss/"
              className="w-10 h-10 rounded-full bg-[#ede5db] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/queensley-seghosime-028558176/"
              className="w-10 h-10 rounded-full bg-[#ede5db] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
            >
              <FaLinkedinIn size={14} />
            </Link>
            <Link
              href="https://x.com/QueensleySS"
              className="w-10 h-10 rounded-full bg-[#ede5db] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
            >
              <FaTwitter size={14} />
            </Link>
            <Link
              href="https://www.facebook.com/QueensleySS"
              className="w-10 h-10 rounded-full bg-[#ede5db] flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all"
            >
              <FaFacebookF size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 rounded-full bg-[#3a5af8] flex flex-col justify-center items-center relative z-[1000] gap-[4px]"
          aria-label="Toggle menu"
        >
          <div
            className={`h-[2px] w-4 bg-white transition-transform ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          ></div>
          <div
            className={`h-[2px] w-4 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`h-[2px] w-4 bg-white transition-transform ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          ></div>
        </button>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};
