import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LISTINGS_URL = "https://caseyski.github.io/MKE-Office-Space/";

export default function Spaces() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="spaces" className="py-24 md:py-40 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24"
        >
          <div>
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              Available Spaces
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight">
              The Architectural<br />Canvas
            </h2>
          </div>
          <p className="font-body text-[#1A1A1A]/60 text-base md:text-lg max-w-md leading-[1.7] mt-4 md:mt-0">
            Each suite is a unique expression of 1893 craftsmanship — 
            original brick, soaring ceilings, and windows that frame Milwaukee's evolving skyline.
          </p>
        </motion.div>

        <div className="text-center">
          <a
            href={LISTINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-heading text-sm tracking-[0.2em] uppercase bg-[#1A1A1A] text-[#FDFCF8] px-10 py-5 hover:bg-[#8E795E] transition-colors group"
          >
            View Available Office Space
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}