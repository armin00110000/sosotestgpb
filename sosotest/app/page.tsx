// client-side-Komponente für den Navigations-hook
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
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

      {/* Geänderte Navigationsleiste als Kopfzeile */}
      <nav className="w-full bg-transparent p-6 flex justify-center items-center border-b border-green-500 z-20 fixed top-0 left-0">
        <h2 className="text-2xl font-bold text-green-500"></h2>
        <ul className="flex justify-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            const buttonClasses = `
              block text-center rounded-lg border-2 font-semibold px-4 py-2 transition-all duration-200
              ${isActive
                ? // Aktiver Stil (vom vorherigen Gallerie-Button)
                "border-white bg-white text-black shadow-[4px_4px_0px_rgba(0,0,0,0.6)]"
                : // Standard-Stil (Dunkelrot, jetzt mit hellgrünem Schatten)
                "border-red-800 bg-red-800 text-white shadow-[4px_4px_0px_rgba(100,255,100,0.4)]"
              }
              
              // Hover-Stil
              hover:bg-gray-800 hover:border-black hover:text-white hover:shadow-[4px_4px_0px_rgba(255,255,255,0.6)]
              
              // Klick-Effekt
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

      {/* Geänderter Hauptinhalt mit oberem Rand */}
      <div className="flex-1 flex flex-col items-center p-8 z-10 pt-24">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-xl">
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Berlin: Die Hauptstadt</h1>
          
          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Ein Herz für Technologie</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin ist nicht nur eine Stadt mit einer reichen Geschichte und pulsierender Kultur; sie hat sich auch als eine der führenden <b className="text-green-500">IT-Städte</b> Europas etabliert. Die dynamische Startup-Szene, die Vielzahl an Technologieunternehmen und die internationale Gemeinschaft von Entwicklern und Kreativen machen die Stadt zu einem Innovationszentrum. Egal, ob Sie ein Tech-Enthusiast, Künstler oder Geschichtsinteressierter sind, Berlin bietet eine einzigartige Mischung, die das Gestern mit dem Morgen verbindet.
            </p>
          </section>

          <div className="grid grid-cols-3 gap-8 w-full mt-6">
            <div className="flex flex-col items-center">
              <Image src="/img/brandenburger.jpg" alt="Brandenburger Tor" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="mt-2 text-center text-white text-sm font-bold">Brandenburger Tor</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/techpark_berlin.jpeg" alt="Adlershof Technikpark" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="mt-2 text-center text-white text-sm font-bold">Adlershof Technikpark</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/weltzeituhr.jpg" alt="alexander platz" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="mt-2 text-center text-white text-sm font-bold">Weltzeituhr & Fernsehturm</p>
            </div>
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
    </div>
  );
}
