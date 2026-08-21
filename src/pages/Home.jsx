import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import ProductCard from "../components/ProductCard";
import DressStyle from "../components/DressStyle";
import Customer from "../components/Customer";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home({ cart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products from Backend:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });

  }, []);

  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div>

      <Navbar cart={cart} />

      <Hero />

      <Brand />


      {/* New Arrivals */}

      <section className="px-5 md:px-16 py-10">

        <h2 className="text-2xl md:text-3xl font-black text-center">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* Top Selling */}

      <section className="px-5 md:px-16 py-10 border-t">

        <h2 className="text-2xl md:text-3xl font-black text-center">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {topSelling.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <DressStyle />

      <Customer />

      <Newsletter />

      <Footer />

    </div>
  );
}

export default Home;