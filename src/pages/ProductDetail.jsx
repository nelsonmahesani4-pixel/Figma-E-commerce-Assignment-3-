import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";

function ProductDetail({ cart, setCart }) {

  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  function addToCart() {

    setCart([...cart, product]);

    navigate("/cart");
  }

  return (
    <div className="p-5">

      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md h-96 object-contain bg-gray-100 rounded-xl"
      />

      <h1 className="text-2xl font-bold mt-5">
        {product.name}
      </h1>

      <p className="text-yellow-400 mt-2">
        ★★★★★
      </p>

      <h2 className="text-xl font-bold mt-3">
        ${product.price}
      </h2>

      <button
        onClick={addToCart}
        className="bg-black text-white px-8 py-3 rounded-full mt-5"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetail;