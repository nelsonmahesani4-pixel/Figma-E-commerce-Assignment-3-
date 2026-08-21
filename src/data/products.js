// Simple product data.
// Later, replace this with a fetch() call to your Express API:
//   GET http://localhost:5000/api/products
//   GET http://localhost:5000/api/products/:id
//
// Each product has the same shape so every component (ProductCard,
// ProductDetail, Cart, etc.) can rely on the same fields.
//
// image      -> used in cards / cart
// gallery    -> used on the Product Detail page (array of images)
// colors     -> hex codes shown as color swatches
// sizes      -> available sizes
// category   -> must match one of: "Casual", "Formal", "Party", "Gym"
//               (these are the same 4 categories used in DressStyle.jsx)

const placeholder = (text, bg = "f2f2f2", fg = "1a1a1a") =>
  `https://placehold.co/500x500/${bg}/${fg}?text=${encodeURIComponent(text)}`;

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    oldPrice: null,
    rating: 3.5,
    category: "Casual",
    colors: ["#000000", "#4A4A4A", "#3B5B92"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A relaxed-fit t-shirt with a bold gradient graphic print. Made from soft, breathable cotton for everyday comfort.",
    image: placeholder("Gradient Tee"),
    gallery: [placeholder("Gradient Tee 1"), placeholder("Gradient Tee 2"), placeholder("Gradient Tee 3")],
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    oldPrice: 210,
    rating: 4.5,
    category: "Casual",
    colors: ["#000000", "#3B5B92"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "A classic polo shirt with contrast tipping on the collar and sleeves. A wardrobe staple for a smart-casual look.",
    image: placeholder("Polo Shirt"),
    gallery: [placeholder("Polo 1"), placeholder("Polo 2"), placeholder("Polo 3")],
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 160,
    rating: 5.0,
    category: "Casual",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A timeless striped t-shirt, cut for a comfortable regular fit. Pairs easily with denim or shorts.",
    image: placeholder("Striped Tee"),
    gallery: [placeholder("Striped Tee 1"), placeholder("Striped Tee 2"), placeholder("Striped Tee 3")],
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    category: "Casual",
    colors: ["#2E3A59", "#000000"],
    sizes: ["28", "30", "32", "34"],
    description:
      "Slim through the hip and thigh with a skinny leg, made from stretch denim that moves with you.",
    image: placeholder("Skinny Jeans"),
    gallery: [placeholder("Jeans 1"), placeholder("Jeans 2"), placeholder("Jeans 3")],
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    oldPrice: null,
    rating: 4.0,
    category: "Formal",
    colors: ["#7A1E2C", "#2E3A59"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "A crisp checkered shirt tailored for a smart, structured fit. Ideal for the office or evenings out.",
    image: placeholder("Checkered Shirt"),
    gallery: [placeholder("Shirt 1"), placeholder("Shirt 2"), placeholder("Shirt 3")],
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    category: "Casual",
    colors: ["#B85C38", "#000000"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "Short-sleeve striped tee with a soft cotton handfeel, designed for warm-weather layering.",
    image: placeholder("Sleeve Striped Tee"),
    gallery: [placeholder("Tee 1"), placeholder("Tee 2"), placeholder("Tee 3")],
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    rating: 5.0,
    category: "Formal",
    colors: ["#000000", "#7A1E2C"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A tailored vertical-stripe shirt with a structured collar, built for a polished formal look.",
    image: placeholder("Vertical Striped Shirt"),
    gallery: [placeholder("Shirt A"), placeholder("Shirt B"), placeholder("Shirt C")],
  },
  {
    id: 8,
    name: "Performance Tank",
    price: 95,
    oldPrice: null,
    rating: 4.2,
    category: "Gym",
    colors: ["#000000", "#4A4A4A"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "Lightweight, sweat-wicking tank built for high-intensity training days.",
    image: placeholder("Performance Tank"),
    gallery: [placeholder("Tank 1"), placeholder("Tank 2"), placeholder("Tank 3")],
  },
  {
    id: 9,
    name: "Track Jacket",
    price: 165,
    oldPrice: null,
    rating: 4.1,
    category: "Gym",
    colors: ["#2E3A59", "#000000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A zip-through track jacket with a relaxed fit, made for warm-ups and everyday wear alike.",
    image: placeholder("Track Jacket"),
    gallery: [placeholder("Jacket 1"), placeholder("Jacket 2"), placeholder("Jacket 3")],
  },
  {
    id: 10,
    name: "Sequin Party Dress",
    price: 260,
    oldPrice: 300,
    rating: 4.8,
    category: "Party",
    colors: ["#000000", "#B8860B"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "A fitted sequin dress designed to catch the light on the dance floor.",
    image: placeholder("Party Dress"),
    gallery: [placeholder("Dress 1"), placeholder("Dress 2"), placeholder("Dress 3")],
  },
  {
    id: 11,
    name: "Satin Party Shirt",
    price: 175,
    oldPrice: null,
    rating: 4.0,
    category: "Party",
    colors: ["#7A1E2C", "#000000"],
    sizes: ["Small", "Medium", "Large"],
    description:
      "A satin-finish shirt with a subtle sheen, made for evening occasions.",
    image: placeholder("Satin Shirt"),
    gallery: [placeholder("Satin 1"), placeholder("Satin 2"), placeholder("Satin 3")],
  },
  {
    id: 12,
    name: "Tailored Blazer",
    price: 320,
    oldPrice: 360,
    rating: 4.6,
    category: "Formal",
    colors: ["#000000", "#2E3A59"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A structured single-breasted blazer, tailored for a sharp formal silhouette.",
    image: placeholder("Tailored Blazer"),
    gallery: [placeholder("Blazer 1"), placeholder("Blazer 2"), placeholder("Blazer 3")],
  },
];

export default products;

// Small helpers used by the pages below.
export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
