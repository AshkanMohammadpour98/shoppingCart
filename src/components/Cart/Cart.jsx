import CartItem from "../CartItem/Cartitem";
import "./Cart.css";
import { useSelector } from "react-redux";

function Cart() {

  const addedProduct = useSelector(store => store.addedProduct)

  return (
    <div className="containerCart">
      {addedProduct.length > 0 ? (
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
