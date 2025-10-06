import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, img: "/assets/icons/billboard-01.png" },
  { id: 2, img: "/assets/icons/billboard-01 (1).png" },
  { id: 3, img: "/assets/icons/billboard-01 (2).png" },
];

const Corusel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div className="relative max-w-[1400px] m-auto p-4 h-[500px] rounded-lg mx-auto overflow-hidden mb-15">
        <img
          src={slides[current].img}
          alt={slides[current].text}
          className="w-full h-full object-cover transition-all duration-700 rounded-2xl"
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-bold bg-black/40 px-6 py-2 rounded-lg">
          {slides[current].text}
        </div>
      </div>
    </div>
  );
};
export default Corusel;
