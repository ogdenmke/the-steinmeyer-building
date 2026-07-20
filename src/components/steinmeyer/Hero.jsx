import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/04aec8da0_SteinmeyerBuildingPic.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="The Steinmeyer Building facade at golden hour, Milwaukee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-[#1A1A1A]/25 to-[#1A1A1A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-heading font-black text-[#FDFCF8] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] leading-none"
          >
            STEINMEYER
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#FDFCF8]/70 mb-2">
              Est. 1893 · Milwaukee Landmark · Old World Third Street
            </p>
            <p className="font-body text-[#FDFCF8]/80 text-base md:text-lg max-w-xl leading-relaxed">
              A Romanesque Revival masterwork by Ferry & Clas, standing at the crossroads of Milwaukee's commercial heritage and its modern future.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#history"
              className="group flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-[#FDFCF8]/80 hover:text-[#FDFCF8] transition-colors"
            >
              Step Into 1893
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <span className="text-[#FDFCF8]/30">|</span>
            <a
              href="#leasing"
              className="font-heading text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#8E795E] text-[#FDFCF8] hover:bg-[#7A6A52] transition-colors duration-300"
            >
              Secure the Future
            </a>
          </div>
        </motion.div>

        {/* Coordinates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-8 font-mono text-[10px] md:text-xs tracking-widest text-[#FDFCF8]/40"
        >
          43° 2.651′ N, 87° 54.859′ W — 205 West Highland Avenue, Milwaukee WI 53203
        </motion.div>
      </div>
    </section>
  );
}