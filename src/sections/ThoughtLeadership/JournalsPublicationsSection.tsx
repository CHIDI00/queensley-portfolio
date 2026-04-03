"use client";

import React, { useState } from "react";

const publications = [
  {
    id: 1,
    type: "RESEARCH",
    year: "2023",
    title:
      "Institutional Reforms in Developing Bureaucracies: A Comparative Study",
    description:
      "Published in the International Journal of Administrative Science, this paper explores the intersection of digital transformation and traditional governance structures.",
    actionText: "PDF (4.2 MB)",
    actionType: "download",
  },
  {
    id: 2,
    type: "SPEECH",
    year: "2024",
    title: "The Future of Ethical Leadership in Public Service Delivery",
    description:
      "Keynote address delivered at the National Institute for Policy and Strategic Studies during the Executive Leadership Summit.",
    actionText: "VIDEO LINK",
    actionType: "video",
  },
  {
    id: 3,
    type: "IN THE NEWS",
    year: "2024",
    title:
      "Strategic Policy Implementation: A Conversation with Queensley Sofuratu",
    description:
      "Exclusive interview with The Guardian discussing the roadmap for fiscal transparency and accountability in regional governance.",
    actionText: "ARTICLE",
    actionType: "link",
  },
  {
    id: 4,
    type: "JOURNAL",
    year: "2022",
    title: "The Role of 'mni' Designation in Modern Policy Frameworks",
    description:
      "An analytical look at how specialized training impacts high-level decision making in the Nigerian public sector.",
    actionText: "PDF (1.8 MB)",
    actionType: "download",
  },
];

const JournalsPublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const sortedPublications = [...publications].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );

  const filteredPublications = sortedPublications.filter((pub) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Speeches" && pub.type === "SPEECH") return true;
    if (activeFilter === "Research" && pub.type === "RESEARCH") return true;
    if (activeFilter === "In the news" && pub.type === "IN THE NEWS")
      return true;
    if (
      activeFilter === "Media" &&
      (pub.type === "IN THE NEWS" || pub.type === "VIDEO")
    )
      return true;
    return false;
  });

  return (
    <section className="py-20 px-6 md:px-12 lg:px-32 flex justify-center bg-[#f7f6f2]">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d]">
            Journals & Publications
          </h2>
          <div className="flex space-x-6 text-sm font-medium text-[#888888] overflow-x-auto whitespace-nowrap pb-2 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter("All")}
              className={`${activeFilter === "All" ? "text-[#2d2d2d] border-b-2 border-[#2d2d2d]" : "hover:text-[#2d2d2d]"} transition-colors pb-1 uppercase tracking-wider`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("Speeches")}
              className={`${activeFilter === "Speeches" ? "text-[#2d2d2d] border-b-2 border-[#2d2d2d]" : "hover:text-[#2d2d2d]"} transition-colors pb-1 uppercase tracking-wider`}
            >
              Speeches
            </button>
            <button
              onClick={() => setActiveFilter("Research")}
              className={`${activeFilter === "Research" ? "text-[#2d2d2d] border-b-2 border-[#2d2d2d]" : "hover:text-[#2d2d2d]"} transition-colors pb-1 uppercase tracking-wider`}
            >
              Research
            </button>
            <button
              onClick={() => setActiveFilter("Media")}
              className={`${activeFilter === "Media" ? "text-[#2d2d2d] border-b-2 border-[#2d2d2d]" : "hover:text-[#2d2d2d]"} transition-colors pb-1 uppercase tracking-wider`}
            >
              Media
            </button>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-xl p-8 flex flex-col h-full border border-transparent hover:border-[#eaeaea] transition-all duration-300"
            >
              {/* Top Metdata */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-[#f0eceb] text-[#8c6b6b] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {pub.type}
                </span>
                <span className="text-[#999999] text-sm font-medium">
                  {pub.year}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="text-[22px] font-semibold text-[#2d2d2d] leading-snug mb-4">
                  {pub.title}
                </h3>
                <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                  {pub.description}
                </p>
              </div>

              {/* Action Area */}
              <div className="mt-10 pt-6 border-t border-[#f0f0f0] flex justify-between items-center group cursor-pointer">
                <span className="text-[#888888] text-xs font-bold uppercase tracking-widest group-hover:text-[#2d2d2d] transition-colors">
                  {pub.actionText}
                </span>
                <div className="text-[#b3b3b3] group-hover:text-[#2d2d2d] transition-colors">
                  {pub.actionType === "download" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  )}
                  {pub.actionType === "video" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  )}
                  {pub.actionType === "link" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalsPublicationsSection;
