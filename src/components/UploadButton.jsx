// src/components/UploadButton.jsx (atau di mana pun komponenmu berada)
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons"; // Impor ikon upload

export default function UploadButton() {
  // Membuat ref untuk mengakses elemen input file secara langsung
  const fileInputRef = useRef(null);

  // Fungsi yang dipanggil saat tombol "Unggah Foto Batik Anda" diklik
  const handleButtonClick = () => {
    // "Klik" input file yang tersembunyi
    fileInputRef.current.click();
  };

  // Fungsi yang dipanggil saat file dipilih
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Ambil file pertama yang dipilih
    if (selectedFile) {
      console.log("File yang dipilih:", selectedFile.name);
      // Di sini kamu bisa menambahkan logika untuk mengunggah file,
      // misalnya dengan FormData dan fetch/axios ke API backend.
      // Contoh: uploadFileToServer(selectedFile);
    }
  };

  return (
    <>
      {/* Input file yang disembunyikan secara visual */}
      <input
        type="file"
        ref={fileInputRef} // Kaitkan ref ke input
        onChange={handleFileChange} // Tangani perubahan saat file dipilih
        className="hidden" // Sembunyikan input secara visual
        accept="image/*" // Opsional: Hanya izinkan file gambar (PNG, JPG, dll.)
      />

      {/* Tombol kustom yang akan "mengklik" input file */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="inline-flex items-center bg-black text-white text-xs font-normal rounded-md px-4 py-2 hover:bg-gray-900"
      >
        {/* Menggunakan FontAwesomeIcon untuk ikon upload */}
        <FontAwesomeIcon icon={faUpload} className="mr-2" /> UNGGAH FOTO BATIK
        ANDA
      </button>
    </>
  );
}
