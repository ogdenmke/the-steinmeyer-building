import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// TODO: self-host once available — still too large for the current image pipeline (>7MB source).
const LEASE_TERMS_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/81653bc12_IMG_8195.JPG";

const terms = [
{ label: "Lease Rate", value: "$16.00/SF Gross" },
{ label: "Lease Type", value: "Full-service gross, landlord responsible for utilities" },
{ label: "Building", value: "5 stories, 76,904 SF RBA, built 1893" },
{ label: "Construction", value: "Masonry" },
{ label: "HVAC", value: "Forced air" },
{ label: "Zoning", value: "C9G – Mixed Activity" },
{ label: "Signage", value: "Lobby and interior signage available; facade signage negotiable" },
{ label: "Parking", value: "Parking available within 1\u20132 blocks of building" }];


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
          transition={{ duration: 0.8 }}>
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              The Particulars
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
              Lease Terms &<br />Building Details
            </h2>
            <p className="font-body text-[#1A1A1A]/70 text-lg md:text-xl max-w-2xl leading-[1.7]">
              Full-service gross leasing means the landlord handles utilities and building
              operations — your monthly cost is predictable from day one. At $16.00/SF, the
              Steinmeyer Building offers downtown Milwaukee's most competitive value for
              character-rich, historic office space.
            </p>
          </div>

          {/* Grid: image + terms */}
          <div className="grid lg:grid-cols-5 gap-12 md:gap-16">
            {/* Building detail image */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden arch-radius-subtle">
                <img
                  src={LEASE_TERMS_IMG}
                  alt="Red brick facade with arched windows and string lights on the Steinmeyer Building"
                  className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Terms box */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="border border-[#8E795E]/20 p-8 md:p-10">
                <h3 className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-8">
                  Lease Specifications
                </h3>
                <div className="space-y-0">
                  {terms.map((t) =>
                  <div key={t.label} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-3.5 border-b border-[#8E795E]/10 last:border-0">
                      <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 md:w-28 shrink-0">
                        {t.label}
                      </span>
                      <span className="font-body text-sm text-[#1A1A1A]">
                        {t.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}