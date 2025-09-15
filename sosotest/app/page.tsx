import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans flex min-h-screen">
      {/* Menü links */}
      <nav className="w-1/5 bg-gray-900 p-8 flex flex-col gap-6 border-r border-green-500">
        <h2 className="text-2xl font-bold text-green-500">Menü</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#" className="text-white hover:text-green-500 transition-colors">Haupt</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-500 transition-colors">Gallerie</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-500 transition-colors">Über Berlin</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-500 transition-colors">IT-Stadt</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-500 transition-colors">Kultur & Nachtleben</a>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex flex-col items-center p-8">
        <main className="flex flex-col gap-10 items-center w-full max-w-4xl">
          <h1 className="text-6xl font-extrabold text-red-500 tracking-tight">Berlin: Die Hauptstadt</h1>

          {/* Text über Berlin */}
          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Ein Herz für Technologie</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Berlin ist nicht nur eine Stadt mit einer reichen Geschichte und pulsierender Kultur; sie hat sich auch als eine der führenden <b className="text-red-500">IT-Städte</b> Europas etabliert. Die dynamische Startup-Szene, die Vielzahl an Technologieunternehmen und die internationale Gemeinschaft von Entwicklern und Kreativen machen die Stadt zu einem Innovationszentrum. Egal, ob Sie ein Tech-Enthusiast, Künstler oder Geschichtsinteressierter sind, Berlin bietet eine einzigartige Mischung, die das Gestern mit dem Morgen verbindet.
            </p>
          </section>

          {/* Bilder von Berlin mit 3D-Rahmen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">
            <div className="relative">
              <Image src="/berlin/brandenburger.jpg" alt="Brandenburger Tor" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black/50 p-2 rounded">Brandenburger Tor</p>
            </div>
            <div className="relative">
              <Image src="/berlin/berliner-dom.jpg" alt="Berliner Dom" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black/50 p-2 rounded">Berliner Dom</p>
            </div>
            <div className="relative">
              <Image src="/berlin/fernsehturm.jpg" alt="Fernsehturm" width={300} height={200} className="rounded-lg shadow-[8px_8px_0px_rgba(255,0,0,0.6)]" />
              <p className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black/50 p-2 rounded">Fernsehturm</p>
            </div>
          </div>
        </main>

        <footer className="w-full max-w-4xl text-center text-sm text-gray-400 mt-auto pt-10">
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
