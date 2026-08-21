import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import QuantitySelector from "../components/QuantitySelector";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Get product from backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }

        return res.json();
      })
      .then((data) => {
        console.log("Product from Backend:", data);

        setProduct(data);

        // Set default color and size
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }

        if (data.sizes && data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  // Get related products from backend
  useEffect(() => {
    if (!product) return;

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const relatedProducts = data.filter(
          (item) =>
            item.category === product.category &&
            item.id !== product.id
        );

        setRelated(relatedProducts.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching related products:", error);
      });
  }, [product]);

  // Loading
  if (loading) {
    return (
      <div>
        <Navbar cart={cart} />

        <div className="px-5 md:px-16 py-20 text-center">
          <p>Loading product...</p>
        </div>

        <Footer />
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div>
        <Navbar cart={cart} />

        <div className="px-5 md:px-16 py-20 text-center">
          <p>Sorry, we couldn't find that product.</p>

          <Link to="/" className="underline">
            Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  // Add product to cart
  function handleAddToCart() {
    setCart((prevCart) => {
      // Check if same product + color + size already exists
      const existing = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

      // If already exists, increase quantity
      if (existing) {
        return prevCart.map((item) =>
          item === existing
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      // Otherwise add new product
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          color: selectedColor,
          size: selectedSize,
          quantity: quantity,
        },
      ];
    });
  }

  return (
    <div>
      <Navbar cart={cart} />

      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/category/all" },
          {
            label: product.category,
            to: `/category/${product.category}`,
          },
          { label: product.name },
        ]}
      />

      <div className="px-5 md:px-16 py-8 grid md:grid-cols-2 gap-10">

        {/* Image Gallery */}
        <div>
          <div className="bg-gray-100 rounded-2xl h-80 md:h-[420px] flex items-center justify-center">
            <img
              src={
                product.gallery && product.gallery.length > 0
                  ? product.gallery[activeImage]
                  : product.image
              }
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Gallery thumbnails */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="flex gap-3 mt-4">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`bg-gray-100 rounded-xl h-20 w-20 flex items-center justify-center hover:cursor-pointer ${
                    activeImage === index
                      ? "ring-2 ring-black"
                      : ""
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black">
            {product.name}
          </h1>

          {/* Rating */}
          <p className="text-yellow-400 mt-3">
            ★★★★★{" "}
            <span className="text-black text-sm">
              {Number(product.rating || 0).toFixed(1)}/5
            </span>
          </p>

          {/* Price */}
          <p className="text-2xl font-bold mt-3">
            ${product.price}

            {product.oldPrice && (
              <span className="text-gray-400 line-through font-normal ml-3">
                ${product.oldPrice}
              </span>
            )}
          </p>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-4">
            {product.description}
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">
                Select Colors
              </p>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      backgroundColor: color,
                    }}
                    className={`w-8 h-8 rounded-full hover:cursor-pointer ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">
                Choose Size
              </p>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm border hover:cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 border-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-8">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() =>
                setQuantity((q) => q + 1)
              }
              onDecrease={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
            />

            <div
              onClick={handleAddToCart}
              className="flex-1"
            >
              <Button title="Add to Cart" />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="px-5 md:px-16 py-10 border-t">
        <h2 className="text-2xl font-black mb-6">
          RATING & REVIEWS
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <ReviewCard
            name="Sarah M."
            review="Great fit and the fabric feels premium. Exactly as pictured."
          />

          <ReviewCard
            name="Alex K."
            review="Fast shipping and true to size. Would buy again."
          />

          <ReviewCard
            name="James L."
            review="Good quality for the price. Very happy with it."
          />
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="px-5 md:px-16 py-10 border-t">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            YOU MIGHT ALSO LIKE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        </section>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductDetail;