import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative mx-auto mb-10 w-32 h-32 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden bg-[#EBE0D2]">
      <Image
        src="/hero-portrait.jpg"
        alt="Queensley Sofuratu Seghosime"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 128px, 150px"
      />
      <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
    </div>
  );
};
