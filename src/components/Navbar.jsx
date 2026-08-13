// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">SHOP.CO</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/category/Casual">Casual</Link>
        <Link to="/category/Formal">Formal</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
