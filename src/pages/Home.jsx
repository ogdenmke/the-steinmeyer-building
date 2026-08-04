import React from "react";
import Navbar from "@/components/steinmeyer/Navbar";
import Hero from "@/components/steinmeyer/Hero";
import AvailableSpace from "@/components/steinmeyer/AvailableSpace";
import LeaseTerms from "@/components/steinmeyer/LeaseTerms";
import Tenants from "@/components/steinmeyer/Tenants";
import Architecture from "@/components/steinmeyer/Architecture";
import District from "@/components/steinmeyer/District";
import Timeline from "@/components/steinmeyer/Timeline";
import Contact from "@/components/steinmeyer/Contact";
import Footer from "@/components/steinmeyer/Footer";

export default function Home() {
  return (
    <div className="bg-[#FDFCF8] min-h-screen">
      <Navbar />
      <Hero />
      <AvailableSpace />
      <LeaseTerms />
      <Tenants />
      <Architecture />
      <District />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}