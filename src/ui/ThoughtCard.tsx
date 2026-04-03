import React from "react";
import Image from "next/image";

export interface ThoughtCardProps {
  imageSrc: string;
  tag: string;
  title: string;
  date: string;
}

export const ThoughtCard = ({
  imageSrc,
  tag,
  title,
  date,
}: ThoughtCardProps) => {
  return (
    <div className="group bg-background border border-[#E9E8E3] rounded-xl p-5 flex flex-col transition-all hover:shadow-md h-full cursor-pointer">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-6">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start">
        <span className="w-max border border-[#E9E8E3] text-[#242633] text-[12px] px-[14px] py-1.5 rounded-full mb-2 font-semibold">
          {tag}
        </span>
        <h3 className="text-[#242633] transition-colors duration-300 group-hover:text-accent text-md lg:text-md font-medium leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[#8e8f96] text-xs font-medium mt-auto md:pb-1">
          {date}
        </p>
      </div>
    </div>
  );
};
