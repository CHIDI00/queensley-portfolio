import React from "react";
import Image from "next/image";
import { AnimatedText } from "@/ui/AnimatedText";
import { ThoughtCard } from "@/ui/ThoughtCard";

const articles = [
  {
    id: 1,
    category: "Leadership",
    title: "Integrity in Public Financial Management",
    date: "March 2026",
    image: "/qssintegrity.jpg",
    highlighted: false,
  },
  {
    id: 2,
    category: "Policy",
    title: "Tax Reform and Nigeria's Economic Future",
    date: "January 2026",
    image: "/image.png",
    highlighted: false,
  },
  {
    id: 3,
    category: "Mentorship",
    title: "Mentoring the Next Generation of Accountants",
    date: "November 2025",
    image: "/image1.png",
    highlighted: false,
  },
  {
    id: 4,
    category: "Advocacy",
    title: "Women in Governance: Breaking Barriers",
    date: "September 2025",
    image: "/image.png",
    highlighted: false,
  },
  {
    id: 5,
    category: "Institutional",
    title: "The Role of ICAN in National Development",
    date: "July 2025",
    image: "/qssintegrity.jpg",
    highlighted: true,
  },
  {
    id: 6,
    category: "Governance",
    title: "Ethics and Accountability in Public Service",
    date: "May 2025",
    image: "/image.png",
    highlighted: false,
  },
];

const posts = [
  {
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

const Articles = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-32 flex justify-center pb-32">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-background rounded-xl p-5 border border-[#f0f0f0] flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full aspect-[1.5/1] bg-[#f2f0eb] rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <span className="inline-block px-4 py-[6px] mb-4 text-[13px] font-medium text-[#4a4a4a] bg-transparent border border-[#e5e5e5] rounded-full w-max">
                {article.category}
              </span>

              <h3
                className={`text-xl font-semibold leading-[1.3] mb-6 ${
                  article.highlighted ? "text-[#a47b7b]" : "text-[#2d2d2d]"
                }`}
              >
                {article.title}
              </h3>

              <div className="mt-auto">
                <p className="text-[14px] text-[#999999] font-medium tracking-wide">
                  {article.date}
                </p>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {posts.map((post, idx) => (
            <AnimatedText
              delay={0.3 + idx * 0.1}
              key={post.title}
              className="h-full"
            >
              <ThoughtCard {...post} />
            </AnimatedText>
          ))}
        </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
