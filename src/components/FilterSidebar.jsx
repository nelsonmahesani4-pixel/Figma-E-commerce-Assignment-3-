// Simple filter panel used on the Category page.
// Kept intentionally basic: category buttons + a max price slider.
// On mobile this is shown inside a slide-down panel (handled by Category.jsx).
const CATEGORIES = ["all", "Casual", "Formal", "Party", "Gym"];

function FilterSidebar({ selectedCategory, setSelectedCategory, maxPrice, setMaxPrice }) {
  return (
    <div className="w-full md:w-56 shrink-0">
      <h3 className="font-bold mb-3">Category</h3>
      <div className="flex flex-col gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left text-sm px-2 py-1 rounded hover:cursor-pointer ${
              selectedCategory === cat
                ? "font-bold text-black"
                : "text-gray-500"
            }`}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>

      <h3 className="font-bold mb-3">Max Price</h3>
      <input
        type="range"
        min="50"
        max="400"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-gray-500 mt-1">Up to ${maxPrice}</p>
    </div>
  );
}

export default FilterSidebar;
