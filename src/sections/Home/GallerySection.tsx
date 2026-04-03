import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { AnimatedText } from "@/ui/AnimatedText";

export const GallerySection = () => {
  const galleryItems = [
    { src: "/hero-portrait.jpg", label: "Executive Symposium 2026" },
    { src: "/hero-portrait.jpg", label: "ICAN Awards Night" },
    { src: "/hero-portrait.jpg", label: "Fiscal Policy Panel" },
    { src: "/hero-portrait.jpg", label: "Mentorship Masterclass" },
    { src: "/hero-portrait.jpg", label: "Community Outreach" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-16">
      <AnimatedText
        delay={0.1}
        as="p"
        className="text-sm font-medium tracking-[3px] text-accent uppercase mb-4"
      >
        Gallery
      </AnimatedText>

      <AnimatedText
        delay={0.2}
        as="h2"
        className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#242633] tracking-[-0.03em] mb-10"
      >
        Latest Highlights
      </AnimatedText>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 md:gap-6 mb-12 grid-flow-row-dense">
        {galleryItems.map((item, idx) => (
          <AnimatedText
            delay={0.3 + idx * 0.1}
            key={idx}
            className={`w-full h-full ${
              idx === 1
                ? "col-span-2 row-span-1 md:col-span-2 md:row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <Image
                src={item.src}
                alt={`Queensley Sofuratu gallery highlight ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes={
                  idx === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white font-bold text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </h3>
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={0.7}>
        <Link
          href="/gallery"
          className="group flex items-center gap-2 text-[14px] font-medium text-accent hover:text-[#866266] transition-colors w-max"
        >
          View full gallery
          <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedText>
    </section>
  );
};
