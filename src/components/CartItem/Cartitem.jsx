import "./Cartitem.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem({
  addedProduct,
  setAddedProduct,
  addedToCart,
  setAddedToCart,
  id,
  name,
  image,
  price,
  count,
  totalPrice,
}) {
  // console.log(addedProduct);

  const incresehandler = () => {
    const updateAddedProduct = [...addedProduct];

    updateAddedProduct.map((product) => {
      if (product.id === id) {
        product.count += 1;
        product.totalPrice = product.price * product.count;
        setAddedProduct(updateAddedProduct);
      }
    });
  };
  const decresehandler = () => {
    const updateAddedProduct = [...addedProduct];

    updateAddedProduct.map((product) => {
      if (product.id === id) {
        product.count -= 1;
        product.totalPrice = product.price * product.count;
        setAddedProduct(updateAddedProduct);
      }
    });
  };
  const removeProductHandler = ()=>{
    const updateAddedProduct = addedProduct.filter( product => product.id !== id)
    setAddedProduct(updateAddedProduct)
    setAddedToCart(addedToCart -1)   
  }

  return (
    <div className="ProductCartItem">
      <div className="cardLift">
        <img src={image} />
      </div>
      <div className="cardMiddel">
        
        {count > 1 ? (
          <button onClick={decresehandler}>-</button>
        ) : (
          <button onClick={removeProductHandler}>
            <RiDeleteBin6Line />
          </button>
        )}
        <span>{count}</span>
        <button onClick={incresehandler}>+</button>
      </div>
      <div className="cardRight">
        <h5>{name}</h5>
        <p>price : {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}
export default CartItem;
