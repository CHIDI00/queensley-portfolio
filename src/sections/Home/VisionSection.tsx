import React from "react";
import { AnimatedText } from "@/ui/AnimatedText";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export const VisionSection = () => {
  return (
    <section className="w-full max-w-480 mx-auto px-6 md:px-12 py-16 pt-28 lg:pt-36 lg:py-20 flex flex-col items-start justify-center">
      <div className="max-w-4xl">
        <AnimatedText
          delay={0.1}
          as="p"
          className="text-sm font-medium tracking-[3px] text-[#9E7A7A] uppercase mb-6"
        >
          The Vision
        </AnimatedText>

        <AnimatedText
          delay={0.2}
          as="h1"
          className="text-4xl md:text-5xl lg:text-[72px] leading-[1.05] font-bold text-[#242633] tracking-[-0.03em] mb-10"
        >
          Driving National Growth through Integrity and Fiscal Excellence.
        </AnimatedText>

        <AnimatedText
          delay={0.3}
          as="p"
          className="text-[16px] md:text-xl text-[#6c6e75] leading-relaxed max-w-2xl font-normal mb-12"
        >
          A lifetime dedicated to tax policy reform, institutional leadership,
          and building a transparent financial future for Nigeria.
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <Link
            href="/about"
            className="group flex justify-center items-center gap-2 text-sm font-medium text-[#9E7A7A] hover:text-[#866266] transition-colors w-max"
          >
            Learn more about Queensley
            <GoArrowRight className="text-[16px] transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
};
