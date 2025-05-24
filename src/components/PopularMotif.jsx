export default function PopularMotif({ label, ariaLabel }) {
  return (
    <div
      className="w-full h-28 rounded-md bg-gray-300 flex items-center justify-center text-white text-xs font-semibold select-none"
      aria-label={ariaLabel}
    >
      {label}
    </div>
  );
}