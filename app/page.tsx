import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import StatsBar from "@/components/StatsBar";
import OurValues from "@/components/OurValues";
import Products from "@/components/Product";
import Packaging from "@/components/Packaging";
import Shipping from "@/components/Shipping";
import Testimonials from "@/components/Testimonials"; // Import Testimonials
import OurTeam from "@/components/OurTeam";       // Import OurTeam
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <StatsBar />
      <div id="product-profile">
        <VisionMission />
      </div>
      <div id="our-values">
        <OurValues />
      </div>
      <div id="product">
        <Products />
      </div>

      <Packaging />
      <Shipping />

      {/* Add the new sections here */}
      <Testimonials />
      <OurTeam />

      <Footer />
    </main>
  );
}