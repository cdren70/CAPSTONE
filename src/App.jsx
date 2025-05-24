import Header from './components/Header.jsx'
import UploadButton from './components/UploadButton.jsx'
import Slideshow from './components/Slideshow.jsx'
import Feature from './components/Feature.jsx'
import PopularMotif from './components/PopularMotif.jsx'
import Footer from './components/Footer.jsx'
import { faBolt, faBook, faCompass } from '@fortawesome/free-solid-svg-icons';



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-normal mb-6 text-gray-900 md: mt-10">
            Temukan Makna Budaya di Balik Motif Batik
          </h1>
          <UploadButton />
        </section>

        {/* Slideshow */}
        <section className="mb-14">
          <Slideshow />
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <Feature 
            icon={faBolt} 
            title="Cepat" 
            description="Unggah & Identifikasi" 
          />
          <Feature
            icon={faBook}
            title="Edukatif"
            description="Pelajari Filosofi"
          />
          <Feature
            icon={faCompass}
            title="Interaktif"
            description="Jelajahi Ragam Motif"
          />
        </section>

        {/* Popular Motifs */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            Contoh Motif Populer
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 overflow-x-visible pb-2">
            {['Parang', 'Kawung', 'Mega Mendung', 'Sido Luhur', 'Truntum'].map((motif) => (
              <PopularMotif key={motif} label={motif} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
