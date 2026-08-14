import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div>
      <div className="bg-gray-100 rounded-xl h-52 sm:h-60 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="font-semibold text-sm mt-2">
        {product.name}
      </h3>
      <p className="text-yellow-400 text-sm">
        ★★★★★
      </p>
      <p className="font-bold text-sm">
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;