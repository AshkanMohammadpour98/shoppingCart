import './ProductItem.css';
import productsDb from '../../db';

function ProductItem ({id , name , price , image , addedToCart , setAddedToCart , addedProduct , setAddedProduct}){

    const addToCartHandler = ()=>{
        if (isProductExistInCart()) {
            const updateProducts = [...addedProduct];
            updateProducts.map(product =>{
                if(product.id === id){
                    product.count += 1;
                    product.totalPrice = product.count * product.price;
                }
                setAddedProduct(updateProducts);
                return;
            })
        }else{
            setAddedToCart(addedToCart +1)

            const product = productsDb.find(product =>( product.id === id))
            product.count = 1;
            product.totalPrice = product.price * product.count
            setAddedProduct(priveState => [...priveState , product]);

        }

    }
    const isProductExistInCart = ()=>{
        return addedProduct.some(productItem => productItem.id === id)
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