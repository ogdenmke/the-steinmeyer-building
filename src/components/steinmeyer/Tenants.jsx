import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Store } from "lucide-react";

const tenants = [
  { name: "Edelweiss Cruises", description: "Scenic boat tours showcasing Milwaukee from a whole new perspective." },
  { name: "The Cheese Shop", description: "A Wisconsin classic, serving the city's finest cheese and specialty goods." },
  { name: "Lucky Clover & RWB", description: "Two lively local bars bringing warmth, great drinks, and unbeatable energy." },
];

export default function Tenants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
            {tenants.map((t) => (
              <div key={t.name} className="border border-[#8E795E]/20 p-8 bg-[#FDFCF8]">
                <Store size={20} className="text-[#8E795E] mb-4" />
                <h3 className="font-heading font-semibold text-lg text-[#1A1A1A] mb-2">
                  {t.name}
                </h3>
                <p className="font-body text-sm text-[#1A1A1A]/60 leading-[1.7]">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}