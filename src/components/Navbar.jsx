import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="border-b bg-white px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* hamburger -> mobile view or shorter devices */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">
          SHOP.CO
        </h1>
        <div className="hidden md:flex items-center gap-4 lg:gap-7 text-sm">
          <a href="#">Shop⌄</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
        <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md lg:max-w-lg">
          
          <span className="text-gray-400">
            🔍
          </span>
          <input
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  placeholder="Search products"
/>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-lg sm:hidden">
            🔍
          </span>
          <span className="text-lg sm:text-xl">
            🛒
          </span>
          <span className="text-lg sm:text-xl">
            👤
          </span>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4 text-sm">

          <a href="#">Shop</a>

          <a href="#">On Sale</a>

          <a href="#">New Arrivals</a>

          <a href="#">Brands</a>

        </div>
      )}
    </nav>
  );
}
export default Navbar;