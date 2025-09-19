import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ItStadtPage() {

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
          <h1 className="text-6xl font-extrabold text-teal-500 tracking-tight">IT-Stadt</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Berlins digitale Transformation</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin hat sich zu einem der dynamischsten Tech-Zentren in Europa entwickelt und zieht Talente und Investitionen aus der ganzen Welt an. Die Stadt ist bekannt für ihre lebendige Start-up-Kultur und beherbergt eine Vielzahl von jungen, innovativen Unternehmen in den Bereichen Fintech, künstliche Intelligenz und E-Commerce. Die lockere Atmosphäre, die internationale Gemeinschaft und die vergleichsweise niedrigen Lebenshaltungskosten (im Vergleich zu anderen Tech-Metropolen) machen Berlin zu einem idealen Nährboden für Kreativität und Unternehmertum.
              <br/><br/>
              Bezirke wie Mitte und Kreuzberg sind zu den Hotspots der Berliner Tech-Szene geworden, mit Coworking-Spaces, Inkubatoren und Büros von großen Technologiekonzernen und vielversprechenden Start-ups. Die enge Vernetzung zwischen Universitäten, Forschungseinrichtungen und der Wirtschaft fördert den ständigen Austausch von Wissen und treibt die digitale Transformation der Stadt weiter voran. Berlin ist nicht nur eine Stadt der Geschichte und Kultur, sondern auch ein zukunftsorientierter Knotenpunkt für die digitale Welt.
            </p>
          </section>

        </main>
<Footer /> {/* <-- Hier wird die  Komponente Footer  verwendet */}
        
      </div>
    </div>
  );
}
