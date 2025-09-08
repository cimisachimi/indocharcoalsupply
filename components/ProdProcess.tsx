import React from "react";
import Image from 'next/image';

const processSteps = [
  {
    id: "01",
    icon: { type: "svg", value: "/prod-icon/mount.svg" },
    title: "Sourcing and Selection",
    description:
      "We begin by sourcing the finest coconut shells from sustainable plantations. These shells are carefully selected to ensure they are of the highest quality and free from impurities.",
  },
  {
    id: "02",
    icon: { type: "svg", value: "/prod-icon/sun.svg" },
    title: "Drying",
    description:
      "The collected coconut shells are thoroughly dried to reduce moisture content. This step is crucial for ensuring efficient carbonization and producing high-quality briquettes.",
  },
  {
    id: "03",
    icon: { type: "svg", value: "/prod-icon/bike.svg" },
    title: "Carbonization",
    description:
      "The dried coconut shells are then placed in carbonization chambers or kilns. Under controlled temperature and oxygen conditions, the shells undergo a process of pyrolysis, converting them into charcoal. This process removes volatile matter and impurities, resulting in a high-carbon content product.",
  },
  {
    id: "04",
    icon: { type: "svg", value: "/prod-icon/double.svg" },
    title: "Crushing and Screening",
    description:
      "The carbonized material is crushed and screened to achieve the desired particle size. This step ensures uniformity in the briquettes and optimizes their burning properties.",
  },
  {
    id: "05",
    icon: { type: "svg", value: "/prod-icon/mix.svg" },
    title: "Mixing and Binding",
    description:
      "The crushed charcoal is mixed with a natural binder, such as starch or clay. This binding agent helps to hold the briquettes together during the forming process.",
  },
  {
    id: "06",
    icon: { type: "svg", value: "/prod-icon/arrow.svg" },
    title: "Molding and Pressing",
    description:
      "The charcoal blend is then compressed into molds to achieve the desired shape and size of the briquettes. The level of pressure applied in this stage plays a crucial role in determining the density and durability of the final product.",
  },
  {
    id: "07",
    icon: { type: "svg", value: "/prod-icon/sun 2.svg" },
    title: "Drying",
    description:
      "The formed briquettes are thoroughly dried to eliminate any residual moisture. This process ensures they are fully prepared for packaging and distribution.",
  },
  {
    id: "08",
    icon: { type: "svg", value: "/prod-icon/shield.svg" },
    title: "Quality Control",
    description:
      "Every batch of briquettes goes through strict quality control checks to ensure they meet our high standards. We evaluate key factors such as density, moisture content, ash content, and burn duration.",
  },
  {
    id: "09",
    icon: { type: "svg", value: "/prod-icon/package.svg" },
    title: "Quality Control",
    description:
      "The final briquettes are meticulously packaged to ensure protection during transportation and storage. We provide various packaging options to accommodate different customer requirements.",
  },
  {
    id: "10",
    icon: { type: "svg", value: "/prod-icon/safe.svg" },
    title: "Quality Control",
    description:
      "Store the briquettes in a dry, well-ventilated area away from direct sunlight and heat sources.",
  },
];

const renderIcon = (icon: { type: any; value: any; }) => {
  if (icon.type === "emoji") {
    return <span style={{ fontSize: "24px" }}>{icon.value}</span>;
  } else if (icon.type === "svg") {
    return (
      <Image
        src={icon.value}
        alt="Step icon"
        width={40}
        height={40}
        style={{ 
          marginBottom: "10px",
          filter: "invert(29%) sepia(93%) saturate(5132%) hue-rotate(353deg) brightness(98%) contrast(105%)" }}
      />
    );
  }
  return null;
};

const ProductionProcess = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/prod-cover.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "60px 20px",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontWeight: "700", fontSize: "2.8rem", marginBottom: "10px", textAlign: "center" }}>
          Production <em>Process</em>
        </h1>
        <p style={{ marginBottom: "40px", fontSize: "1rem", lineHeight: "1.5", color: "#ddd", textAlign: "center"}}>
          Our Products is premium coconut charcoal briquettes are made from the finest coconut shells, ensuring superior quality and performance. Crafted with precision and care, our briquettes offer exceptional heat output, long burn times, and minimal ash. Perfect for grilling, barbecuing, and indoor fireplaces, our products provide a clean and efficient burn, enhancing the flavor of your food.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {processSteps.map(({ id, icon, title, description }) => (
            <div
              key={id}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  color: "rgba(0, 0, 0, 0.05)",
                  userSelect: "none",
                }}
              >
                {id}
              </span>

              {/* Icon di kiri atas */}
              <div style={{ marginBottom: "12px" }}>{renderIcon(icon)}</div>
              
              {/* Judul & Deskripsi */}
              <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>{title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5", color: "#444" }}>{description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
