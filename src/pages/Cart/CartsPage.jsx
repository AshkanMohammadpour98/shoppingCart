import Cart from "../../components/Cart/Cart";
import Navbar from "../../components/Navbar/Navbar";
import "./CartsPage.css";

function Card({ addedToCart, setAddedToCart, addedProduct, setAddedProduct }) {
  return (
    <>
      <Navbar addedToCart={addedToCart} />
      <h1>Card page</h1>
      <Cart
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        addedProduct={addedProduct}
        setAddedProduct={setAddedProduct}
      />
      
    </>
  );
}
export default Card;
