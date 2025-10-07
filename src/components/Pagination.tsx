function Pagination() {
  return (
    <div className="flex justify-center mt-8">
      <nav
        className="flex items-center space-x-2 bg-white shadow-md rounded-xl px-4 py-2"
        aria-label="Pagination"
      >
        <button className="px-3 py-1 rounded-lg text-gray-500 border border-gray-200 hover:bg-gray-50">
          ←
        </button>
        <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          1
        </button>
        <button className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">
          2
        </button>
        <button className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">
          3
        </button>
        <span className="px-2">...</span>
        <button className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50">
          10
        </button>
        <button className="px-3 py-1 rounded-lg text-gray-500 border border-gray-200 hover:bg-gray-50">
          →
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
