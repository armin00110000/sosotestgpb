// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Haupt', href: '/' },
    { name: 'Gallerie', href: '/gallerie' },
    { name: 'Über Berlin', href: '/ueber-berlin' },
    { name: 'IT-Stadt', href: '/it-stadt' },
    { name: 'Kultur & Nachtleben', href: '/kultur' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gray-900 p-6 flex justify-center items-center border-b border-teal-500 z-50 fixed top-0 left-0">

{/* Logo auf der linken Seite */}
<div className="absolute top-0 left-6">
  <Image
    src="/img/logo_t.png"
    alt="Logo"
    width={160}
    height={160}
    className="rounded-full w-20 h-20 md:w-40 md:h-40" // Mobile-First-Ansatz
  />
</div>


      {/* Hamburger-Menü für Mobilgeräte */}
      <div className="md:hidden flex items-center z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Desktop-Menü */}
      <ul className="hidden md:flex justify-center gap-6">
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

      {/* Mobile Menü als Overlay */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-green-500 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-8">
          {navItems.map((item) => (
            <li key={item.name} onClick={() => setIsMenuOpen(false)}>
              <Link href={item.href}>
                <span className="text-white text-3xl font-bold hover:text-green-500 transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
