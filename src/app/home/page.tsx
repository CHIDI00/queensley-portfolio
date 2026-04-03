import React from "react";
import { VisionSection } from "@/sections/Home/VisionSection";
import { CurrentRolesSection } from "@/sections/Home/CurrentRolesSection";
import { ThoughtLeadershipSection } from "@/sections/Home/ThoughtLeadershipSection";
import { GallerySection } from "@/sections/Home/GallerySection";

const page = () => {
  return (
    <main className="min-h-dvh flex flex-col bg-[#FBF9F6] text-[#242633] overflow-x-hidden max-w-7xl mx-auto relative">
      <VisionSection />

      <CurrentRolesSection />

      <ThoughtLeadershipSection />

      <GallerySection />
    </main>
  );
};

export default page;
