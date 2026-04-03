"use client";

import React, { useState } from "react";
import Image from "next/image";

const filterOptions = ["All", "ICAN", "NIPSS", "OECD", "Excellence Dialogue"];

const galleryItems = [
  {
    id: 1,
    src: "/gallery-forum.jpg",
    categories: ["ICAN"],
    title: "Annual General Meeting",
    badge: "ICAN",
    aspect: "aspect-square",
  },
  {
    id: 2,
    src: "/gallery-award.jpg",
    categories: ["Excellence Dialogue"],
    title: "Mentoring the Next Generation",
    badge: "Excellence Dialogue",
    aspect: "aspect-[4/5]",
  },
  {
    id: 3,
    src: "/gallery-conference.jpg",
    categories: ["OECD"],
    title: "Global Tax Reform Panel",
    badge: "OECD",
    aspect: "aspect-[5/4]",
  },
  {
    id: 4,
    src: "/gallery-conference.jpg",
    categories: ["NIPSS"],
    title: "Strategic Policy Session",
    badge: "NIPSS",
    aspect: "aspect-square",
  },
  {
    id: 5,
    src: "/hero-portrait.jpg",
    categories: ["Excellence Dialogue"],
    title: "Leadership Symposium",
    badge: "Excellence Dialogue",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    src: "/gallery-forum.jpg",
    categories: ["ICAN"],
    title: "Fellowship Award",
    badge: "ICAN",
    aspect: "aspect-[5/4]",
  },
  {
    id: 7,
    src: "/gallery-mentoring.jpg",
    categories: ["Excellence Dialogue"],
    title: "Youth Mentorship",
    badge: "Excellence Dialogue",
    aspect: "aspect-[4/5]",
  },
  {
    id: 8,
    src: "/gallery-mentoring.jpg",
    categories: ["NIPSS"],
    title: "Executive Briefing",
    badge: "NIPSS",
    aspect: "aspect-square",
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = galleryItems.filter((item) =>
    activeFilter === "All" ? true : item.categories.includes(activeFilter),
  );

  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10">
          <span className="text-accent font-medium tracking-[0.15em] text-xs uppercase mb-4 block">
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1a1a1a] tracking-tight mb-8">
            Highlights
          </h1>

          {/* Badges/Filters */}
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-5 py-[6px] text-xs font-semibold rounded-full transition-colors border ${
                  activeFilter === option
                    ? "bg-[#a47b7b] text-white border-[#a47b7b]"
                    : "bg-transparent text-[#6b6b6b] border-[#e0e0e0] hover:border-[#a47b7b] hover:text-[#a47b7b]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative w-full ${item.aspect} break-inside-avoid rounded-[16px] overflow-hidden group cursor-pointer shadow-sm bg-[#f2f0eb]`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-5 md:p-7">
                <h3 className="text-white font-bold text-sm md:text-lg lg:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mb-2">
                  {item.title}
                </h3>
                <span className="inline-block px-3 py-[4px] bg-[#9dbca8] text-[#132c1f] text-[10px] md:text-xs font-bold rounded-full w-max translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms]">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
