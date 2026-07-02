import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const steinmeyerIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:20px;height:20px;background:#8E795E;border:3px solid #FDFCF8;border-radius:50% 50% 0 0;transform:rotate(45deg);box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const markerIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:12px;height:12px;background:#4A5D50;border:2px solid #FDFCF8;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const STEINMEYER_POS = [43.04418, -87.91432];

const nearbyMarkers = [
  { name: "Turner Hall", position: [43.04455, -87.91398], description: "Historic 1882 gymnasium and cultural hub — about 400 feet away" },
  { name: "Pere Marquette Historic Site", position: [43.04390, -87.91500], description: "Site of early French exploration — about 500 feet away" },
  { name: "Milwaukee Public Market", position: [43.03985, -87.90930], description: "Beloved indoor market in the Historic Third Ward — about 0.6 miles away" },
  { name: "Fiserv Forum", position: [43.04455, -87.91700], description: "Home of the Milwaukee Bucks — about 0.2 miles away" },
  { name: "Milwaukee River Walk", position: [43.04100, -87.90980], description: "Scenic riverside promenade through downtown — about 0.5 miles away" },
];

export default function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-40 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#8E795E] block mb-4">
            Charted on the Map
          </span>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-[#1A1A1A] tracking-tight mb-6">
            A Landmark Among<br />Landmarks
          </h2>
          <p className="font-body text-[#1A1A1A]/70 text-base md:text-lg max-w-2xl leading-[1.7] mb-12">
            The Steinmeyer Building anchors a dense cluster of Milwaukee historical markers.
            Explore its exact position alongside Turner Hall, the Pere Marquette Historic Site,
            and the other landmarks within walking distance.
          </p>

          <div className="border border-[#8E795E]/20 arch-radius-subtle overflow-hidden">
            <MapContainer
              center={STEINMEYER_POS}
              zoom={17}
              scrollWheelZoom={false}
              attributionControl={false}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              <Marker position={STEINMEYER_POS} icon={steinmeyerIcon}>
                <Popup>
                  <span className="font-semibold">The Steinmeyer Building</span>
                  <br />205 W. Highland Avenue — Est. 1893
                </Popup>
              </Marker>
              {nearbyMarkers.map((m) => (
                <Marker key={m.name} position={m.position} icon={markerIcon}>
                  <Popup>
                    <span className="font-semibold">{m.name}</span>
                    <br />{m.description}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}