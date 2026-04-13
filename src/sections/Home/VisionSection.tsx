import React from "react";
import { AnimatedText } from "@/ui/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export const VisionSection = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-dvh lg:max-h-220 pt-14 md:pt-24 pb-12 lg:py-0 overflow-hidden bg-[#fafafa] flex flex-col justify-center">
      {/* Decorative Background Shapes */}
      <div
        className="absolute right-0 top-0 w-full lg:w-[30%] h-[400px] lg:h-full bg-[#d8e5f6] z-0 flex items-center justify-center"
        style={{ clipPath: "polygon(25% 0, 90% 0, 90% 60%, 25% 80%)" }}
      ></div>
      <div
        className="absolute right-0 lg:right-[15%] top-[15%] lg:top-auto lg:bottom-0 w-full lg:w-[35%] h-[237px] lg:h-[60%] bg-[#dddddd] z-0 block"
        style={{ clipPath: "polygon(20% 10%, 70% 0%, 70% 100%, 20% 100%)" }}
      ></div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center justify-between min-h-screen pb-16 lg:pb-0">
        {/* Left Content Area */}
        <div className="order-2 lg:order-1 w-full xl:max-w-2xl pt-10 lg:pt-0 z-20 flex-1 w-full">
          <AnimatedText
            delay={0.1}
            as="p"
            className="text-sm font-medium tracking-[3px] text-[#3a5af8] uppercase mb-4"
          >
            The Vision
          </AnimatedText>

          <AnimatedText
            delay={0.2}
            as="h1"
            className="text-[30px] md:text-[72px] lg:text-[72px] xl:text-[60px] leading-[1.05] font-bold text-[#1A1A1A] tracking-[-0.03em] md:mb-8 mb-3"
          >
            Driving National Growth through Integrity and Fiscal Excellence.
          </AnimatedText>

          <AnimatedText
            delay={0.3}
            as="p"
            className="text-[14px] md:text-[18px] text-[#555] leading-relaxed max-w-[500px] md:mb-10 mb-5"
          >
            A lifetime dedicated to tax policy reform, institutional leadership,
            and building a transparent financial future for Nigeria.
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3b82f6] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all text-[15px] shadow-sm hover:shadow-md"
            >
              Learn more about Queensley
              <GoArrowRight className="text-[18px]" />
            </Link>
          </AnimatedText>

          {/* Mobile Stats & Socials - Hidden on Desktop */}
          <div className="flex flex-col lg:hidden mt-4 gap-5">
            <div className="flex items-center gap-4">
              <span className="text-[60px] font-bold text-[#1A1A1A] leading-none">
                25
              </span>
              <span className="text-[15px] text-[#555] leading-snug w-24 block">
                Years Of experience
              </span>
            </div>

            <div>
              <p className="text-[#1A1A1A] text-[15px] font-medium mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all shadow-sm"
                >
                  <FaInstagram size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all shadow-sm"
                >
                  <FaLinkedinIn size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all shadow-sm"
                >
                  <FaTwitter size={16} />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#3a5af8] hover:text-white transition-all shadow-sm"
                >
                  <FaFacebookF size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area (Image & Stats) */}
        <div className="order-1 lg:order-2 relative mt-0 lg:mt-0 flex-1 flex justify-center lg:justify-start items-end h-[350px] sm:h-[450px] lg:h-full w-full z-10 pb-0">
          <div className="relative w-full h-full max-w-[200px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[500px] flex items-end mx-auto lg:mx-0">
            <Image
              src="/qssimagee.png"
              alt="Queensley Sofuratu"
              width={600}
              height={800}
              className="object-contain object-bottom w-full h-full lg:h-[90%] z-20"
              priority
            />
          </div>

          {/* Desktop Floating Stats - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col absolute top-[40%] right-0 xl:right-[20px] z-30">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-[64px] xl:text-[80px] font-bold text-[#1A1A1A] leading-none">
                40
              </span>
              <span className="text-[15px] text-[#555] leading-snug w-24 block">
                Years Of experience
              </span>
            </div>

            {/* <div>
              <p className="text-[#1A1A1A] text-[15px] font-medium mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8B83A] hover:text-white transition-all shadow-sm"
                >
                  <FaInstagram size={14} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center text-white hover:bg-opacity-90 transition-all shadow-sm"
                >
                  <FaLinkedinIn size={14} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8B83A] hover:text-white transition-all shadow-sm"
                >
                  <FaTwitter size={14} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8B83A] hover:text-white transition-all shadow-sm"
                >
                  <FaFacebookF size={14} />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
