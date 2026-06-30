import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "History", href: "#history" },
  { label: "Architecture", href: "#architecture" },
  { label: "Spaces", href: "#spaces" },
  { label: "District", href: "#district" },
  { label: "Leasing", href: "#leasing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm border-b border-[#8E795E]/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-heading font-black tracking-[0.3em] text-sm md:text-base text-[#1A1A1A]">
          STEINMEYER
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#8E795E] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#leasing"
          className="hidden md:inline-block font-heading text-xs tracking-[0.15em] uppercase px-6 py-2.5 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-[#8E795E] transition-colors duration-300"
        >
          Inquire
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1A1A1A]"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDFCF8] border-t border-[#8E795E]/15 px-6 pb-6 pt-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-heading text-sm tracking-[0.15em] uppercase text-[#1A1A1A]/80 hover:text-[#8E795E] border-b border-[#8E795E]/10 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#leasing"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center font-heading text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#1A1A1A] text-[#FDFCF8]"
          >
            Inquire
          </a>
        </div>
      )}
    </nav>
  );
}