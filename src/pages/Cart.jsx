// src/pages/CartPage.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-2 my-2">
            {item.name} - ${item.price}
          </div>
        ))
      )}
    </div>
  );
}
