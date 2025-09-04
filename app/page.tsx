import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission"; // Import the new component

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VisionMission /> {/* Add the new section here */}

      {/* You can add more sections below */}
    </main>
  );
}