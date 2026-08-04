import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Building, Car } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Steps from the Deer District",
    description: "Walking distance to the Deer District, Fiserv Forum, Old World Third Street, and the Milwaukee Riverwalk. Directly adjacent to the new West Highland Avenue pedestrian plaza.",
  },
  {
    icon: Building,
    title: "Authentic Historic Character",
    description: "Suites feature exposed cream city brick, original hardwood floors, and exposed ceiling timbers — 1893 craftsmanship you can't replicate in new construction.",
  },
  {
    icon: Car,
    title: "Parking Everywhere",
    description: "Eleven parking structures and surface lots within 0.2 miles, with the closest lot just 0.03 miles from the building.",
  },
];

const tenants = ["Edelweiss Cruises", "Wisconsin Cheese Mart", "Lucky Clover", "Red White & Blue"];

export default function WhyLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 md:mb-16">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              The Neighborhood
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#FDFCF8] tracking-tight">
              Why This Location
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="border border-[#FDFCF8]/10 p-8">
                  <Icon size={24} className="text-[#8E795E] mb-6" />
                  <h3 className="font-heading font-bold text-lg text-[#FDFCF8] mb-3 tracking-tight">
                    {h.title}
                  </h3>
                  <p className="font-body text-sm text-[#FDFCF8]/60 leading-[1.7]">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="border border-[#8E795E]/30 p-8 md:p-10">
            <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-4">
              Current Building Tenants
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {tenants.map((t) => (
                <span key={t} className="font-heading font-semibold text-base md:text-lg text-[#FDFCF8]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}