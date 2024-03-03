import './ProductItem.css';
import { useDispatch } from 'react-redux';


function ProductItem (data){
    const {id , name , price , image} = data
    
    const dispatch = useDispatch()
    


    const addToCartHandler = ()=>{

        dispatch({type : "ADD_TO_CART" , data})

    }
    
    return (
        <div className="productCard">
            <div className="productImage">
                <img src={image} className="img-fluid" alt="product image" />
            </div>
            <div className="cardBody">
                <h5>{name}</h5>
                <p className='price'>price: {price.toLocaleString()}</p>
                <button className="btn btn-primary" onClick={addToCartHandler} >Add to cart</button>
            </div>

        </div>
    )
}

export default ProductItem;