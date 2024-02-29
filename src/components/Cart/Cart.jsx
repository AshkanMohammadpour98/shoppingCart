import { useContext } from "react";
import CartItem from "../CartItem/Cartitem";
import "./Cart.css";
import { AppContext } from "../Context/AppProvider";

function Cart() {
  const { state} = useContext(AppContext);
  const {addedToCart ,addedProduct} = state;

  return (
    <div className="containerCart">
      {addedToCart > 0 ? (
        <>
          {addedProduct.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
         
        </>
      ) : (
        <p>empte added to cart</p>
      )}
    </div>
  );
}
export default Cart;
