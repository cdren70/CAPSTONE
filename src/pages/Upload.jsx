import { useState, useRef } from 'react';
import ContohBatik  from '../components/ContohBatik';

const Upload = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleReset = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-grow max-w-3xl mx-auto w-full px-4 py-8">
        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
          IDENTIFIKASI MOTIF BATIK
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Unggah foto batik Anda untuk mengetahui makna filosofinya
        </p>

        <form className="max-w-xl mx-auto">
          <label
            htmlFor="file-upload"
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer py-12 mb-6 transition-colors ${
              selectedFile 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {selectedFile ? (
              <>
                <i className="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
                <span className="text-center text-gray-700 text-sm font-medium">
                  File Terpilih: {selectedFile.name}
                </span>
              </>
            ) : (
              <>
                <i className="fas fa-cloud-upload-alt text-gray-500 text-2xl mb-2"></i>
                <span className="text-center text-gray-700 text-sm">
                  Area Drag & Drop Gambar
                </span>
                <span className="text-gray-500 text-xs mt-2">atau</span>
              </>
            )}
            
            <button
              type="button"
              onClick={handleBrowseClick}
              className={`mt-2 text-xs sm:text-sm px-4 py-1.5 rounded-md ${
                selectedFile 
                  ? 'bg-green-600 text-white' 
                  : 'bg-black text-white'
              }`}
            >
              {selectedFile ? 'GANTI FILE' : 'PILIH FILE'}
            </button>
            <input 
              id="file-upload" 
              type="file" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
            />
          </label>

          <ul className="mb-6 text-sm text-gray-700 space-y-1">
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>
                Format yang didukung: 
                <span className="font-semibold"> JPG, PNG</span>
                <span className="italic"> (max 5MB)</span>
              </span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Pastikan motif terlihat jelas</span>
            </li>
          </ul>
        
          {/* Popular Motifs */}
            <section className="mb-14">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">
                    Contoh Foto Batik
                  </h2>
                  <div className="sm:flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 overflow-x-visible pb-2">
                    {["Parang", "Kawung", "Mega Mendung", "Sido Luhur", "Truntum"].map(
                      (motif) => (
                        <ContohBatik
                          key={motif}
                          label={motif}
                          ariaLabel={`Motif batik ${motif}`}
                        />
                      )
                    )}
                  </div>
            </section>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-700 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={!selectedFile}
              className={`rounded-md px-4 py-2 text-sm shadow-md ${
                selectedFile
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              IDENTIFIKASI SEKARANG
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Upload;