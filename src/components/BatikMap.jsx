import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BatikMap = ({ motifs }) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current) {
      // Inisialisasi peta
      mapRef.current = L.map("batik-map").setView([-2.5489, 118.0149], 5);

      // Tambahkan tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Hapus marker lama
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Tambahkan marker baru berdasarkan data motif
    if (motifs && motifs.length > 0) {
      markersRef.current = motifs
        .map((motif) => {
          if (!motif.position) return null;

          const customIcon = L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          });

          const marker = L.marker(motif.position, { icon: customIcon }).addTo(
            mapRef.current
          );
          marker.bindPopup(`
          <div class="w-40">
            <h3 class="font-bold text-sm mb-1">${motif.name}</h3>
            <img src="${motif.image}" alt="${motif.name}" class="w-full h-24 object-cover mb-1">
            <p class="text-xs"><strong>Daerah:</strong> ${motif.origin}</p>
          </div>
        `);
          return marker;
        })
        .filter(Boolean);

      // Fit bounds jika ada marker
      if (markersRef.current.length > 0) {
        const group = new L.featureGroup(markersRef.current);
        mapRef.current.fitBounds(group.getBounds());
      }
    }

    return () => {
      // Cleanup
      markersRef.current.forEach((marker) => marker.remove());
    };
  }, [motifs]);

  return (
    <div
      id="batik-map"
      className="w-full h-64 md:h-80 rounded-md border border-gray-200"
      aria-label="Peta persebaran batik di Indonesia"
      role="application"
    ></div>
  );
};

export default BatikMap;
