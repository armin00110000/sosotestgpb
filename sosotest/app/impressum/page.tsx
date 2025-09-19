// client-side-Komponente für den Navigations-hook
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ImpressumPage() {

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
          <h1 className="text-6xl font-extrabold text-teal-500 tracking-tight">Impressum</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500 w-full text-justify">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Armin
              <br />
              Warschauer Str. 12
              <br />
              10243 Berlin
            </p>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500 w-full text-justify">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Kontakt</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              E-Mail: kontakt@armin.dev (fiktiv)
              <br />
              Website: www.armin.dev (fiktiv)
            </p>
          </section>
        </main>
        
        {/* Footer hinzugefügt */}
        <Footer /> {/* <-- Hier wird die  Komponente Footer  verwendet */}
      </div>
    </div>
  );
}
