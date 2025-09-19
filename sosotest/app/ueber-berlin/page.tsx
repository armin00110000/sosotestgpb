// client-side-Komponente für den Navigations-hook
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutBerlinPage() {


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
          <h1 className="text-6xl font-extrabold text-teal-500 tracking-tight">Über Berlin</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Eine kurze Geschichte</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin, das historische Herz Deutschlands, entstand aus zwei mittelalterlichen Siedlungen, Cölln und Berlin, und entwickelte sich im Laufe der Jahrhunderte zur Hauptstadt Preußens und des Deutschen Kaiserreichs. Nach dem Ersten Weltkrieg wurde es das Zentrum der pulsierenden Weimarer Republik, bekannt für seine Kunst, Wissenschaft und sein Nachtleben.
              <br/><br/>
              Die Stadt erlebte im Zweiten Weltkrieg verheerende Zerstörungen, die mit dem Fall des Dritten Reiches endeten. Nach 1945 wurde sie in vier Sektoren geteilt und 1961 durch die Berliner Mauer geteilt. Die Mauer wurde zum Symbol des Kalten Krieges und teilte die Stadt und ihre Bevölkerung für fast drei Jahrzehnte in Ost und West.
              <br/><br/>
              Am 9. November 1989 fiel die Mauer, was den Weg für die deutsche Wiedervereinigung ebnete. Seitdem hat sich Berlin zu einer modernen Metropole entwickelt, die eine einzigartige Mischung aus historischer Tiefe, künstlerischer Freiheit und technologischer Innovation bietet. Es ist heute ein globales Zentrum für Politik, Kultur und Wissenschaft.
            </p>
          </section>

        </main>
<Footer /> {/* <-- Hier wird die  Komponente Footer  verwendet */}        
      </div>
    </div>
  );
}



