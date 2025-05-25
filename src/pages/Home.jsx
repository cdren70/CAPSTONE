import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { faBolt, faBook, faCompass } from "@fortawesome/free-solid-svg-icons";
import UploadButton from "../components/UploadButton";
import Slideshow from "../components/Slideshow";
import Feature from "../components/Feature";
import PopularMotif from "../components/PopularMotif";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* Status Autentikasi */}
      {isAuthenticated && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-sm">
          Anda sudah login!
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-normal mb-6 text-gray-900 md:mt-10">
          Temukan Makna Budaya di Balik Motif Batik
        </h1>
        {isAuthenticated ? (
          <UploadButton />
        ) : (
          <p className="text-sm text-gray-500">
            Silakan{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              login
            </a>{" "}
            atau{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              daftar
            </a>{" "}
            untuk mengunggah gambar
          </p>
        )}
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
          {["Parang", "Kawung", "Mega Mendung", "Sido Luhur", "Truntum"].map(
            (motif) => (
              <PopularMotif key={motif} label={motif} />
            )
          )}
        </div>
      </section>
    </>
  );
}
