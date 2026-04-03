import React from "react";

export interface RoleCardProps {
  badgeText: string;
  title: string;
  description: string;
}

export const RoleCard = ({ badgeText, title, description }: RoleCardProps) => {
  return (
    <div className="bg-[#F5F4F0] border border-[#E9E8E3] rounded-2xl p-8 md:p-10 flex flex-col justify-start items-start w-full h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      <span className="bg-[#8A9C8D] text-black text-[10px] uppercase tracking-wider font-semibold py-[6px] px-4 rounded-full mb-4">
        {badgeText}
      </span>
      <h3 className="text-[#242633] text-xl font-bold mb-4">{title}</h3>
      <p className="text-[#6c6e75] text-sm md:text-[15px] leading-relaxed font-nromal">
        {description}
      </p>
    </div>
  );
};
