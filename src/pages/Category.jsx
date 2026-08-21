<<<<<<< HEAD
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
=======
import { useState } from "react";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import products from "../data/product";
function CategoryPage({ cart }) {
  const { name } = useParams();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const [maxPrice, setMaxPrice] = useState(300);

  const [selectedCategory, setSelectedCategory] =
    useState(name === "all" ? "All" : name);
  let filteredProducts = products;

  if (selectedCategory !== "All") {

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() ===
        selectedCategory.toLowerCase()
    );

  }
  if (search !== "") {

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  }
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price <= maxPrice
  );

>>>>>>> a5604ad5a16c670f982a216218126408d7439373

  return (
    <div>
      <Navbar cart={cart} />
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: title }]} />

      <div className="px-5 md:px-16 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black">{title}</h1>

<<<<<<< HEAD
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
=======
      <main className="max-w-7xl mx-auto px-5 py-6">

        {/* BREADCRUMB */}

        <p className="text-xs text-gray-500 mb-5">
          Home &nbsp; / &nbsp; {name}
        </p>

        <div className="flex gap-6">
          <aside className="hidden md:block w-60 shrink-0 border rounded-2xl p-5 h-fit">

            <div className="flex justify-between items-center mb-6">

              <h2 className="font-bold text-lg">
                Filters
              </h2>

              <span>
                ⚙
              </span>

            </div>
            <div className="border-b pb-5">

              <h3 className="font-semibold mb-4">
                Category
              </h3>

              <div className="space-y-3 text-sm">

                <button
                  onClick={() => setSelectedCategory("All")}
                  className="block"
                >
                  All
                </button>

                <button
                  onClick={() => setSelectedCategory("Casual")}
                  className="block"
                >
                  Casual
                </button>

                <button
                  onClick={() => setSelectedCategory("Formal")}
                  className="block"
                >
                  Formal
                </button>

                <button
                  onClick={() => setSelectedCategory("Jeans")}
                  className="block"
                >
                  Jeans
                </button>

              </div>

            </div>

            <div className="border-b py-5">

              <h3 className="font-semibold mb-4">
                Price
              </h3>

              <input
                type="range"
                min="50"
                max="300"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

              <div className="flex justify-between text-xs mt-2">

                <span>$50</span>

                <span>${maxPrice}</span>

              </div>

            </div>


            {/* COLORS */}

            <div className="border-b py-5">

              <h3 className="font-semibold mb-4">
                Colors
              </h3>

              <div className="flex flex-wrap gap-3">
                <button className="w-7 h-7 rounded-full bg-green-700 border-2 border-black"></button>
                <button className="w-7 h-7 rounded-full bg-red-500"></button>

                <button className="w-7 h-7 rounded-full bg-yellow-400"></button>

                <button className="w-7 h-7 rounded-full bg-blue-600"></button>

                <button className="w-7 h-7 rounded-full bg-purple-600"></button>

                <button className="w-7 h-7 rounded-full bg-black"></button>

                <button className="w-7 h-7 rounded-full bg-white border"></button>

              </div>

            </div>
            <div className="border-b py-5">

              <h3 className="font-semibold mb-4">
                Size
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                  XX-Small
                </button>

                <button className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                  X-Small
                </button>

                <button className="bg-black text-white px-3 py-2 rounded-full text-xs">
                  Small
                </button>

                <button className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                  Medium
                </button>

                <button className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                  Large
                </button>

                <button className="bg-gray-100 px-3 py-2 rounded-full text-xs">
                  X-Large
                </button>

              </div>

            </div>


            {/* DRESS STYLE */}

            <div className="py-5">

              <h3 className="font-semibold mb-4">
                Dress Style
              </h3>

              <div className="space-y-3 text-sm">

                <p>Casual</p>

                <p>Formal</p>

                <p>Party</p>

                <p>Gym</p>

              </div>

            </div>
>>>>>>> a5604ad5a16c670f982a216218126408d7439373
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden border rounded-full px-4 py-2 text-sm hover:cursor-pointer"
            >
              Filters
            </button>

<<<<<<< HEAD
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
=======
          </aside>
          <section className="flex-1">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">

              <div>

                <h1 className="text-3xl font-black">
                  {selectedCategory === "All"
                    ? "Casual"
                    : selectedCategory}
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Showing {filteredProducts.length} products
                </p>

              </div>
              <div className="mt-4 sm:mt-0 text-sm">

                <label className="mr-2">
                  Sort by:
                </label>

                <select className="font-semibold outline-none">
                  <option>
                    Most Popular
                  </option>

                  <option>
                    Price Low to High
                  </option>

                  <option>
                    Price High to Low
                  </option>
                </select>

              </div>

            </div>
            <button
              className="md:hidden w-full bg-black text-white rounded-full py-3 mb-5"
            >
              ⚙ Filters
            </button>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">

              {filteredProducts.map(
                (product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                )
              )}

            </div>
            {filteredProducts.length === 0 && (

              <div className="text-center py-16">

                <h2 className="text-xl font-bold">
                  No products found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try changing your filters.
                </p>

              </div>

            )}
            {filteredProducts.length > 0 && (

              <div className="flex justify-center items-center gap-3 mt-12">

                <button className="border rounded-lg px-4 py-2">
                  ←
                </button>

                <button className="bg-black text-white rounded-lg px-4 py-2">
                  1
                </button>

                <button className="border rounded-lg px-4 py-2">
                  2
                </button>

                <button className="border rounded-lg px-4 py-2">
                  3
                </button>

                <button className="border rounded-lg px-4 py-2">
                  →
                </button>

              </div>

            )}

          </section>

>>>>>>> a5604ad5a16c670f982a216218126408d7439373
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

<<<<<<< HEAD
export default Category;
=======
export default CategoryPage;
>>>>>>> a5604ad5a16c670f982a216218126408d7439373
