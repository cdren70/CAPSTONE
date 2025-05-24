import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" aria-label="Primary Navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-semibold text-gray-900">
              BatikEye
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Beranda
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Galeri
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Tentang
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Unggah
              </a>
            </div>
          </div>

          {/* Desktop Search and Login */}
          <div className="hidden sm:flex items-center space-x-6">
            <button className="text-gray-700 border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50">
              Masuk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden mt-3 space-y-3">
            
            <div className="space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Unggah
              </a>
              <button
                className="w-full mt-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}