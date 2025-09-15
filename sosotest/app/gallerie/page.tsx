// client-side-Komponente für den Navigations-hook
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // useState für die Zustandsverwaltung

export default function GalleriePage() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Haupt', href: '/' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Über Berlin', href: '/ueber-berlin' },
    { name: 'IT-Stadt', href: '/it-stadt' },
    { name: 'Kultur & Nachtleben', href: '/kultur' },
  ];

  const galleryImages = [
    { src: "/img/brandenburger.jpg", alt: "Brandenburger Tor" },
    { src: "/img/techpark_berlin.jpeg", alt: "Adlershof Technikpark" },
    { src: "/img/weltzeituhr.jpg", alt: "Weltzeituhr & Fernsehturm" },
    { src: "/img/berlin-spree.jpg", alt: "Berliner Spree" },
    { src: "/img/berlin-reichstag.jpg", alt: "Reichstagsgebäude in Berlin" },
    { src: "/img/eastside-gallery.jpg", alt: "East Side Gallery" },
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
      <nav className="w-full bg-transparent p-6 flex justify-center items-center border-b border-green-500 z-20 fixed top-0 left-0">
        <h2 className="text-2xl font-bold text-green-500"></h2>
        <ul className="flex justify-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            const buttonClasses = `
              block text-center rounded-lg border-2 font-semibold px-4 py-2 transition-all duration-200
              ${isActive
                ? "border-white bg-white text-black shadow-[4px_4px_0px_rgba(0,0,0,0.6)]"
                : "border-red-800 bg-red-800 text-white shadow-[4px_4px_0px_rgba(100,255,100,0.4)]"
              }
              hover:bg-gray-800 hover:border-black hover:text-white hover:shadow-[4px_4px_0px_rgba(255,255,255,0.6)]
              active:shadow-none active:translate-x-1 active:translate-y-1
            `;

            return (
              <li key={item.name}>
                <Link href={item.href} className={buttonClasses}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex-1 flex flex-col items-center p-8 z-10 pt-24">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Gallerie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(image)} // Klick-Handler zum Öffnen des Modals
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400} // Kleinere Vorschaugröße
                  height={300}
                  className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]"
                />
                <p className="mt-2 text-center text-white text-sm font-bold">{image.alt}</p>
              </div>
            ))}
          </div>
        </main>
        
        <footer className="w-full max-w-4xl text-center text-sm text-gray-400 mt-auto pt-10 bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-xl">
          <div className="flex justify-center gap-6 mb-2">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">next.js</a>
            <a href="/impressum" className="hover:text-green-500 transition">Impressum</a>
            <a href="/kontakt" className="hover:text-green-500 transition">Kontakt</a>
          </div>
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Armin – Alle Rechte vorbehalten</p>
        </footer>
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
              className="rounded-lg shadow-2xl border-2 border-green-500 max-w-full max-h-[80vh] object-contain"
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
