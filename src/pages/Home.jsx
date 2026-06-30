import React from "react";
import Navbar from "@/components/steinmeyer/Navbar";
import Hero from "@/components/steinmeyer/Hero";
import Timeline from "@/components/steinmeyer/Timeline";
import Architecture from "@/components/steinmeyer/Architecture";
import Spaces from "@/components/steinmeyer/Spaces";
import District from "@/components/steinmeyer/District";
import Contact from "@/components/steinmeyer/Contact";
import Footer from "@/components/steinmeyer/Footer";

export default function Home() {
  return (
    <div className="bg-[#FDFCF8] min-h-screen">
      <Navbar />
      <Hero />
      <Timeline />
      <Architecture />
      <Spaces />
      <District />
      <Contact />
      <Footer />
    </div>
  );
}