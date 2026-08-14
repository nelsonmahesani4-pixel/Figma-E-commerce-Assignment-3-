import { useState } from "react";
import {
  useParams,
  useSearchParams
} from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/product";

function CategoryPage() {

  const { name } = useParams();

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const [maxPrice, setMaxPrice] = useState(300);


  // Start with all products
  let filteredProducts = products;


  // Category filter
  if (name !== "all") {

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() ===
        name.toLowerCase()
    );

  }


  // Search filter
  if (search !== "") {

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  }


  // Price filter
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price <= maxPrice
  );


  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold">
        {name === "all"
          ? "All Products"
          : `${name} Collection`}
      </h1>


      {/* PRICE FILTER */}

      <div className="my-6">

        <label className="font-semibold">
          Maximum Price: ${maxPrice}
        </label>
        <input
          type="range"
          min="50"
          max="300"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="block w-60 mt-3"
        />
      </div>
      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>


      {/* NO PRODUCT */}

      {filteredProducts.length === 0 && (

        <p className="text-center mt-10">
          No products found.
        </p>

      )}

    </div>

  );
}

export default CategoryPage;