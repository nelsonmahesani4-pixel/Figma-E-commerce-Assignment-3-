import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState([]);

  return (

      <Routes>

        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

      </Routes>

  );
}

export default App;