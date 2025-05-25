// src/components/Slideshow.jsx (atau lokasi komponenmu)
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Impor ikon panah

export default function Slideshow() {
  const slides = [
    {
      src: "https://placehold.co/600x150?text=Motif+Parang",
      alt: "Motif Parang",
    },
    {
      src: "https://placehold.co/600x150?text=Motif+Kawung",
      alt: "Motif Kawung",
    },
    {
      src: "https://placehold.co/600x150?text=Motif+Mega+Mendung",
      alt: "Motif Mega Mendung",
    },
    {
      src: "https://placehold.co/600x150?text=Motif+Sido+Luhur",
      alt: "Motif Sido Luhur",
    },
    {
      src: "https://placehold.co/600x150?text=Motif+Truntum",
      alt: "Motif Truntum",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="rounded-lg overflow-hidden w-full h-28 sm:h-32 md:h-36 lg:h-40 relative"
      aria-label="Slideshow Motif Batik"
    >
      <img
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs font-semibold rounded px-2 py-0.5 select-none">
        {slides[currentIndex].alt}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          aria-label="Previous Slide"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? slides.length - 1 : currentIndex - 1
            )
          }
          className="bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-1"
          type="button"
        >
          {/* Menggunakan FontAwesomeIcon untuk ikon panah kiri */}
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          aria-label="Next Slide"
          onClick={() =>
            setCurrentIndex(
              currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-1"
          type="button"
        >
          {/* Menggunakan FontAwesomeIcon untuk ikon panah kanan */}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
