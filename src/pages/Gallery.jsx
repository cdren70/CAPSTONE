import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const motifs = [
    {
      id: 1,
      name: "Parang Kusumo",
      origin: "Yogyakarta",
      image: "https://storage.googleapis.com/a1aa/image/86017d5b-920b-49cd-1832-780e9db6d914.jpg"
    },
    {
      id: 2,
      name: "Kawung",
      origin: "Jawa Tengah",
      image: "https://storage.googleapis.com/a1aa/image/6faa3336-04ec-4ae6-2304-935a2720a8de.jpg"
    },
    {
      id: 3,
      name: "Mega Mendung",
      origin: "Cirebon",
      image: "https://storage.googleapis.com/a1aa/image/b316123d-f7eb-490b-6679-6a64436b0bf0.jpg"
    },
    {
      id: 4,
      name: "Sido Luhur",
      origin: "Solo",
      image: "https://storage.googleapis.com/a1aa/image/ae275639-1261-472e-22d4-a9fab24f6d97.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Filter Section */}
        <section className="flex items-center space-x-2 mb-4 border-b border-gray-200 pb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-normal text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            Filter
            <svg className="ml-1 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-normal text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400">
            Urutkan
            <svg className="ml-1 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </section>

        {/* Motifs Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {motifs.map((motif) => (
            <article key={motif.id} className="border border-gray-200 rounded-md p-2 hover:shadow-md transition-shadow">
              <img 
                alt={`Motif Batik ${motif.name}`}
                className="w-full rounded-md mb-1 object-cover h-28"
                src={motif.image}
              />
              <p className="text-xs font-semibold text-gray-900 mb-0.5">
                Nama: {motif.name}
              </p>
              <p className="text-[0.6rem] text-gray-700">
                Asal: {motif.origin}
              </p>
            </article>
          ))}
        </section>

        {/* Pagination */}
        <nav className="flex items-center justify-center space-x-3 text-sm text-gray-900 mb-8">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <i className="fas fa-chevron-left mr-1"></i>
            Previous
          </button>
          <span>Halaman {currentPage}</span>
          <button 
            onClick={() => setCurrentPage(currentPage + 1)}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            Next
            <i className="fas fa-chevron-right ml-1"></i>
          </button>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;