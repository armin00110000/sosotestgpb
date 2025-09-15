// client-side-Komponente für den Navigations-hook
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KontaktPage() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Haupt', href: '/' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Über Berlin', href: '/ueber-berlin' },
    { name: 'IT-Stadt', href: '/it-stadt' },
    { name: 'Kultur & Nachtleben', href: '/kultur' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <div
      className="bg-black text-white font-sans flex flex-col min-h-screen
                 bg-[url('/circuit_city.png')] bg-cover bg-center bg-fixed
                 relative"
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>

      {/* Navigationsleiste */}
      <nav className="w-full bg-transparent p-6 flex justify-around items-center border-b border-green-500 z-20 fixed top-0 left-0">
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
          <h1 className="text-6xl font-extrabold text-green-500 tracking-tight">Kontakt</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500 w-full">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Kontaktiere uns</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6 text-justify">
              Wenn du Fragen, Anregungen oder Feedback hast, nutze gerne das folgende Formular, um uns zu erreichen. Wir werden uns so schnell wie möglich bei dir melden.
            </p>
            
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Dein Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-green-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-green-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Deine Nachricht an uns"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-green-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="mt-4 block w-full text-center rounded-lg border-2 font-semibold px-4 py-2 transition-all duration-200 border-red-800 bg-red-800 text-white shadow-[4px_4px_0px_rgba(100,255,100,0.4)] hover:bg-gray-800 hover:border-black hover:text-white hover:shadow-[4px_4px_0px_rgba(255,255,255,0.6)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                Senden
              </button>
            </form>
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
