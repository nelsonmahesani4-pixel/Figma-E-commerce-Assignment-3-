
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.name}`}>
      <div className="p-4 border rounded text-center">
        <img src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
}
