function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-5">

      <h1 className="text-2xl font-black">
        SHOP.CO
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrivals</a>
        <a href="#">Brands</a>
      </div>

      <div className="flex gap-4">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>

    </nav>
  );
}

export default Navbar;