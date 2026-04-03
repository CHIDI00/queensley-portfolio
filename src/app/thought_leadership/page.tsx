import React from "react";
import HeroSection from "@/sections/ThoughtLeadership/HeroSection";
import Articles from "@/sections/ThoughtLeadership/Articles";
import JournalsPublicationsSection from "@/sections/ThoughtLeadership/JournalsPublicationsSection";

const ThoughtLeadershipPage = () => {
  return (
    <main className="bg-background min-h-dvh max-w-360 mx-auto">
      <HeroSection />
      <Articles />
      <JournalsPublicationsSection />
    </main>
  );
};

export default ThoughtLeadershipPage;
