import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full max-w-4xl text-center text-sm text-gray-400 mt-auto pt-10 bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-xl">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">next.js</a>
        <a href="/impressum" className="hover:text-teal-500 transition">Impressum</a>
        <a href="/kontakt" className="hover:text-teal-500 transition">Kontakt</a>
      </div>
      <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Armin – Alle Rechte vorbehalten</p>
    </footer>
  );
};

export default Footer;
