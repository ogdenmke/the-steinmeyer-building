import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ELEVATION_IMG from "@/assets/images/elevation-rendering.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-[#1A1A1A] pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Elevation drawing that fills on scroll */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : {}}
          transition={{ duration: 2 }}
          className="mb-16 overflow-hidden">
          
          <img
            src={ELEVATION_IMG}
            alt="Architectural elevation of the Steinmeyer Building"
            className="w-full object-cover"
            style={{ filter: "sepia(100%) brightness(1.5)" }} />
          
        </motion.div>

        {/* Footer grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-heading font-black text-2xl text-[#FDFCF8] tracking-[0.1em] mb-4">
              STEINMEYER
            </h3>
            <p className="font-body text-sm text-[#FDFCF8]/40 leading-[1.8] max-w-md">
              A Milwaukee Landmark since 1974. Designed by G. B. Ferry and A. C. Clas 
              in 1893 for the wholesale and retail grocery firm founded by William Steinmeyer. 
              Listed on the National Register of Historic Places as part of the Old World 
              Third Street Historic District.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-4">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
              { label: "History", href: "#history" },
              { label: "Architecture", href: "#architecture" },
              { label: "Spaces", href: "#spaces" },
              { label: "District", href: "#district" },
              { label: "Leasing", href: "#leasing" }].
              map((l) =>
              <a
                key={l.href}
                href={l.href}
                className="block font-heading text-sm text-[#FDFCF8]/50 hover:text-[#8E795E] transition-colors">
                
                  {l.label}
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-4">
              Contact
            </h4>
            <div className="space-y-3 font-body text-sm text-[#FDFCF8]/50">
              <p>1665 N. Water St.</p>
              <p>Milwaukee, WI 53203</p>
              <a href="tel:+14147197899" className="block hover:text-[#8E795E] transition-colors">
                (414) 719-7899
              </a>
              <a href="mailto:richardr@ogdenre.com" className="block hover:text-[#8E795E] transition-colors">
                richardr@ogdenre.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-10 pt-8 border-t border-[#FDFCF8]/10">
          <p className="font-body text-xs text-[#FDFCF8]/30 leading-[1.7] max-w-3xl">
            The information furnished regarding this property is from sources deemed reliable,
            but no warranty or representation is made to the accuracy thereof and is subject to
            errors, omissions, changes of price or other conditions or withdrawal without notice.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#FDFCF8]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] tracking-widest text-[#FDFCF8]/20">
            43° 2.651′ N, 87° 54.859′ W
          </div>
          <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#FDFCF8]/20">
            © {new Date().getFullYear()} The Steinmeyer Building · All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#top" className="font-heading text-[10px] tracking-[0.15em] uppercase text-[#FDFCF8]/30 hover:text-[#8E795E] transition-colors">
              Privacy
            </a>
            <a href="#top" className="font-heading text-[10px] tracking-[0.15em] uppercase text-[#FDFCF8]/30 hover:text-[#8E795E] transition-colors">
              Terms
            </a>
            <a href="#top" className="font-heading text-[10px] tracking-[0.15em] uppercase text-[#FDFCF8]/30 hover:text-[#8E795E] transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>);

}