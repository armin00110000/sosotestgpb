import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-red-500 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-2">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <h1 className="text-4xl font-bold">Test Webseite</h1>
        <p className="text-sm text-red-300">Autor: Armin</p>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Bilder von Berlin */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Image src="/berlin/brandenburger.jpg" alt="Brandenburger Tor" width={300} height={200} className="rounded-lg shadow-lg" />
          <Image src="/berlin/berliner-dom.jpg" alt="Berliner Dom" width={300} height={200} className="rounded-lg shadow-lg" />
          <Image src="/berlin/fernsehturm.jpg" alt="Fernsehturm" width={300} height={200} className="rounded-lg shadow-lg" />
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Starte, indem du{" "}
            <code className="bg-red-800/40 text-white px-1 py-0.5 rounded">
              pages/index.js
            </code>{" "}
            bearbeitest.
          </li>
          <li className="tracking-[-.01em]">
            Speichere und sieh deine Änderungen sofort.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* 3D Button: Deploy */}
          <a
            className="rounded-lg border border-red-700 shadow-[4px_4px_0px_rgba(239,68,68,0.8)] bg-red-700 text-white px-6 py-2 hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(239,68,68,0.6)] transition-all"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt deployen
          </a>

          {/* 3D Button: Doku */}
          <a
            className="rounded-lg border border-white/30 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] px-6 py-2 text-white hover:bg-white hover:text-black hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] transition-all"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Dokumentation lesen
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex flex-col gap-2 items-center justify-center text-sm text-red-400 mt-8">
        <div className="flex gap-4">
<a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Lernen
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Beispiele
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Zur Next.js Seite →
        </a>
          <a
            href="/impressum"
            className="hover:underline hover:text-red-300 transition"
          >
            Impressum
          </a>
          <a
            href="/kontakt"
            className="hover:underline hover:text-red-300 transition"
          >
            Kontakt
          </a>
        </div>
        <p className="text-xs text-red-600">&copy; {new Date().getFullYear()} Armin – Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}
