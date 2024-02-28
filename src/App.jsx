import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CartsPage from "./pages/Cart/CartsPage";





function App() {

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
