import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LISTINGS_URL = "https://ogdenmke.github.io/MilwaukeeOfficeSpace/building.html?id=STN";

// Suite data — edit or remove entries here as space leases up.
const floors = [
  {
    floor: 3,
    contiguous: null,
    suites: [
      { suite: "306", sf: 3289, turnKey: false, view: "Views of Deer District" },
    ],
  },
  {
    floor: 4,
    contiguous: 13608,
    suites: [
      { suite: "400", sf: 4446, turnKey: true, view: "Views of the Milwaukee River" },
      { suite: "401", sf: 2768, turnKey: false, view: "Views of Deer District" },
      { suite: "402", sf: 4530, turnKey: true, view: "Views of Deer District" },
      { suite: "403", sf: 1864, turnKey: false, view: "Views of Deer District" },
    ],
  },
  {
    floor: 5,
    contiguous: 13498,
    suites: [
      { suite: "500", sf: 6360, turnKey: false, view: "Views of Deer District & Milwaukee River" },
      { suite: "502", sf: 1388, turnKey: true, view: "Views of the Milwaukee River" },
      { suite: "504", sf: 2358, turnKey: false, view: "Views of the Milwaukee River" },
      { suite: "509", sf: 3392, turnKey: true, view: "Views of Deer District" },
    ],
  },
];

function SuiteCard({ suite }) {
  return (
    <div className="border border-[#8E795E]/20 bg-[#FDFCF8] p-6 flex flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-1">
            Suite {suite.suite}
          </span>
          <span className="font-heading font-black text-2xl text-[#1A1A1A]">
            {suite.sf.toLocaleString()} <span className="text-base font-normal text-[#1A1A1A]/50">SF</span>
          </span>
        </div>
        {suite.turnKey && (
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 bg-[#8E795E] text-[#FDFCF8] whitespace-nowrap">
            Turn-Key
          </span>
        )}
      </div>
      {suite.view && (
        <p className="mt-4 pt-4 border-t border-[#8E795E]/15 font-body text-xs text-[#1A1A1A]/60 italic leading-[1.5]">
          {suite.view}
        </p>
      )}
    </div>
  );
}

export default function AvailableSpace() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="availability" className="py-24 md:py-32 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              Now Leasing
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-4">
              Office Space For Lease
            </h2>
            <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg leading-[1.7]">
              9 suites available · 1,388 – 13,608 SF · $16.00/SF Gross
            </p>

            {/* Callouts side by side */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
              <div className="border-2 border-[#8E795E] p-6 md:p-8 bg-[#8E795E]/10">
                <div className="flex items-start gap-4">
                  <span className="font-heading font-black text-2xl md:text-3xl text-[#8E795E] leading-none">
                    +
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-base md:text-lg text-[#1A1A1A] tracking-tight mb-2">
                      Subdivision Is Possible
                    </h3>
                    <p className="font-body text-sm md:text-base text-[#1A1A1A]/80 leading-[1.7]">
                      Floors can be leased in full or subdivided into smaller suites to precisely
                      fit your space needs — from a single suite to an entire floor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-[#8E795E] p-6 md:p-8 bg-[#8E795E]/10">
                <div className="flex items-start gap-4">
                  <span className="font-heading font-black text-2xl md:text-3xl text-[#8E795E] leading-none">
                    +
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-base md:text-lg text-[#1A1A1A] tracking-tight mb-2">
                      Individual Office Space Is Available
                    </h3>
                    <p className="font-body text-sm md:text-base text-[#1A1A1A]/80 leading-[1.7]">
                      Prefer a single private office? Individual offices within select suites
                      are available to lease — ideal for solo professionals and small teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floor groups */}
          <div className="space-y-12">
            {floors.map((f) => (
              <div key={f.floor}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 pb-4 border-b-2 border-[#8E795E]/30">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-[#1A1A1A] tracking-tight">
                    Floor {f.floor}
                  </h3>
                  {f.contiguous && (
                    <p className="font-heading text-sm tracking-[0.1em] uppercase text-[#8E795E] mt-2 md:mt-0">
                      {f.contiguous.toLocaleString()} SF contiguous available
                    </p>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {f.suites.map((s) => (
                    <SuiteCard key={s.suite} suite={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA — moved after the availability listing */}
          <div className="mt-16 text-center">
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
        </motion.div>
      </div>
    </section>
  );
}