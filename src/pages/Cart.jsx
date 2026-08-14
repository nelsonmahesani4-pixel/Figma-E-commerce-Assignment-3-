function Cart({ cart, setCart }) {

  function removeProduct(index) {

    const newCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(newCart);
  }


  function increaseQuantity(index) {

    const newCart = [...cart];

    newCart[index].quantity =
      (newCart[index].quantity || 1) + 1;

    setCart(newCart);
  }


  function decreaseQuantity(index) {

    const newCart = [...cart];

    const quantity =
      (newCart[index].quantity || 1) - 1;

    if (quantity <= 0) {
      removeProduct(index);
      return;
    }

    newCart[index].quantity = quantity;

    setCart(newCart);
  }


  let total = 0;

  cart.forEach((product) => {

    total =
      total +
      product.price *
      (product.quantity || 1);

  });


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

    <div className="max-w-5xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-8">
        YOUR CART
      </h1>


      {cart.map((product, index) => (

        <div
          key={index}
          className="border-b py-5 flex items-center gap-5"
        >

          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-contain bg-gray-100 rounded-lg"
          />


          <div className="flex-1">

            <h3 className="font-bold">
              {product.name}
            </h3>

            <p>
              ${product.price}
            </p>

          </div>


          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                decreaseQuantity(index)
              }
              className="border px-3 py-1 rounded"
            >
              -
            </button>

            <span>
              {product.quantity || 1}
            </span>

            <button
              onClick={() =>
                increaseQuantity(index)
              }
              className="border px-3 py-1 rounded"
            >
              +
            </button>

          </div>


          <button
            onClick={() =>
              removeProduct(index)
            }
            className="text-red-500"
          >
            Remove
          </button>

        </div>

      ))}
      <div className="text-right mt-8">

        <h2 className="text-2xl font-bold">
          Total: ${total}
        </h2>

      </div>

    </div>

  );
}

export default Cart;