
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] =
    useState(false);
  return (
    <nav className="border-b bg-white px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* hamburger */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-2xl md:hidden"
        >
          ☰
        </button>
        {/* logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl lg:text-3xl font-black"
        >
          SHOP.CO
        </Link>
        {/* nav links*/}
        <div className="hidden md:flex items-center gap-4 lg:gap-7 text-sm">

          <Link to="/category/all">
            Shop⌄
          </Link>
          <Link to="/category/">
            On Sale
          </Link>
          <Link to="/category/all">
            New Arrivals
          </Link>
          <Link to="/category/all">
            Brands
          </Link>
        </div>
        {/* search-bar */}
        <form
          className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md lg:max-w-lg"
        >
          <span className="text-gray-400">
            🔍
          </span>
          <input
            placeholder="Search products"
            className="bg-transparent outline-none px-2 w-full"
          />
        </form>
        {/* icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/cart"
            className="text-lg sm:text-xl"
          >
            🛒
            {cart.length > 0 && (
              <span className="ml-1 text-xs bg-black text-white rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>
          <span className="text-lg sm:text-xl">
            👤
          </span>
        </div>
      </div>
      {/* mobile responsive*/}
      {menuOpen && (
        <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4 text-sm">
          <Link
            to="/category/all"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/category/Casual"
            onClick={() => setMenuOpen(false)}
          >
            On Sale
          </Link>
          <Link
            to="/category/all"
            onClick={() => setMenuOpen(false)}
          >
            New Arrivals
          </Link>
          <Link
            to="/category/Formal"
            onClick={() => setMenuOpen(false)}
          >
            Brands
          </Link>
        </div>

      )}

    </nav>
  );
}
export default Navbar;