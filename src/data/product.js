import product1 from "./images/product1.png";
import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";

import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import product7 from "./images/product7.png";
import product8 from "./images/product8.png";


export const newArrivals = [
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


export const topSelling = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    category: "Formal",
    image: product5,
  },
  {
    id: 6,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    category: "Casual",
    image: product6,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    category: "Casual",
    image: product7,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    category: "Jeans",
    image: product8,
  },
];


const products = [
  ...newArrivals,
  ...topSelling,
];

export default products;