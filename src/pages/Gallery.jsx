import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BatikMap from "../components/BatikMap";
import { useViewTransition } from "../hooks/useViewTransition";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [batikData, setBatikData] = useState([]);
  const [filterOrigin, setFilterOrigin] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const navigate = useNavigate();
  const { startViewTransition } = useViewTransition();

  // Sample batik data with complete information
  const batikMotifs = [
    {
      id: 1,
      name: "Parang Kusumo",
      origin: "Yogyakarta",
      philosophy:
        "Melambangkan kesucian dan keagungan seperti bunga yang mekar. Motif ini menggambarkan kehidupan yang harus dilandasi dengan perjuangan dan usaha untuk mencapai kemuliaan.",
      history:
        "Motif Parang telah ada sejak zaman Kerajaan Mataram dan merupakan salah satu motif larangan yang hanya boleh dikenakan oleh keluarga kerajaan.",
      image:
        "https://storage.googleapis.com/a1aa/image/86017d5b-920b-49cd-1832-780e9db6d914.jpg",
      position: [-7.8014, 110.3649],
      colors: ["Putih", "Coklat", "Hitam"],
      usage: "Upacara adat, Pernikahan, Acara resmi",
      meaning:
        "Kata 'Parang' berasal dari kata 'pereng' (lereng), menggambarkan garis diagonal seperti lereng bukit. 'Kusumo' berarti bunga, melambangkan keharuman dan keindahan.",
    },
    {
      id: 2,
      name: "Kawung",
      origin: "Solo",
      philosophy:
        "Simbol kesempurnaan, kemurnian, dan keabadian. Motif ini menggambarkan biji buah kawung (aren) yang tersusun rapi.",
      history:
        "Motif Kawung telah digunakan sejak zaman Majapahit dan menjadi salah satu motif larangan di Keraton Solo.",
      image:
        "https://storage.googleapis.com/a1aa/image/6faa3336-04ec-4ae6-2304-935a2720a8de.jpg",
      position: [-7.5755, 110.8243],
      colors: ["Putih", "Coklat", "Merah"],
      usage: "Upacara keraton, Busana resmi",
      meaning:
        "Motif ini melambangkan empat arah mata angin dan empat unsur kehidupan.",
    },
    {
      id: 3,
      name: "Mega Mendung",
      origin: "Cirebon",
      philosophy:
        "Menggambarkan kesabaran dan pengendalian diri seperti awan mendung yang menyejukkan.",
      history:
        "Berasal dari pengaruh budaya China dan berkembang di Cirebon sejak abad ke-16.",
      image:
        "https://storage.googleapis.com/a1aa/image/b316123d-f7eb-490b-6679-6a64436b0bf0.jpg",
      position: [-6.732, 108.5523],
      colors: ["Biru", "Putih", "Merah"],
      usage: "Busana sehari-hari, Dekorasi",
      meaning: "Awan mendung melambangkan kesuburan dan kehidupan.",
    },
    {
      id: 4,
      name: "Sido Luhur",
      origin: "Solo",
      philosophy: "Harapan untuk mencapai kedudukan tinggi dan berbudi luhur.",
      history:
        "Dikembangkan di Keraton Solo untuk acara-acara penting kerajaan.",
      image:
        "https://storage.googleapis.com/a1aa/image/ae275639-1261-472e-22d4-a9fab24f6d97.jpg",
      position: [-7.5755, 110.8243],
      colors: ["Coklat", "Krem", "Emas"],
      usage: "Pernikahan, Upacara adat",
      meaning:
        "'Sido' berarti menjadi/menjadikan, 'Luhur' berarti tinggi/mulia.",
    },
    {
      id: 5,
      name: "Truntum",
      origin: "Solo",
      philosophy:
        "Simbol cinta yang tumbuh dan berkembang seperti bintang-bintang di langit.",
      history: "Diciptakan oleh Ratu Kencana, permaisuri Sunan Pakubuwono III.",
      image: "https://example.com/truntum.jpg",
      position: [-7.5755, 110.8243],
      colors: ["Biru", "Putih", "Emas"],
      usage: "Pernikahan, Upacara adat",
      meaning: "Melambangkan cinta yang bersemi dan berkembang.",
    },
    {
      id: 6,
      name: "Jumputan",
      origin: "Pekalongan",
      philosophy: "Menggambarkan keberagaman dan keceriaan.",
      history: "Berkembang di daerah pesisir dengan pengaruh berbagai budaya.",
      image: "https://example.com/jumputan.jpg",
      position: [-6.8886, 109.6749],
      colors: ["Merah", "Kuning", "Hijau"],
      usage: "Busana sehari-hari, Festival",
      meaning: "Mewakili keragaman budaya Indonesia.",
    },
  ];

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setBatikData(batikMotifs);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleMotifClick = (motifId) => {
    startViewTransition(() => {
      navigate(`/#/motif/${motifId}`);
    });
  };

  // Filter and sort functions
  const filteredData = batikData.filter(
    (motif) =>
      filterOrigin === "all" ||
      motif.origin.toLowerCase() === filterOrigin.toLowerCase()
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "origin") return a.origin.localeCompare(b.origin);
    return 0;
  });

  // Get unique origins for filter
  const origins = ["all", ...new Set(batikData.map((motif) => motif.origin))];

  return (
    <main
      id="main-content"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-4 focus:py-2 focus:z-50"
      >
        Loncat ke konten utama
      </a>

      {/* Filter and Sort Section */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-6">
        <div className="w-full sm:w-auto">
          <label
            htmlFor="origin-filter"
            className="block text-sm font-medium mb-1"
          >
            Filter Daerah:
          </label>
          <select
            id="origin-filter"
            value={filterOrigin}
            onChange={(e) => setFilterOrigin(e.target.value)}
            className="w-full sm:w-48 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {origins.map((origin) => (
              <option key={origin} value={origin}>
                {origin === "all" ? "Semua Daerah" : origin}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label htmlFor="sort-by" className="block text-sm font-medium mb-1">
            Urutkan Berdasarkan:
          </label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-48 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Nama Motif</option>
            <option value="origin">Daerah Asal</option>
          </select>
        </div>
      </section>

      {/* Batik Map Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          Persebaran Motif Batik di Indonesia
        </h2>
        <BatikMap motifs={filteredData} />
      </section>

      {/* Motifs Grid Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          Koleksi Motif Batik
          {filterOrigin !== "all" && ` dari ${filterOrigin}`}
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-48 w-full bg-gray-200 rounded-md mb-3"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {sortedData.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">
                  Tidak ada motif batik yang ditemukan
                </p>
                <button
                  onClick={() => setFilterOrigin("all")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Tampilkan Semua Motif
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedData.map((motif) => (
                  <article
                    key={motif.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => handleMotifClick(motif.id)}
                    aria-label={`Motif batik ${motif.name} dari ${motif.origin}`}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={motif.image}
                        alt={`Motif Batik ${motif.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-xs font-semibold text-white bg-black/60 px-2 py-1 rounded">
                          {motif.origin}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {motif.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {motif.philosophy}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {motif.colors.slice(0, 3).map((color, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                            title={`Warna ${color}`}
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Pagination */}
      {sortedData.length > 0 && (
        <nav
          className="flex items-center justify-center space-x-3 text-sm text-gray-900 mb-8"
          aria-label="Pagination"
        >
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={currentPage === 1}
            aria-label="Halaman sebelumnya"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Sebelumnya
          </button>
          <span aria-current="page">Halaman {currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={sortedData.length < 6}
            aria-label="Halaman berikutnya"
          >
            Berikutnya
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>
      )}
    </main>
  );
};

export default Gallery;
