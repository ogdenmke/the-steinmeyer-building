import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ARCH_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/ea97e4c56_IMG_8198.jpg";
const ELEVATION_IMG = "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/09e5accff_generated_dcf36b06.png";

const specs = [
{ label: "Architects", value: "G. B. Ferry & A. C. Clas" },
{ label: "Style", value: "Romanesque Revival Commercial" },
{ label: "Erected", value: "1893 / Expanded 1898" },
{ label: "Material", value: "Milwaukee Cream City Brick" },
{ label: "Stories", value: "Four" },
{ label: "Landmark Status", value: "1974, City of Milwaukee" },
{ label: "National Register", value: "Old World 3rd St. Historic District" },
{ label: "Location", value: "205 W. Highland Ave, Milwaukee" },
{ label: "Subdivision", value: "Full floors or subdivided suites available" }];


export default function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-24 md:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
              Architectural Identity
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
              The Ferry & Clas<br />Masterwork
            </h2>
            <p className="font-body text-[#1A1A1A]/70 text-lg md:text-xl max-w-2xl leading-[1.7]">
              An example of simplified Romanesque Revival Commercial Style architecture, 
              the Steinmeyer Building represents the pinnacle of late 19th-century commercial 
              design in Milwaukee's Westown district — distinguished by its warm cream city 
              brick facade and interiors lined with exposed original wood beams. Floors can be 
              leased in full or subdivided into smaller suites to fit any tenant's footprint.
            </p>
          </div>

          {/* Grid: image + specs */}
          <div className="grid lg:grid-cols-5 gap-12 md:gap-16 mb-16">
            {/* Arch detail image */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden arch-radius-subtle">
                <img
                  src={ARCH_IMG}
                  alt="Romanesque arched windows detail on the Steinmeyer Building"
                  className="w-full h-auto object-contain" />
                
              </div>
            </div>

            {/* Spec sheet */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="border border-[#8E795E]/20 p-8 md:p-10">
                <h3 className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-[#8E795E] mb-8">
                  Building Specifications
                </h3>
                <div className="space-y-0">
                  {specs.map((s, i) =>
                  <div
                    key={s.label}
                    className="flex justify-between items-baseline py-3.5 border-b border-[#8E795E]/10 last:border-0">
                    
                      <span className="font-heading text-xs tracking-[0.1em] uppercase text-[#1A1A1A]/50">
                        {s.label}
                      </span>
                      <span className="font-body text-sm text-[#1A1A1A] text-right ml-4">
                        {s.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 border-2 border-[#8E795E] p-6 bg-[#8E795E]/10 hidden">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-2">
                  Flexible Floor Plans
                </span>
                <p className="font-body text-sm text-[#1A1A1A]/80 leading-[1.7]">
                  <strong>Subdivision is possible</strong> — floors can be leased in full or 
                  divided into smaller suites to precisely fit your space needs.
                </p>
              </div>
            </div>
          </div>

          {/* Elevation drawing */}
          <div className="mt-16 md:mt-24">
            <div className="border border-[#8E795E]/20 p-4 md:p-8 bg-[#FDFCF8]/50">
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block mb-4">
                Architectural Elevation — Original Design Reference
              </span>
              <img
                src={ELEVATION_IMG}
                alt="Architectural elevation drawing of the Steinmeyer Building in the style of 19th century blueprints"
                className="w-full object-cover opacity-90" />
              
            </div>
          </div>

          {/* Inscription block */}
          <div className="mt-16 md:mt-24 border-l-2 border-[#8E795E] pl-8 md:pl-12">
            <blockquote className="font-body text-lg md:text-xl text-[#1A1A1A]/80 leading-[1.8] italic">
              "Designed by G. B. Ferry and A. C. Clas, erected in 1893 and later for the wholesale 
              and retail grocery firm founded by William Steinmeyer, and designated as a Milwaukee 
              Landmark in 1974 in recognition of its historical and architectural significance 
              to the community."
            </blockquote>
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-[#8E795E] mt-4">
              — City of Milwaukee Landmarks Commission, 1974
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}