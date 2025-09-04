import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import StatsBar from "@/components/StatsBar";
import OurValues from "@/components/OurValues";
import Products from "@/components/Product";

// Import the new component


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <VisionMission />
      <OurValues />
      <Products />



      {/* You can add more sections below */}
    </main>
  );
}