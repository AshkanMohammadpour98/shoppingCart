import { useContext } from "react";
import "./Cartitem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../Context/AppProvider";


function CartItem( {id  ,totalPrice, count , image } ) {
  const {dispatch} = useContext(AppContext);


  const incresehandler = () => {

        dispatch({type : 'INCRESE_IN_CART' , id})
  };
  const decresehandler = () => {


    dispatch({type : 'DECRESE_IN_CART' , id})
  };
  const removeProductHandler = ()=>{
    dispatch({type : 'REMOVE_IN_CART' , id})
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
