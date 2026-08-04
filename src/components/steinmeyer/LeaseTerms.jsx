import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const terms = [
  { label: "Lease Rate", value: "$16.00/SF Gross" },
  { label: "Lease Type", value: "Full-service gross, landlord responsible for utilities" },
  { label: "Building", value: "5 stories, 76,904 SF RBA, built 1893" },
  { label: "Construction", value: "Masonry" },
  { label: "HVAC", value: "Forced air" },
  { label: "Zoning", value: "C9G – Mixed Activity" },
  { label: "Signage", value: "Lobby and interior signage available; facade signage negotiable" },
];

export default function LeaseTerms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="terms" className="py-24 md:py-32 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              The Particulars
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A1A] tracking-tight">
              Lease Terms & Building Details
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="border border-[#8E795E]/20 p-8 md:p-10">
              <div className="space-y-0">
                {terms.map((t) => (
                  <div key={t.label} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-4 border-b border-[#8E795E]/10 last:border-0">
                    <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 md:w-40 shrink-0">
                      {t.label}
                    </span>
                    <span className="font-body text-sm md:text-base text-[#1A1A1A]">
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-l-2 border-[#8E795E] pl-8">
                <p className="font-body text-lg md:text-xl text-[#1A1A1A]/80 leading-[1.8]">
                  Full-service gross leasing means the landlord handles utilities and
                  building operations — your monthly cost is predictable from day one.
                  At $16.00/SF, the Steinmeyer Building offers downtown Milwaukee's
                  most competitive value for character-rich, historic office space.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}