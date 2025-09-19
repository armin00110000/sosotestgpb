import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KulturPage() {

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
          <h1 className="text-6xl font-extrabold text-teal-500 tracking-tight">Kultur & Nachtleben</h1>

          <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-500">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Ein kreatives Herz, das niemals schläft</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Berlin ist eine Stadt der Kontraste und ein Schmelztiegel für Kunst und Kultur. Von den weltberühmten Museen auf der Museumsinsel bis hin zu den urbanen Kunstwerken der East Side Gallery bietet die Stadt eine Fülle an kulturellen Erlebnissen. Theater, Opernhäuser und unzählige Galerien spiegeln die vielfältige und freie Kunstszene wider. Überall in der Stadt findet man Street Art und kreative Pop-up-Projekte, die den einzigartigen Geist der Stadt einfangen.
              <br/><br/>
              Wenn die Sonne untergeht, erwacht das legendäre Nachtleben. Berlin ist die inoffizielle Hauptstadt der elektronischen Musik und zieht Clubgänger aus der ganzen Welt an. Von riesigen Techno-Clubs in ehemaligen Industriegebäuden bis hin zu kleinen, intimen Bars und Kneipen in den Kiezen – hier findet jeder seinen Platz. Die Berliner Nachtkultur ist bekannt für ihre Toleranz und Offenheit und bietet einen Raum für Selbstentfaltung und unvergessliche Nächte.
            </p>
          </section>

        </main>
<Footer /> {/* <-- Hier wird die  Komponente Footer  verwendet */}        
      </div>
    </div>
  );
}
