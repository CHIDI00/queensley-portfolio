"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  if (pathname === "/") return null;

  const links = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Thought Leadership", href: "/thought_leadership" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full flex backdrop-blur-xl border-b border-slate-200 fixed top-0 left-0 right-0 z-50 bg-background">
      <header className=" mx-auto w-full max-w-7xl px-6 md:px-12 py-5 flex justify-between items-center  ">
        <Link
          href="/"
          className="text-[#242633] font-bold text-xl tracking-tight z-50"
        >
          Queensley Sofuratu
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[#9E7A7A]"
                  : "text-[#717278] hover:text-[#242633]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        {/* <button
          className="md:hidden z-[1000] text-[#242633] hover:text-[#9e767b] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          )}
        </button> */}

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-1000 pointer-events-auto"
          aria-label="Toggle menu"
        >
          <div
            className={`h-[.15rem] w-7 bg-black transition-all duration-300 absolute ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          ></div>
          <div
            className={`h-[.15rem] w-7 bg-black transition-all duration-300 absolute ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
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
