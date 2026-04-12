import React from "react";
import Image from "next/image";
import { AnimatedText } from "@/ui/AnimatedText";

const aboutSections = [
  {
    title: "INTRODUCTION",
    content:
      "Queensley Sofuratu Seghosime, mni, is a leading authority in Nigerian tax administration and fiscal policy. As a seasoned professional with over three decades of experience, she has bridged the gap between the private sector audit and the public sector reform. She is widely recognized for her integrity, technical depth, and strategic leadership in the financial sector with a sincere desire to drive national growth. She is a mentor with an unwavering commitment to ethical standards and a strategic leader currently serving as the Vice President of the Institute of Chartered Accountants of Nigeria (ICAN).",
  },
  {
    title: "EDUCATIONAL FOUNDATION & EARLY CAREER",
    content:
      "Educated at world-class institutions, she began her journey in the corporate world. She spent 12 years with BDO Balogun Badejo & Co., where she developed core expertise in audit, tax advisory, and regulatory compliance. This period established her reputation as a meticulous financial expert before her transition to public service.",
  },
  {
    title: "STRATEGIC LEADERSHIP AT FIRS",
    content:
      "Following her passion for public service and systemic reform, she joined the Federal Inland Revenue Service (FIRS) in 1994, eventually rising to the rank of Coordinating Director in 2013. In this capacity, she provided strategic leadership across the most critical arms of the service, including Tax Audit & Investigation, Tax Policy & Advisory, and Legal & Prosecution — modernizing enforcement processes, drafting implementation rules, and overseeing compliance enforcement.",
  },
  {
    title: "NATIONAL SERVICE & JUDICIAL IMPACT",
    content:
      "From 2018 to 2024, Queensley served as a member of the Tax Appeal Tribunal, where she applied her deep legal and technical knowledge to resolve critical fiscal disputes and interpret complex tax legislation. Her tenure contributed meaningfully to the interpretation of tax laws and the strengthening of Nigeria's fiscal and judicial systems.",
  },
  {
    title: "INSTITUTIONAL LEADERSHIP & GLOBAL REPRESENTATION",
    content:
      "Queensley currently serves as the Vice President of ICAN and is a Partner at Quebaan Professional Services. Her influence extends to international stages including the Commonwealth Association of Tax Administrators (CATA), OECD Global Forum on Transparency and Exchange of Information, and the Financial Reporting Council of Nigeria (FRCN). Through these engagements, she has represented Nigeria's interests in global tax policy, transparency, and financial reporting discussions.",
  },
  {
    title: "LEGACY & IMPACT",
    content:
      "Recognized nationally and internationally for her leadership, integrity, and technical excellence, Queensley Sofuratu Seghosime remains deeply committed to fiscal transparency, ethical governance, and sustainable nation-building. Through mentorship, institutional service, and policy leadership, she continues to influence the present and future of Nigeria's financial and governance ecosystem.",
  },
];

const credentials = [
  "Fellow – Institute of Chartered Accountants of Nigeria (FCA)",
  "Fellow – Chartered Institute of Taxation of Nigeria (FCTI)",
  "Member – Chartered Institute of Arbitrators",
  "Alumna – Harvard University (Comparative Tax Policy Program)",
  "Alumna – National Institute for Policy and Strategic Studies (NIPSS), Kuru (mni)",
  "Former Member – Tax Appeal Tribunal",
  "Member – FIRS Board Technical Committee",
];

const page = () => {
  return (
    <main className="min-h-dvh flex flex-col bg-[#FBF9F6] text-[#242633] overflow-x-hidden relative pt-32 pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        {/* Header Segment */}
        <AnimatedText
          delay={0.1}
          as="p"
          className="text-xs font-bold tracking-[3px] text-[#3a73f8] uppercase mb-4"
        >
          ABOUT ME
        </AnimatedText>

        <AnimatedText
          delay={0.2}
          as="h1"
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#242633] tracking-[-0.03em] leading-tight mb-12 flex gap-3 flex-wrap items-end"
        >
          <span>Queensley Sofuratu Seghosime,</span>
          <span className="font-light italic text-[#4a4c55] text-4xl md:text-5xl lg:text-[56px]">
            mni
          </span>
        </AnimatedText>

        {/* Hero Image */}
        <AnimatedText delay={0.3} className="w-full mb-16 md:mb-24">
          <div className="relative w-full aspect-[21/15] md:aspect-[2.35/1] rounded-2xl overflow-hidden">
            <Image
              src="/hero-portrait.jpg"
              alt="Queensley Sofuratu Seghosime Portrait"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>
        </AnimatedText>

        {/* Content Sections */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {aboutSections.map((section, idx) => (
            <AnimatedText delay={0.4 + idx * 0.1} key={section.title}>
              <div className="flex flex-col border-b border-[#E9E8E3] pb-12 lg:pb-16 last:border-b-0 last:pb-0">
                <h3 className="text-[12px] font-medium tracking-[2px] text-[#3a73f8] uppercase mb-6">
                  {section.title}
                </h3>
                <p className="text-[#4c4c4e] text-[15px] md:text-[17px] leading-[1.8] font-normal">
                  {section.content}
                </p>
              </div>
            </AnimatedText>
          ))}

          {/* Credentials Segment */}
          <AnimatedText delay={1.0}>
            <div className="flex flex-col mt-4">
              <h3 className="text-[13px] font-medium tracking-[2px] text-[#3a73f8] uppercase mb-8">
                PROFESSIONAL CREDENTIALS & MEMBERSHIPS
              </h3>

              <div className="flex flex-wrap gap-2">
                {credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="inline-block border border-[#E9E8E3] bg-[#FCFCFA] text-[#4a4c55] text-[12px] px-5 py-2.5 rounded-full font-normal"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </main>
  );
};

export default page;
