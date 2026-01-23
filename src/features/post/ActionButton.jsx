export default function ActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-1.5 text-sm font-semibold w-full rounded-md text-gray-500 hover:bg-gray-200"
    >
      {children}
    </button>
  );
}
