import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function Cart({ cart, setCart }) {
  // remove from cart
  function removeProduct(index) {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  }
  // increase 
  function increase(index) {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    setCart(newCart);
  }
  // decrease
  function decrease(index) {
    const newCart = [...cart];
    const quantity = (newCart[index].quantity || 1) - 1;
    if (quantity <= 0) {
      removeProduct(index);
      return;
    }
    newCart[index].quantity = quantity;
    setCart(newCart);
  }
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * (item.quantity || 1);
  });

  const discount = Math.round(subtotal * 0.2);
  const delivery = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;
    if (cart.length === 0) {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">
          Your Cart
        </h1>
        <p className="mt-5">
          Your cart is empty.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar cart={cart} />
      <div className="max-w-6xl mx-auto px-5 py-8">
        <p className="text-sm text-gray-500 mb-5">Home / Cart</p>
        <h1 className="text-3xl font-black mb-8">YOUR CART</h1>
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-white rounded-2xl border p-5">
            {cart.length === 0 ? (
              <p className="text-center py-10">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b last:border-none py-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 bg-gray-100 rounded-xl object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Size: Large
                    </p>
                    <p className="text-xs text-gray-500">
                      Color: Black
                    </p>
                    <p className="font-bold text-lg mt-2">${item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeProduct(index)}
                      className="text-red-500"
                    >
                      🗑
                    </button>
                    <div className="bg-gray-100 rounded-full flex items-center gap-4 px-3 py-2">
                      <button onClick={() => decrease(index)}>-</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => increase(index)}>+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* right side*/}
          <div className="bg-white rounded-2xl border p-5 h-fit">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div className="flex justify-between mb-3">
              <span>Discount (-20%)</span>
              <strong className="text-red-500">-${discount}</strong>
            </div>
            <div className="flex justify-between mb-5">
              <span>Delivery Fee</span>
              <strong>${delivery}</strong>
            </div>
            <hr />
            <div className="flex justify-between text-xl font-bold my-5">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="flex gap-2 mb-5">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm outline-none"
              />
              <button className="bg-black text-white rounded-full px-5">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white rounded-full py-3">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
export default Cart;