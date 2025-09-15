// client-side-Komponente für den Navigations-hook
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutBerlinPage() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Haupt', href: '/' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Über Berlin', href: '/ueber-berlin' },
    { name: 'IT-Stadt', href: '/it-stadt' },
    { name: 'Kultur & Nachtleben', href: '/kultur' },
  ];

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
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Über Berlin</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Eine kurze Geschichte</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin, das historische Herz Deutschlands, entstand aus zwei mittelalterlichen Siedlungen, Cölln und Berlin, und entwickelte sich im Laufe der Jahrhunderte zur Hauptstadt Preußens und des Deutschen Kaiserreichs. Nach dem Ersten Weltkrieg wurde es das Zentrum der pulsierenden Weimarer Republik, bekannt für seine Kunst, Wissenschaft und sein Nachtleben.
              <br/><br/>
              Die Stadt erlebte im Zweiten Weltkrieg verheerende Zerstörungen, die mit dem Fall des Dritten Reiches endeten. Nach 1945 wurde sie in vier Sektoren geteilt und 1961 durch die Berliner Mauer geteilt. Die Mauer wurde zum Symbol des Kalten Krieges und teilte die Stadt und ihre Bevölkerung für fast drei Jahrzehnte in Ost und West.
              <br/><br/>
              Am 9. November 1989 fiel die Mauer, was den Weg für die deutsche Wiedervereinigung ebnete. Seitdem hat sich Berlin zu einer modernen Metropole entwickelt, die eine einzigartige Mischung aus historischer Tiefe, künstlerischer Freiheit und technologischer Innovation bietet. Es ist heute ein globales Zentrum für Politik, Kultur und Wissenschaft.
            </p>
          </section>

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
    </div>
  );
}



