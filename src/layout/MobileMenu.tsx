import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 h-dvh bg-background flex flex-col items-center justify-center pointer-events-auto transition-all duration-500 z-700 lg:hidden pb-20 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ul className="flex flex-col items-center gap-8 text-primary text-2xl font-black uppercase tracking-widest text-center mt-12">
        <li>
          <Link
            href="/home"
            onClick={closeMenu}
            className="hover:text-[#3a5af8] transition-colors inline-block py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            className="hover:text-[#3a5af8] transition-colors inline-block py-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/thought_leadership"
            onClick={closeMenu}
            className="hover:text-[#3a5af8] transition-colors inline-block py-2 text-center"
          >
            Thought Leadership
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className="hover:text-[#3a5af8] transition-colors inline-block py-2"
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}
