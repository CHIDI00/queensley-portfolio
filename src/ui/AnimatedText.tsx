"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: AnimatedTextProps) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.fromTo(
        container.current,
        { opacity: 0, filter: "blur(12px)", y: 15 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.2,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <Component ref={container} className={className} style={{ opacity: 0 }}>
      {children}
    </Component>
  );
};
