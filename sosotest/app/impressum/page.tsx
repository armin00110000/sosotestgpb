// client-side-Komponente für den Navigations-hook
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";

export default function ImpressumPage() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Haupt', href: '/' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Über Berlin', href: '/ueber-berlin' },
    { name: 'IT-Stadt', href: '/it-stadt' },
    { name: 'Kultur & Nachtleben', href: '/kultur' },
    { name: 'Impressum', href: '/impressum' },
  ];

  return (
    <div
      className="bg-black text-white font-sans flex flex-col min-h-screen
                 bg-[url('/circuit_city.png')] bg-cover bg-center bg-fixed
                 relative"
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>

      {/* Navigationsleiste */}
<Navbar/>
      <div className="flex-1 flex flex-col items-center p-8 z-10 pt-24">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Impressum</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500 w-full text-justify">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Armin
              <br />
              Warschauer Str. 12
              <br />
              10243 Berlin
            </p>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500 w-full text-justify">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Kontakt</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              E-Mail: kontakt@armin.dev (fiktiv)
              <br />
              Website: www.armin.dev (fiktiv)
            </p>
          </section>
        </main>
        
        {/* Footer hinzugefügt */}
        <footer className="w-full max-w-4xl text-center text-sm text-gray-400 mt-auto pt-10 bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-xl">
          <div className="flex justify-center gap-6 mb-2">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">next.js</a>
            <a href="/impressum" className="hover:text-green-500 transition">Impressum</a>
            <a href="/kontakt" className="hover:text-green-500 transition">Kontakt</a>
          </div>
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Armin – Alle Rechte vorbehalten</p>
        </footer>
      </div>
    </div>
  );
}
