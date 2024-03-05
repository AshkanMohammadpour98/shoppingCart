
import "./Cartitem.css";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { decreseInCart, increseInCart, removeInCart } from "../../Redux/slice";



function CartItem( {id  ,totalPrice, count , image } ) {
 
  const dispatch = useDispatch();


  const incresehandler = () => {

        dispatch(increseInCart(id))
  };
  const decresehandler = () => {


    dispatch(decreseInCart(id))
  };
  const removeProductHandler = ()=>{
    dispatch(removeInCart(id))
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
