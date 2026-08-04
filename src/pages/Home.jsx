import React from "react";
import Navbar from "@/components/steinmeyer/Navbar";
import Hero from "@/components/steinmeyer/Hero";
import AvailableSpace from "@/components/steinmeyer/AvailableSpace";
import LeaseTerms from "@/components/steinmeyer/LeaseTerms";
import WhyLocation from "@/components/steinmeyer/WhyLocation";
import Architecture from "@/components/steinmeyer/Architecture";
import District from "@/components/steinmeyer/District";
import Timeline from "@/components/steinmeyer/Timeline";
import Tenants from "@/components/steinmeyer/Tenants";
import Contact from "@/components/steinmeyer/Contact";
import Footer from "@/components/steinmeyer/Footer";

export default function Home() {
  return (
    <div className="bg-[#FDFCF8] min-h-screen">
      <Navbar />
      <Hero />
      <AvailableSpace />
      <LeaseTerms />
      <WhyLocation />
      <Architecture />
      <District />
      <Timeline />
      <Tenants />
      <Contact />
      <Footer />
    </div>
  );
}