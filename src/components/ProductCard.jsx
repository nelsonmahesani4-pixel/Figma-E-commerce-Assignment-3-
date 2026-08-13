// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} />
      <h3 className="mt-2">{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
}
