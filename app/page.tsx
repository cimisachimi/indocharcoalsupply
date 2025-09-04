import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import StatsBar from "@/components/StatsBar";
import OurValues from "@/components/OurValues";
import Products from "@/components/Product";
import Packaging from "@/components/Packaging"; // Import the new Packaging component
import Footer from "@/components/Footer"; // Import the new Footer component

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

      {/* Use the new Packaging component */}
      <Packaging />

      {/* Placeholder for Shipping Section */}
      <section id="shipping" className="py-24 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shipping</h2>
          <p className="mt-4 text-lg text-gray-600">Details about our shipping process and partners will be here soon.</p>
        </div>
      </section>

      {/* Add the Footer, which also serves as the contact section */}
      <Footer />
    </main>
  );
}