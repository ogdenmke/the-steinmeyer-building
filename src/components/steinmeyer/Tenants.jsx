import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import tenantsBuildingImg from "@/assets/images/tenants-building.jpg";
import edelweissLogo from "@/assets/images/tenant-edelweiss-logo.jpg";
import wisconsinCheeseMartLogo from "@/assets/images/tenant-wisconsin-cheese-mart-logo.png";
import luckyCloverImg from "@/assets/images/tenant-lucky-clover.jpg";
import rwbLogo from "@/assets/images/tenant-rwb-logo.png";

const tenants = [
  {
    name: "Edelweiss Cruises",
    description: "Scenic boat tours showcasing Milwaukee from a whole new perspective.",
    logos: [edelweissLogo],
  },
  {
    name: "Wisconsin Cheese Mart",
    description: "A Wisconsin classic, serving the city's finest cheese and specialty goods.",
    logos: [wisconsinCheeseMartLogo],
  },
  {
    name: "Lucky Clover & RWB",
    description: "Two lively local bars bringing warmth, great drinks, and unbeatable energy.",
    logos: [luckyCloverImg, rwbLogo],
  },
];

export default function Tenants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tenants" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
                Current Tenants
              </span>
              <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
                A Living<br />Ground Floor
              </h2>
              <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg max-w-xl leading-[1.7]">
                The Steinmeyer Building is already home to a thriving mix of local businesses
                bringing daily foot traffic and character to the block.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src={tenantsBuildingImg}
                alt="Wisconsin Cheese Mart storefront in the Steinmeyer Building"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tenants.map((t) =>
              <div key={t.name} className="border border-[#8E795E]/20 p-8 bg-[#FDFCF8]">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-lg text-[#1A1A1A]">
                    {t.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {t.logos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${t.name} logo`}
                        className="h-16 w-16 object-contain rounded-full bg-white p-1"
                      />
                    ))}
                  </div>
                </div>
                <p className="font-body text-sm text-[#1A1A1A]/60 leading-[1.7]">
                  {t.description}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}