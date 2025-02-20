"use client";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import AboutUs from "@/components/AboutUs";
import ArchitectureInfo from "@/components/ArchitectureInfo";
import OurWork from "@/components/OurWork";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Background>
        <AboutUs />
        <OurWork />
        <div className="w-8/12 h-1 bg-black mx-auto my-4 md:my-16"></div>
        <ArchitectureInfo />
        <div className="w-8/12 h-1 bg-black mx-auto my-4 md:my-16"></div>
        <Timeline />
        <div className="w-8/12 h-1 bg-black mx-auto my-4 md:my-16"></div>
        <Contacts />
        <Footer />
      </Background>
    </>
  );
}
