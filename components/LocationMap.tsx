import React from "react";

const LocationMap: React.FC = () => {
  // ✅ Use the place embed link from Google Maps (this includes a marker)
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65100.8996016666!2d110.34813238201151!3d-7.792446326971951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599776e6106f%3A0x20bdbbe67a545403!2sIndocharcoalsupply!5e0!3m2!1sen!2sid!4v1756979870049!5m2!1sen!2sid";

  // ✅ Direct link to open full Google Maps
  const mapsLink =
    "https://www.google.com/maps/place/Indocharcoalsupply/@-7.7924463,110.3481324,15z";

  return (
    <section id="location" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-12">
          Our Location
        </h2>

        {/* Map Preview (clickable, opens Google Maps) */}
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl shadow-lg border border-gray-200 w-full h-[450px]"
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </section>
  );
};

export default LocationMap;
