function Cart({ cart, setCart }) {

  function removeProduct(index) {

    const newCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(newCart);
  }

  return (
    <div>

      <h1>Your Cart</h1>

      {cart.map((product, index) => (

        <div key={index}>

          <h3>{product.name}</h3>

          <p>${product.price}</p>

          <button
            onClick={() =>
              removeProduct(index)
            }
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
}

export default Cart;