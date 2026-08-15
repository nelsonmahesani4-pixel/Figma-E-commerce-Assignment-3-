import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import ProductCard from "../components/ProductCard";
import DressStyle from "../components/DressStyle";
import Customer from "../components/Customer";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import  {newArrivals, topSelling
} from "../data/product";
import { Link } from "react-router-dom";

function Home({ cart, setCart }) {
  return (
    <div>
      <Navbar cart={cart}/>
      <Hero />
      <Brand />
      {/* New Arrivals */}
      <section className="py-12 px-5">
        <h2 className="text-2xl md:text-3xl font-black text-center">
          NEW ARRIVALS
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      <div className="text-center mt-8">
  <Link
    to="/category/all"
    className="border px-8 py-2 rounded-full inline-block"
  >
    View All
  </Link>
</div>
      </section>
      {/* Top Selling */}
      <section className="py-12 px-5 border-t">
        <h2 className="text-2xl md:text-3xl font-black text-center">
          TOP SELLING
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {topSelling.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
        </div>
       <div className="text-center mt-8">
  <Link
    to="/category/"
    className="border px-8 py-2 rounded-full inline-block"
  >
    View All
  </Link>
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