import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tenants = [
  {
    name: "Edelweiss Cruises",
    description: "Scenic boat tours showcasing Milwaukee from a whole new perspective.",
    logos: ["https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/36fc535dc_Edelweiss_Logo.jpeg"],
  },
  {
    name: "Wisconsin Cheese Mart",
    description: "A Wisconsin classic, serving the city's finest cheese and specialty goods.",
    logos: ["https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/03b3442db_WisconsinCheeseMart.png"],
  },
  {
    name: "Lucky Clover & RWB",
    description: "Two lively local bars bringing warmth, great drinks, and unbeatable energy.",
    logos: [
      "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/908c35b3d_LuckyClover.jpg",
      "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/d7730ca00_RWB_Logo.png",
    ],
  },
];

export default function Tenants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tenants" className="py-24 md:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>

          <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
            Current Tenants
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
            A Living<br />Ground Floor
          </h2>
          <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg max-w-2xl leading-[1.7] mb-16">
            The Steinmeyer Building is already home to a thriving mix of local businesses
            bringing daily foot traffic and character to the block.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tenants.map((t) =>
              <div key={t.name} className="border border-[#8E795E]/20 p-8 bg-[#FDFCF8]">
                <div className="flex items-center gap-3 mb-4">
                  {t.logos.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${t.name} logo`}
                      className="h-14 w-14 object-contain rounded-full bg-white"
                    />
                  ))}
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#1A1A1A] mb-2">
                  {t.name}
                </h3>
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