// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Importiere die Navbar-Komponente

export default function Home() {
  return (
    <div
      className="bg-black text-white font-sans flex flex-col min-h-screen
                 bg-[url('/circuit_city.png')] bg-cover bg-center bg-fixed
                 relative"
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>

      {/* Hier wird die ausgelagerte Navigationsleiste verwendet */}
      <Navbar />

      {/* Geänderter Hauptinhalt mit oberem Rand */}
      <div className="flex-1 flex flex-col items-center p-8 z-10 pt-24">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Berlin: Die Stadt</h1>
          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Ein Herz für Technologie</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin ist nicht nur eine Stadt mit einer reichen Geschichte und pulsierender Kultur; sie hat sich auch als eine der >
            </p>
          </section>

          <div className="grid grid-cols-3 gap-8 w-full mt-6">
            <div className="flex flex-col items-center">
              <Image src="/img/brandenburger.jpg" alt="Brandenburger Tor" width={300} height={200} className="rounded-lg shadow-[8p>
              <p className="mt-2 text-center text-white text-sm font-bold">Brandenburger Tor</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/techpark_berlin.jpeg" alt="Adlershof Technikpark" width={300} height={200} className="rounded-lg sha>
              <p className="mt-2 text-center text-white text-sm font-bold">Adlershof Technikpark</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/weltzeituhr.jpg" alt="alexander platz" width={300} height={200} className="rounded-lg shadow-[8px_8p>
              <p className="mt-2 text-center text-white text-sm font-bold">Weltzeituhr & Fernsehturm</p>
            </div>
          </div>
        </main>

        <footer className="w-full max-w-4xl text-center text-sm text-gray-400 mt-auto pt-10 bg-gray-900 bg-opacity-80 p-4 rounded-l>
          <div className="flex justify-center gap-6 mb-2">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">next>
            <a href="/impressum" className="hover:text-green-500 transition">Impressum</a>
            <a href="/kontakt" className="hover:text-green-500 transition">Kontakt</a>
          </div>
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Armin – Alle Rechte vorbehalten</p>
        </footer>
      </div>
    </div>
  );
}
