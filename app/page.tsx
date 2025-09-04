import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import OurValues from "@/components/OurValues";
import Products from "@/components/Product";
import Packaging from "@/components/Packaging";
import Shipping from "@/components/Shipping";
import GallerySlider from '@/components/GallerySlider';
import Testimonials from "@/components/Testimonials";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
        {/* StatsBar sudah ada DI DALAM Hero, jadi tidak perlu dipanggil lagi */}
      </div>

      {/* HAPUS BARIS INI */}
      {/* <StatsBar /> */}

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
      <Testimonials />
      <GallerySlider />
      <OurTeam />
      <LocationMap />
      <Footer />

    </main>
  );
}