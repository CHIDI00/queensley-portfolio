"use client";

import React from "react";
import Link from "next/link";

export const Button = () => {
  return (
    <div className="flex justify-center w-full mt-6 mb-16">
      <Link
        href="/home"
        className="px-10 py-[14px] bg-[#9e767b] hover:bg-[#866266] text-white text-xs font-semibold tracking-[2px] uppercase rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-md"
      >
        Enter Site
      </Link>
    </div>
  );
};
