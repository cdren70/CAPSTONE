import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useViewTransition } from "../hooks/useViewTransition";

const DetailBatik = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startViewTransition } = useViewTransition();
  const [batik, setBatik] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data batik statis (bisa diganti dengan API nyata)
  const batikMotifs = [
    {
      id: 1,
      name: "Parang Kusumo",
      origin: "Yogyakarta",
      philosophy: `
    Motif Parang Kusumo melambangkan kesucian dan keagungan seperti bunga yang mekar.
    Dalam filosofi Jawa, motif ini menggambarkan kehidupan yang harus dilandasi dengan perjuangan
    dan usaha untuk mencapai kemuliaan. Garis diagonal pada motif ini melambangkan senjata
    yang merupakan simbol kekuatan dan perlindungan.
    
    Motif ini juga mengandung makna tentang kesinambungan antara manusia dengan Sang Pencipta,
    serta hubungan harmonis antara manusia dengan alam semesta.
  `,
      history: `
    Motif Parang telah ada sejak zaman Kerajaan Mataram dan merupakan salah satu motif larangan
    yang hanya boleh dikenakan oleh keluarga kerajaan. Parang Kusumo merupakan varian dari motif
    Parang yang mengandung makna khusus tentang kesucian dan keindahan.
    
    Pada masa pemerintahan Hamengkubuwono VII, motif ini mulai dikembangkan dan diizinkan
    untuk digunakan oleh masyarakat umum dengan beberapa modifikasi. Namun versi aslinya
    tetap menjadi hak prerogatif keluarga kerajaan.
  `,
      image: "https://example.com/parang-kusumo.jpg",
      position: [-7.8014, 110.3649],
      colors: ["Putih", "Coklat", "Hitam", "Emas"],
      usage: "Upacara adat, Pernikahan, Acara resmi, Penyambutan tamu penting",
      meaning: `
    Kata 'Parang' berasal dari kata 'pereng' yang berarti lereng, menggambarkan garis diagonal
    seperti lereng bukit. Sedangkan 'Kusumo' berarti bunga, melambangkan keharuman dan keindahan.
    
    Kombinasi keduanya melambangkan perjuangan untuk mencapai kemuliaan dan keharuman nama
    melalui jalan yang benar dan luhur.
  `,
    },
    // Data batik lainnya...
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedBatik = batikMotifs.find(
        (motif) => motif.id === parseInt(id)
      );
      setBatik(selectedBatik);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBack = () => {
    startViewTransition(() => {
      navigate(-1);
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!batik) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center py-10">
        <h2 className="text-xl font-bold mb-4">Motif Batik Tidak Ditemukan</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Kembali ke Galeri
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-4">
      <button
        onClick={handleBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        aria-label="Kembali ke halaman sebelumnya"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Kembali
      </button>

      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {batik.name}
        </h1>
        <p className="text-lg text-gray-600">Asal: {batik.origin}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={batik.image}
            alt={`Motif Batik ${batik.name}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            loading="eager"
          />
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Filosofi Motif
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {batik.philosophy}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Sejarah
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{batik.history}</p>
          </section>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Warna Dominan</h3>
          <div className="flex flex-wrap gap-2">
            {batik.colors.map((color, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm"
              >
                {color}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Penggunaan</h3>
          <p className="text-gray-700">{batik.usage}</p>
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Lokasi</h3>
          <p className="text-gray-700">{batik.origin}, Indonesia</p>
        </section>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Motif Terkait
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {batikMotifs
            .filter((m) => m.id !== batik.id && m.origin === batik.origin)
            .slice(0, 3)
            .map((motif) => (
              <div
                key={motif.id}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() =>
                  startViewTransition(() => navigate(`/#/motif/${motif.id}`))
                }
              >
                <img
                  src={motif.image}
                  alt={`Motif Batik ${motif.name}`}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="p-3">
                  <h3 className="font-medium">{motif.name}</h3>
                </div>
              </div>
            ))}
        </div>
      </section>
    </article>
  );
};

export default DetailBatik;
