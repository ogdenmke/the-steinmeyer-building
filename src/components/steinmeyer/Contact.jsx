import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Mail, ArrowRight, Building } from "lucide-react";

const LISTING_URL = "https://ogdenmke.github.io/MilwaukeeOfficeSpace/building.html?id=STN";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leasing" className="py-24 md:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left - Info */}
            <div>
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
                Leasing Inquiries
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A1A] tracking-tight mb-6">
                Secure Your Place<br />in History
              </h2>
              <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg leading-[1.7] mb-12">
                Whether you're seeking a distinguished office address, a character-rich retail
                space, or a creative studio wrapped in 130 years of Milwaukee heritage —
                the Steinmeyer Building has a space that matches your ambition.
              </p>

              {/* Broker contact block */}
              <div className="border-l-2 border-[#8E795E] pl-6 mb-10">
                <p className="font-heading font-bold text-lg text-[#1A1A1A] mb-1">
                  Richard Reinders
                </p>
                <p className="font-heading text-xs tracking-[0.15em] uppercase text-[#8E795E] mb-4">
                  Commercial Brokerage Associate
                </p>
                <div className="space-y-2">
                  <a href="tel:+14147197899" className="flex items-center gap-3 font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors">
                    <Phone size={16} className="text-[#8E795E] shrink-0" />
                    (414) 719-7899
                  </a>
                  <a href="mailto:richardr@ogdenre.com" className="flex items-center gap-3 font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors break-all">
                    <Mail size={16} className="text-[#8E795E] shrink-0" />
                    richardr@ogdenre.com
                  </a>
                </div>
                <p className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 mt-4">
                  Ogden &amp; Company, Inc., AMO®
                </p>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#8E795E] mt-1 shrink-0" />
                <div>
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50 block mb-1">
                    Address
                  </span>
                  <p className="font-body text-[#1A1A1A]">
                    205 West Highland Avenue<br />Milwaukee, WI 53203
                  </p>
                </div>
              </div>
            </div>

            {/* Right - CTA panel */}
            <div className="border border-[#8E795E]/20 p-8 md:p-12 bg-[#FDFCF8]">
              <Building size={24} className="text-[#8E795E] mb-6" />
              <h3 className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-6">
                Browse & Inquire
              </h3>
              <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg leading-[1.7] mb-10">
                For the most up-to-date availability, floor plans, and pricing, please visit
                our live listings page. From there you can request a tour or reach out to our
                leasing broker directly.
              </p>
              <a
                href={LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 font-heading text-xs tracking-[0.2em] uppercase py-4 bg-[#1A1A1A] text-[#FDFCF8] hover:bg-[#8E795E] transition-colors duration-300"
              >
                View Available Office Space <ArrowRight size={14} />
              </a>

              <div className="mt-10 pt-8 border-t border-[#8E795E]/10 space-y-5">
                <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E]">
                  Prefer to reach us directly?
                </p>
                <div className="space-y-3">
                  <a href="tel:+14147197899" className="flex items-center gap-3 font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors">
                    <Phone size={16} className="text-[#8E795E]" />
                    (414) 719-7899
                  </a>
                  <a href="mailto:richardr@ogdenre.com" className="flex items-center gap-3 font-body text-[#1A1A1A] hover:text-[#8E795E] transition-colors break-all">
                    <Mail size={16} className="text-[#8E795E] shrink-0" />
                    richardr@ogdenre.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}