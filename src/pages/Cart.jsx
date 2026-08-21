import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuantitySelector from "../components/QuantitySelector";
import Button from "../components/Button";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Cart({ cart, setCart }) {
  function increaseQuantity(item) {
    setCart((prev) =>
      prev.map((i) => (i === item ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }

  function decreaseQuantity(item) {
    setCart((prev) =>
      prev.map((i) =>
        i === item ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      )
    );
  }

  function removeItem(item) {
    setCart((prev) => prev.filter((i) => i !== item));
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div>
      <Navbar cart={cart} />

      <div className="px-5 md:px-16 py-8">
        <h1 className="text-2xl md:text-3xl font-black mb-8">YOUR CART</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">Your cart is empty.</p>
            <Link to="/category/all" className="underline text-sm">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border rounded-xl p-4"
                >
                  <div className="bg-gray-100 rounded-xl h-20 w-20 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Size: {item.size} · Color:{" "}
                      <span
                        className="inline-block w-3 h-3 rounded-full align-middle ml-1"
                        style={{ backgroundColor: item.color }}
                      />
                    </p>
                    <p className="font-bold text-sm mt-1">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <button
                      onClick={() => removeItem(item)}
                      className="text-red-500 text-sm hover:cursor-pointer"
                    >
                      Remove
                    </button>
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => increaseQuantity(item)}
                      onDecrease={() => decreaseQuantity(item)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="border rounded-xl p-6 h-fit">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <Button title="Go to Checkout" />
            </div>
          </div>
        )}
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
