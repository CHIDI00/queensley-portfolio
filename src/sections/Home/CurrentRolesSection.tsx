import React from "react";
import { AnimatedText } from "@/ui/AnimatedText";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";

export const CurrentRolesSection = () => {
  const roles = [
    {
      icon: (
        <HiOutlineUserGroup className="text-[#3a5af8] text-xl group-hover:text-white transition-colors duration-300" />
      ),
      title: "Vice President, ICAN",
      description:
        "Serving as the Vice President of the Institute of Chartered Accountants of Nigeria, providing strategic direction for the accounting profession across the nation.",
    },
    {
      icon: (
        <FiBriefcase className="text-[#3a5af8] text-xl group-hover:text-white transition-colors duration-300" />
      ),
      title: "Partner, Quebaan",
      description:
        "Overseeing strategic direction and operational excellence at Quebaan Professional Services, delivering high-quality audit, tax, and advisory services.",
    },
  ];

  return (
    <section className="w-full max-w-8xl mx-auto px-6 md:px-12 py-16 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Side: Cards UI */}
        <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 pt-8 pl-8 sm:pt-16 sm:pl-16">
          {/* Background Blob/Circle */}
          {/* <div className="absolute left-0 bottom-10 w-64 h-64 bg-[#3a5af8] rounded-full  z-10"></div> */}

          {/* Large Experience Card */}
          <AnimatedText delay={0.1}>
            <div className="relative bg-[#ffffff8c] rounded-3xl p-10 py-20 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center text-center z-10 w-full mb-8">
              {/* Soft gradient spot inside card */}
              <div className="absolute bottom-0 -left-10 w-64 h-64 bg-[#3a5af8] rounded-full blur-sm -z-10"></div>

              <h3 className="text-6xl sm:text-[90px] font-black text-[#1A1A1A] leading-none mb-6">
                40<span className="text-[#1A1A1A]">+</span>
              </h3>
              <p className="text-xl sm:text-3xl font-bold text-[#1A1A1A] leading-tight">
                Years Of <br /> Experience
              </p>
            </div>
          </AnimatedText>

          {/* Small Feature Card */}
          <AnimatedText
            delay={0.2}
            className="relative z-20 -mt-16 sm:-mt-24 -ml-6 sm:-ml-12 w-[90%] sm:w-[85%]"
          >
            <div className="bg-[#ffffff8c] rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-6">
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border-[1.5px] border-[#3a5af8] flex flex-col items-center justify-center shrink-0">
                <BsShieldCheck className="text-[#3a5af8] text-2xl sm:text-3xl" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-1">
                  Professional Excellence
                </h4>
                <p className="text-sm text-[#777]">Integrity & Trust</p>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Right Side: Text & Roles Content */}
        <div className="flex flex-col">
          <AnimatedText
            delay={0.1}
            as="p"
            className="text-sm font-medium tracking-[3px] text-[#3a5af8] uppercase mb-4"
          >
            CURRENT ROLES
          </AnimatedText>

          <AnimatedText
            delay={0.2}
            as="h2"
            className="text-2xl sm:text-5xl lg:text-[46px] font-bold text-[#1A1A1A] leading-[1.2] mb-6"
          >
            Boost Business Strategic Solutions with Us
          </AnimatedText>

          <AnimatedText
            delay={0.3}
            as="p"
            className="text-[15px] sm:text-[16px] text-[#666] leading-relaxed mb-10 max-w-lg"
          >
            A seasoned expert providing unparalleled leadership and strategic
            direction to elevate professional institutions and empower corporate
            businesses to achieve organizational excellence.
          </AnimatedText>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {roles.map((role, idx) => (
              <AnimatedText
                delay={0.4 + idx * 0.1}
                key={idx}
                className="h-full"
              >
                <div className="bg-[#f9fafb] rounded-[20px] border-[1.5px] border-[#f0f0f0] hover:border-[#3a5af8] p-6 lg:p-8 transition-colors duration-300 h-full flex flex-col group relative">
                  {/* Role Icon Area */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f0f0f0] group-hover:bg-[#3a5af8] flex items-center justify-center shrink-0 transition-colors duration-300">
                      {role.icon}
                    </div>
                    <h4 className="text-[16px] font-bold text-[#1A1A1A] leading-tight">
                      {role.title}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#666] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </AnimatedText>
            ))}
          </div>

          {/* Button */}
          <AnimatedText delay={0.6}>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3a5af8] text-white font-bold rounded-full hover:bg-opacity-90 transition-all text-[15px] hover:shadow-lg w-max"
            >
              Read More About Me
              <GoArrowRight className="text-[18px]" />
            </Link>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};
