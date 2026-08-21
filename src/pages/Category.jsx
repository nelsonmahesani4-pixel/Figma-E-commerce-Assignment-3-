import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import products from "../data/products";

function Category({ cart }) {
  const { name } = useParams(); // e.g. "all", "Casual", "Formal"...

  const [selectedCategory, setSelectedCategory] = useState(name || "all");
  const [maxPrice, setMaxPrice] = useState(400);
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false); // mobile filter panel

  // Recompute the visible product list whenever a filter/sort option changes.
  const filteredProducts = useMemo(() => {
    let list = products.filter(
      (p) =>
        (selectedCategory === "all" ||
          p.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        p.price <= maxPrice
    );

    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [selectedCategory, maxPrice, sortBy]);

  const title =
    selectedCategory === "all" ? "All Products" : `${selectedCategory} Wear`;

  return (
    <div>
      <Navbar cart={cart} />
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: title }]} />

      <div className="px-5 md:px-16 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black">{title}</h1>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden border rounded-full px-4 py-2 text-sm hover:cursor-pointer"
            >
              Filters
            </button>

            {/* Sorting */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-full px-4 py-2 text-sm outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8 mt-8">
          {/* Sidebar - visible on desktop, toggled on mobile */}
          <div className={`${filtersOpen ? "block" : "hidden"} md:block`}>
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <p className="text-gray-500">No products match these filters.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Category;
