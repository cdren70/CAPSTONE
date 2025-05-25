import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3"
        aria-label="Primary Navigation"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              BatikEye
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Beranda
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-gray-900">
                Galeri
              </Link>
              <Link to="#" className="text-gray-700 hover:text-gray-900">
                Tentang
              </Link>
              <Link to="#" className="text-gray-700 hover:text-gray-900">
                Unggah
              </Link>
            </div>
          </div>

          {/* Desktop Search and Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari motif batik..."
                className={`${
                  isSearchFocused ? "w-72" : "w-64"
                } px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* Auth Buttons - Conditional Rendering */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-gray-700 border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50"
              >
                Keluar
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden mt-3 space-y-3">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari motif batik..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Unggah
              </Link>
              {isAuthenticated ? (
                <button
                  className="w-full mt-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Keluar
                </button>
              ) : (
                <button
                  className="w-full mt-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setAuthType("login");
                    setShowAuthModal(true);
                  }}
                >
                  Masuk
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {showAuthModal && (
        <AuthModal
          initialMode={authType}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </header>
  );
}
