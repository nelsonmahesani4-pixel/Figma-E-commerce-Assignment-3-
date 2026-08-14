import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    category: "Casual",
    image: product1,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    category: "Jeans",
    image: product2,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    category: "Formal",
    image: product3,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    category: "Casual",
    image: product4,
  },
];
export default products;
export const newArrivals = products;

// export const topSelling = products;