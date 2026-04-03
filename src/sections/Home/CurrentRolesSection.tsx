import React from "react";
import { RoleCard } from "@/ui/RoleCard";
import { AnimatedText } from "@/ui/AnimatedText";

export const CurrentRolesSection = () => {
  const roles = [
    {
      badgeText: "Leadership",
      title: "Vice President, ICAN",
      description:
        "Serving as the Vice President of the Institute of Chartered Accountants of Nigeria, providing strategic direction for the accounting profession across the nation.",
    },
    {
      badgeText: "Professional Services",
      title: "Partner, Quebaan Professional Services",
      description:
        "Overseeing strategic direction and operational excellence at Quebaan Professional Services, delivering high-quality audit, tax, and advisory services.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
      <AnimatedText
        delay={0.1}
        as="h2"
        className="text-sm font-medium tracking-[3px] text-[#9E7A7A] uppercase mb-10 md:mb-14"
      >
        Current Roles
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {roles.map((role, idx) => (
          <AnimatedText
            delay={0.2 + idx * 0.1}
            key={role.title}
            className="h-full"
          >
            <RoleCard
              badgeText={role.badgeText}
              title={role.title}
              description={role.description}
            />
          </AnimatedText>
        ))}
      </div>
    </section>
  );
};
