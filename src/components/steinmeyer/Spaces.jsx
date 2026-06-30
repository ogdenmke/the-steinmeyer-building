import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";

const OFFICE_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/fcd02eabd_generated_e5f68f48.png";
const COMMON_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/d8efc9de1_generated_60f124af.png";
const ARCH_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/c56ea2c4c_generated_c56b7dd5.png";

const spaces = [
  {
    name: "The Steinmeyer Suite",
    floor: "Third Floor",
    sqft: "2,400",
    ceiling: "12 ft",
    features: ["Original Cream City Brick", "Arched Windows", "Natural Light", "Highland Ave Views"],
    image: OFFICE_IMG,
    imageAlt: "Modern office with exposed brick and arched windows in the Steinmeyer Building",
    status: "Available",
  },
  {
    name: "The Ferry & Clas Loft",
    floor: "Fourth Floor",
    sqft: "1,800",
    ceiling: "14 ft",
    features: ["Exposed Timber Beams", "Open Plan", "Corner Position", "Dual Exposure"],
    image: COMMON_IMG,
    imageAlt: "Open loft workspace with historic beams in the Steinmeyer Building",
    status: "Available",
  },
  {
    name: "The Landmark Office",
    floor: "Second Floor",
    sqft: "3,200",
    ceiling: "12 ft",
    features: ["Street-Level Views", "Reception Area", "Original Flooring", "Private Entrance"],
    image: ARCH_IMG,
    imageAlt: "Professional office space with Romanesque window details",
    status: "Inquire",
  },
];

function SpaceCard({ space, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden arch-radius-subtle mb-6">
        <img
          src={space.image}
          alt={space.imageAlt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-heading text-xs tracking-[0.2em] uppercase text-[#FDFCF8]">
            {space.status}
          </span>
          <Maximize2 size={18} className="text-[#FDFCF8]" />
        </div>
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-lg text-[#1A1A1A] tracking-tight">
            {space.name}
          </h3>
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#8E795E] border border-[#8E795E]/30 px-2 py-1">
            {space.floor}
          </span>
        </div>

        <div className="flex gap-6 mb-4 text-sm">
          <span className="font-body text-[#1A1A1A]/50">
            <span className="text-[#1A1A1A] font-medium">{space.sqft}</span> sq ft
          </span>
          <span className="font-body text-[#1A1A1A]/50">
            <span className="text-[#1A1A1A] font-medium">{space.ceiling}</span> ceilings
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {space.features.map((f) => (
            <span
              key={f}
              className="font-heading text-[10px] tracking-[0.1em] uppercase text-[#1A1A1A]/50 bg-[#F5F0E8] px-3 py-1.5"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {spaces.map((space, i) => (
            <SpaceCard key={space.name} space={space} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#leasing"
            className="inline-flex items-center gap-3 font-heading text-sm tracking-[0.15em] uppercase text-[#8E795E] hover:text-[#1A1A1A] transition-colors group"
          >
            Request a Showing
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}