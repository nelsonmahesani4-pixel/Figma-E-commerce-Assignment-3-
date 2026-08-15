import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/Category";
import Navbar from "./components/Navbar";

function App() {
  <Navbar/>
  const [cart, setCart] = useState([]);
  return (
    <Routes><Route path="/" element={
          <Home cart={cart} setCart={setCart}/>}
      />
      <Route path="/product/:id" element={ 
        <ProductDetail cart={cart} setCart={setCart}/>}
      />
      <Route  path="/cart" element={
          <Cart cart={cart} setCart={setCart}/>
        }/>
      <Route path="/category/:name"element={<CategoryPage />}/> </Routes>
  );
}

export default App;