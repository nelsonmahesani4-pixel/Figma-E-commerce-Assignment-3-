import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div className="bg-gray-100 rounded-xl h-52 sm:h-60 flex items-center justify-center ">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain "
          />
        </div>
      </Link>
      <h3 className="font-semibold text-sm mt-2">
        {product.name}
     </h3>
      <p className="text-yellow-400 text-sm">
        ★★★★★{" "}
        <span className="text-black">{product.rating?.toFixed(1) ?? "5.0"}/5</span>
      </p>

      <p className="font-bold text-sm">
        ${product.price}
        {product.oldPrice && (
          <span className="text-gray-400 line-through font-normal ml-2">
            ${product.oldPrice}
          </span>
        )}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="text-sm underline"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;