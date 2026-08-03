import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
{
  year: "1893",
  era: "The Founding",
  title: "A Grocery Empire Rises",
  description:
  "William Steinmeyer commissions architects George B. Ferry and Alfred C. Clas to design a wholesale and retail grocery headquarters on Old World Third Street. The first phase — the entire Highland Avenue facade and three northern bays — is erected in the simplified Romanesque Revival Commercial Style that would define Westown's architectural character.",
  detail: "The building's heavy masonry, rounded arches, and deep-set windows reflect the structural confidence of a city at the height of its industrial boom. Milwaukee's cream city brick, drawn from the silts of the Milwaukee River, gives the facade its distinctive warm pallor.",
  image: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/afa112284_generated_23880d89.png",
  imageAlt: "Interior of the 1893 Steinmeyer wholesale grocery warehouse"
},
{
  year: "1898",
  era: "The Expansion",
  title: "The Southern Addition",
  description:
  "Steinmeyer's growing enterprise demands more space. Two additional bays are added to the south along Old World Third Street, seamlessly continuing Ferry & Clas's original design language. The expanded building now occupies the full corner lot, anchoring the intersection of Highland Avenue and Third Street.",
  detail: "The expansion maintains perfect architectural continuity — the same arched fenestration, cornice line, and masonry detailing — a testament to the original architects' foresight and the building's enduring commercial ambition.",
  image: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/38433e471_generated_f45f5110.png",
  imageAlt: "The Milwaukee Landmarks Commission bronze plaque on the Steinmeyer Building"
},
{
  year: "1974",
  era: "The Designation",
  title: "A Milwaukee Landmark",
  description:
  "The City of Milwaukee Landmarks Commission designates the Steinmeyer Building as a Milwaukee Landmark, recognizing its historical and architectural significance to the community. A bronze plaque is erected at the Highland Avenue entrance, permanently inscribing the building's legacy into the city's official record.",
  detail: "The inscription reads: \"Designed by G. B. Ferry and A. C. Clas, erected in 1893 and later for the wholesale and retail grocery firm founded by William Steinmeyer, and designated as a Milwaukee Landmark in 1974 in recognition of its historical and architectural significance to the community.\"",
  image: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/PLACEHOLDER_1974_IMAGE.png",
  imageAlt: "The Steinmeyer Building landmark designation plaque"
},
{
  year: "Today",
  era: "The Renaissance",
  title: "Heritage Meets the Modern Workplace",
  description:
  "The ground floor has been thoughtfully adapted for retail, while the upper stories have been converted into distinctive office spaces. Original 12-foot ceilings, exposed cream city brick, and massive arched windows now frame contemporary workplaces that honor 130 years of continuous commercial purpose.",
  detail: "Listed on the National Register of Historic Places as part of the Old World Third Street Historic District, the Steinmeyer Building stands as proof that the best architecture transcends its era. Its next chapter is being written now.",
  image: "https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/fcd02eabd_generated_e5f68f48.png",
  imageAlt: "Modern office interior inside the Steinmeyer Building"
}];


function TimelineCard({ event, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative">
      
      {/* Connector line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#8E795E]/20" />

      <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? "" : "md:direction-rtl"}`}>
        {/* Text side */}
        <div className={`${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:order-2"}`} style={{ direction: "ltr" }}>
          <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            <span className="font-heading font-black text-5xl md:text-6xl text-[#8E795E]/20 leading-none">
              {event.year}
            </span>
            <div>
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8E795E] block">
                {event.era}
              </span>
            </div>
          </div>

          <h3 className="font-heading font-bold text-xl md:text-2xl text-[#1A1A1A] mb-4 tracking-tight">
            {event.title}
          </h3>
          <p className="font-body text-[#1A1A1A]/70 text-base leading-[1.7] mb-4">
            {event.description}
          </p>
          <p className="font-body text-sm text-[#1A1A1A]/50 leading-[1.7] italic">
            {event.detail}
          </p>
        </div>

        {/* Image side */}
        <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
          <div className="relative group overflow-hidden arch-radius-subtle">
            <img src="https://media.base44.com/images/public/6a43ed8d020d5177787a9ecb/4694f6e79_Steinmeyersign.jpg"

            alt={event.imageAlt}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
            
            <div className="absolute inset-0 bg-[#8E795E]/0 group-hover:bg-[#8E795E]/10 transition-colors duration-500 hidden" />
          </div>
        </div>
      </div>
    </motion.div>);

}

export default function Timeline() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="history" className="py-24 md:py-40 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32">
          
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px flex-1 bg-[#8E795E]/20" />
            <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E]">
              The Layers of Time
            </span>
            <div className="h-px flex-1 bg-[#8E795E]/20" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-center text-[#1A1A1A] tracking-tight">
            130 Years of<br />
            <span className="text-[#8E795E]">Commercial Legacy</span>
          </h2>
        </motion.div>

        {/* Timeline entries */}
        <div className="space-y-24 md:space-y-40">
          {timelineEvents.map((event, i) =>
          <TimelineCard key={event.year} event={event} index={i} />
          )}
        </div>
      </div>
    </section>);

}