import CartItem from "../CartItem/Cartitem";
import "./Cart.css";

function Cart({ addedToCart, setAddedToCart, addedProduct, setAddedProduct }) {

  return (
    <div className="containerCart">
      {addedToCart > 0 ? (
        <>
          {addedProduct.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addedProduct={addedProduct}
              setAddedProduct={setAddedProduct}
              addedToCart = {addedToCart}
              setAddedToCart={setAddedToCart}
            />
          ))}
        </>
      ) : (
        <p>empte added to cart</p>
      )}
    </div>
  );
}
export default Cart;
