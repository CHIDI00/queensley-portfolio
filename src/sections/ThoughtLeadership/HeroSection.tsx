import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-32 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6">
          <span className="text-accent font-medium tracking-[0.15em] text-xs uppercase">
            Leadership Series
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-medium  text-[#2d2d2d] leading-[1.05] tracking-tight">
            The Excellence
            <br />
            Dialogue.
          </h1>
          <p className="text-[#6b6b6b] text-lg md:text-[16px] leading-relaxed max-w-xl mt-6 text-balance">
            A bi-monthly leadership series curated by Queensley Sofuratu
            Seghosime. These sessions dissect modern governance, strategic
            institutional reform, and the pursuit of operational excellence
            within public service.
          </p>
          <Link
            href="/thought-leadership/archive"
            className="mt-8 inline-flex flex-row items-center justify-center bg-[#565555] hover:bg-[#3f3f3f] text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
          >
            <span>Explore Archive</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/gallery-award.jpg"
            alt="Gallery Award"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
