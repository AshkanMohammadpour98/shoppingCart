import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CartsPage from "./pages/Cart/CartsPage";
import { useState } from "react";

function App() {
  const [addedToCart, setAddedToCart] = useState(0);
  const [addedProduct, setAddedProduct] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
              addedProduct={addedProduct}
              setAddedProduct={setAddedProduct}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartsPage
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
              addedProduct ={addedProduct}
              setAddedProduct = {setAddedProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
