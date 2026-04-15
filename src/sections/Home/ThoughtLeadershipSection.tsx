import React from "react";
import { AnimatedText } from "@/ui/AnimatedText";
import { ThoughtCard } from "@/ui/ThoughtCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const ThoughtLeadershipSection = () => {
  const posts = [
    {
      // TODO: Replace with the actual images shown in the design
      imageSrc: "/qssintegrity.jpg",
      tag: "Leadership",
      title: "Integrity in Public Financial Management",
      date: "March 2026",
    },
    {
      imageSrc: "/image1.png",
      tag: "Policy",
      title: "Tax Reform and Nigeria's Economic Future",
      date: "January 2026",
    },
    {
      imageSrc: "/image.png",
      tag: "Mentorship",
      title: "Mentoring the Next Generation of Accountants",
      date: "November 2025",
    },
  ];

  return (
    <section className="w-full max-w-8xl mx-auto px-6 md:px-12 py-12 lg:py-16">
      <div className="border-t border-b border-[#E9E8E3] py-16 lg:py-24">
        <AnimatedText
          delay={0.1}
          as="p"
          className="text-sm font-medium tracking-[3px] text-[#3a5af8] uppercase mb-4"
        >
          Thought Leadership
        </AnimatedText>

        <AnimatedText
          delay={0.2}
          as="h2"
          className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#242633] tracking-[-0.03em] mb-12"
        >
          The Excellence Dialogue
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {posts.map((post, idx) => (
            <AnimatedText
              delay={0.3 + idx * 0.1}
              key={post.title}
              className="h-full"
            >
              <ThoughtCard {...post} />
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.6}>
          <Link
            href="/thought_leadership#publication"
            className="group flex items-center gap-2 text-sm font-medium text-[#3a5af8] hover:text-[#3a5af8] transition-colors w-max"
          >
            View all publications
            <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
};
