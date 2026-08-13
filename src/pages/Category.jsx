// src/pages/CategoryPage.jsx
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Casual Tee", price: 20, category: "Casual" },
  { id: 2, name: "Formal Shirt", price: 40, category: "Formal" },
];

export default function CategoryPage() {
  const { name } = useParams();
  const filtered = products.filter((p) => p.category === name);

  return (
    <div className="p-6">
      <h1>{name} Collection</h1>
      <div className="grid grid-cols-2 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
