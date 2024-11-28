import React, { useState, useEffect } from "react";

function Home() {
  const images = [
    "/src/Images/p1.jpg",
    "/src/Images/p2.jpg",
    "/src/Images/p3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt="slideshow"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
          brightness: "0.7",
        }}
      />
    </div>
  );
}

export default Home;
