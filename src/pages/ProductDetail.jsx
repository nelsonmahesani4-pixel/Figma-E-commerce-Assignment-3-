import { useParams } from "react-router-dom";
import products from "../data/product";
function ProductDetail({ cart, setCart }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  function addToCart() {
    setCart([...cart, product]);
  }

  return (
    <div>

      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <h2>${product.price}</h2>

      <button onClick={addToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetail;