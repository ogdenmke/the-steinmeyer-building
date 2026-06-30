import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const DISTRICT_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/ac0fed68d_generated_df4b2f7a.png";

const landmarks = [
  { name: "Turner Hall", distance: "~400 ft", paces: "~150 paces", description: "Historic 1882 gymnasium and cultural hub" },
  { name: "Pere Marquette Historic Site", distance: "~500 ft", paces: "~190 paces", description: "Site of early French exploration" },
  { name: "Invention of the Typewriter", distance: "~700 ft", paces: "~260 paces", description: "Birthplace of the modern typewriter" },
  { name: "Beer Line Neighborhood", distance: "Adjacent", paces: "Shouting distance", description: "Milwaukee's amber brewing past" },
  { name: "Kilbourntown", distance: "Adjacent", paces: "Shouting distance", description: "One of Milwaukee's three original towns" },
  { name: "Robert \"Red\" Wilson Memorial", distance: "~800 ft", paces: "~300 paces", description: "Milwaukee civic history" },
];

function LandmarkRow({ landmark, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="grid grid-cols-12 gap-4 items-baseline py-5 border-b border-[#8E795E]/10 group hover:bg-[#F5F0E8]/50 px-4 -mx-4 transition-colors"
    >
      <div className="col-span-12 md:col-span-5">
        <h4 className="font-heading font-semibold text-sm md:text-base text-[#1A1A1A] tracking-tight group-hover:text-[#8E795E] transition-colors">
          {landmark.name}
        </h4>
      </div>
      <div className="col-span-6 md:col-span-4">
        <p className="font-body text-sm text-[#1A1A1A]/50">
          {landmark.description}
        </p>
      </div>
      <div className="col-span-6 md:col-span-3 text-right">
        <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#8E795E]">
          {landmark.paces}
        </span>
      </div>
    </motion.div>
  );
}

export default function District() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="district" className="py-24 md:py-40 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              The District
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#FDFCF8] tracking-tight mb-6">
              Old World<br />Third Street
            </h2>
            <p className="font-body text-[#FDFCF8]/60 text-base md:text-lg max-w-2xl leading-[1.7]">
              The Steinmeyer Building sits at the heart of one of Milwaukee's most historically 
              dense neighborhoods — a walkable grid of landmarks that chart the city's journey 
              from fur trading post to industrial powerhouse. Part of the National Register's 
              Old World Third Street Historic District, within the vibrant Westown neighborhood.
            </p>
          </div>

          {/* District image */}
          <div className="mb-16 overflow-hidden">
            <img
              src={DISTRICT_IMG}
              alt="Aerial view of Milwaukee's Westown neighborhood and Old World Third Street"
              className="w-full aspect-[21/9] object-cover opacity-80"
            />
          </div>

          {/* Landmark listing */}
          <div>
            <div className="grid grid-cols-12 gap-4 mb-4 px-4 -mx-4">
              <div className="col-span-12 md:col-span-5">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#FDFCF8]/30">
                  Landmark
                </span>
              </div>
              <div className="hidden md:block col-span-4">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#FDFCF8]/30">
                  Significance
                </span>
              </div>
              <div className="hidden md:block col-span-3 text-right">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#FDFCF8]/30">
                  Distance in Paces
                </span>
              </div>
            </div>

            <div className="divide-y-0">
              {landmarks.map((l, i) => (
                <div key={l.name} className="grid grid-cols-12 gap-4 items-baseline py-5 border-b border-[#FDFCF8]/10 group hover:bg-[#FDFCF8]/5 px-4 -mx-4 transition-colors">
                  <div className="col-span-12 md:col-span-5">
                    <h4 className="font-heading font-semibold text-sm md:text-base text-[#FDFCF8] tracking-tight group-hover:text-[#8E795E] transition-colors flex items-center gap-2">
                      <MapPin size={14} className="text-[#8E795E] shrink-0" />
                      {l.name}
                    </h4>
                  </div>
                  <div className="col-span-6 md:col-span-4">
                    <p className="font-body text-sm text-[#FDFCF8]/40">
                      {l.description}
                    </p>
                  </div>
                  <div className="col-span-6 md:col-span-3 text-right">
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#8E795E]">
                      {l.paces}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location context */}
          <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8">
            <div className="border border-[#FDFCF8]/10 p-6">
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-2">
                Region
              </span>
              <p className="font-body text-sm text-[#FDFCF8]/60">
                Southeast Wisconsin · American Midwest · Great Lakes
              </p>
            </div>
            <div className="border border-[#FDFCF8]/10 p-6">
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-2">
                Historic Territory
              </span>
              <p className="font-body text-sm text-[#FDFCF8]/60">
                Mississippian Culture · Northwest Territory
              </p>
            </div>
            <div className="border border-[#FDFCF8]/10 p-6">
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-2">
                Coordinates
              </span>
              <p className="font-mono text-sm text-[#FDFCF8]/60">
                43° 2.651′ N, 87° 54.859′ W
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}