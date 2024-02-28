import { useContext } from "react";
import CartItem from "../CartItem/Cartitem";
import "./Cart.css";
import { AppContext } from "../Context/AppProvider";

function Cart() {
  const { addedToCart , addedProduct } = useContext(AppContext);

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
