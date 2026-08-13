// src/pages/Home.jsx
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import ReviewCard from "../components/ReviewCard";

const products = [
  { id: 1, name: "Loose Fit Tee", price: 35, image: "https://www.figma.com/design/WkZa1SVuqF1ZOsgDFLmAuC/E-commerce-Website-Template--Freebie---Community-?node-id=22-412&t=KVlQDMoJ8OgHW6NA-4" },
  { id: 2, name: "Any Day Jeans", price: 55, image: "https://www.figma.com/design/WkZa1SVuqF1ZOsgDFLmAuC/E-commerce-Website-Template--Freebie---Community-?node-id=22-414&t=KVlQDMoJ8OgHW6NA-4" },
];
const categories = [
  { name: "Casual", image: "/casual.png" },
  { name: "Formal", image: "/formal.png" },
];

const reviews = [
  { text: "Great quality!", rating: 5, author: "Ali" },
  { text: "Fast delivery!", rating: 4, author: "Sara" },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="grid grid-cols-2 gap-4 p-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <section className="grid grid-cols-2 gap-4 p-6">
        {categories.map((c) => (
          <CategoryCard key={c.name} category={c} />
        ))}
      </section>

      <section className="grid grid-cols-3 gap-4 p-6">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </section>
    </div>
  );
}
