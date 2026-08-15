import { useParams, useNavigate, Link } from "react-router-dom";
import products, { newArrivals } from "../data/product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import React from "react";
import ProductCard from "../components/ProductCard";
function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(
    (item) => item.id === Number(id)
  );
  const [quantity, setQuantity] = React.useState(1);
  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  function addToCart() {
    for (let i = 0; i < quantity; i++) {
      setCart([...cart, product]);
    }
    navigate("/cart");
  }
  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 py-8">
        <p className="text-sm text-gray-500 mb-8">
          Home &nbsp; / &nbsp; Shop &nbsp; / &nbsp; {product.name}
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-[450px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* product detail*/}
          <div>
            <h1 className="text-3xl md:text-4xl font-black">
              {product.name}
            </h1>
            {/*rates*/}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400">
                ★★★★★
              </span>
              <span className="text-sm">
                4.5/5
            </span>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <h2 className="text-2xl font-bold">
                ${product.price}
              </h2>
              <span className="line-through text-gray-400">
                $300
              </span>
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                -20%
              </span>
            </div>
          {/*description*/}
            <p className="text-gray-500 mt-5 leading-6">
              This stylish product is made with high-quality
              material and designed for everyday comfort.
              Perfect for creating a modern and comfortable look.
            </p>
            <hr className="my-6" />
            {/* COLORS */}
            <p className="font-semibold">
              Select Colors
            </p>
            <div className="flex gap-3 mt-3">
              <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-green-700 border-2 border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-blue-700 border-2 border-gray-300"></button>
            </div>
            <hr className="my-6" />
            {/* product  size*/}
            <p className="font-semibold">
              Choose Size
            </p>
            <div className="flex gap-3 mt-3">
              <button className="px-5 py-2 bg-gray-100 rounded-full">
                Small
              </button>
              <button className="px-5 py-2 bg-gray-100 rounded-full">
                Medium
              </button>
              <button className="px-5 py-2 bg-black text-white rounded-full">
                Large
              </button>
              <button className="px-5 py-2 bg-gray-100 rounded-full">
                X-Large
              </button>
            </div>
            <hr className="my-6" />
            {/* cart*/}
            <div className="flex gap-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="px-5 py-3"
                >
                  -
                </button>
                <span>
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="px-5 py-3"
                >
                  +
                </button>
              </div>
              <button
                onClick={addToCart}
                className="flex-1 bg-black text-white rounded-full py-3"
              >
                Add to Cart
            </button>
            </div>
          </div>
        </div>
      </section>
      {/* reviews */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="border-b flex justify-between">
          <button className="pb-4">
            Product Details
          </button>
          <button className="font-bold border-b-2 border-black pb-4">
            Rating & Reviews
          </button>
          <button className="pb-4">
            FAQs
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <Review name="Sarah M." />
          <Review name="Alex K." />
          <Review name="Brian K." />
          <Review name="Olivia R." />

        </div>

      </section>
<section className="py-12 px-5 border-t">
        <h2 className="text-2xl md:text-3xl font-black text-center">
          YOU MIGHT ALSO LIKE 
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
      <Newsletter />
      <Footer />
    </div>
  );
}
function Review({ name }) {
  return (
    <div className="border rounded-xl p-5">
    <div className="text-yellow-400">
        ★★★★★
      </div>
      <h3 className="font-bold mt-2">
        {name}
      </h3>
     <p className="text-gray-500 text-sm mt-2">
        Great product! The quality is really good and
        the product looks exactly as shown.
      </p>
      <p className="text-gray-400 text-xs mt-4">
        Posted on August 15, 2026
      </p>
    </div>
  );
}
export default ProductDetail;