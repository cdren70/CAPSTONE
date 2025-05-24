export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-xs text-gray-500 font-normal space-y-2 sm:space-y-0 sm:space-x-4">
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Tentang Kami
          </a>
          <a href="#" className="hover:underline">
            Bantuan
          </a>
          <a href="#" className="hover:underline">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:underline">
            Kontak
          </a>
        </nav>
        <div>© 2025 BatikEye - Pelestari Budaya Digital</div>
      </div>
    </footer>
  );
}