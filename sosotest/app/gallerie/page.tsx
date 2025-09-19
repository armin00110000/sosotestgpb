"use client";

import Image from "next/image";
import { useState } from "react"; // useState für die Zustandsverwaltung
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleriePage() {

  const galleryImages = [
    { src: "/img/brandenburger.jpg", alt: "Brandenburger Tor" },
    { src: "/img/techpark_berlin.jpeg", alt: "Adlershof Technikpark" },
    { src: "/img/weltzeituhr.jpg", alt: "Weltzeituhr & Fernsehturm" },
    { src: "/img/spree_berliner_dom.jpg", alt: "Spree & Berliner Dom" },
    { src: "/img/reichstag.jpg", alt: "Reichstagsgebäude in Berlin" },
    { src: "/img/eastside.jpg", alt: "East Side Gallery" },
    // Füge hier weitere Bilder hinzu
  ];

  // Zustandsvariablen für das Modal
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="bg-black text-white font-sans flex flex-col min-h-screen
                 bg-[url('/circuit_city.png')] bg-cover bg-center bg-fixed
                 relative"
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>

      {/* Navigationsleiste */}
     {/* Hier wird die ausgelagerte Navigationsleiste verwendet */}
      <Navbar />

      <div className="flex-1 flex flex-col items-center p-8 z-10 pt-24">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-extrabold text-teal-500 tracking-tight">Gallerie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {galleryImages.map((image, index) => (
<div
      key={index}
      className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => openModal(image)}
    >
      <div className="relative w-full h-48 rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
               <p className="mt-2 text-center text-white text-sm font-bold">{image.alt}</p>
              </div>
            ))}
          </div>
        </main>
        
<Footer /> {/* <-- Hier wird die  Komponente Footer  verwendet */}

      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Schließt Modal bei Klick außerhalb des Bildes
        >
          <div className="relative max-w-4xl max-h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1000} // Größere Bildgröße im Modal
              height={750}
              className="rounded-lg shadow-2xl border-2 border-teal-500 max-w-full max-h-[80vh] object-contain"
            />
            <p className="mt-4 text-white text-lg font-bold">{selectedImage.alt}</p>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
