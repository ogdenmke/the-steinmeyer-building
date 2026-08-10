import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const businesses = [
  {
    name: "Usinger's Famous Sausage",
    description:
      "A Milwaukee institution since 1880, crafting legendary sausages just steps from the Steinmeyer Building.",
    logo: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/7eec43148_ChatGPTImageAug10202609_10_34AM.png",
  },
  {
    name: "Mader's Restaurant",
    description:
      "Milwaukee's iconic German restaurant since 1902, serving award-winning Bavarian cuisine on Old World Third Street.",
    logo: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/3642c8a58_ChatGPTImageAug10202609_14_44AM.png",
  },
];

export default function LocalBusiness() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
            Nearby Institutions
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
            Local Business
          </h2>
          <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg max-w-2xl leading-[1.7] mb-16">
            Old World Third Street is anchored by legendary Milwaukee businesses
            that have defined the neighborhood for over a century.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {businesses.map((b) => (
              <div key={b.name} className="border border-[#8E795E]/20 p-8 bg-[#FDFCF8]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="h-20 w-20 object-contain rounded-lg bg-black p-1.5"
                  />
                  <h3 className="font-heading font-semibold text-lg text-[#1A1A1A]">
                    {b.name}
                  </h3>
                </div>
                <p className="font-body text-sm text-[#1A1A1A]/60 leading-[1.7]">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}