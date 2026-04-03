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
          href="/home"
          className="text-[#242633] font-light italic  text-xl tracking-tight z-50"
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
