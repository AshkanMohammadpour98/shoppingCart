const initialState = { addedToCart: 0, addedProduct: [] };
const reducer = (state = initialState , action) =>{
    switch (action.type) {
        case "ADD_TO_CART" : {
            const { id, price } = action.data;
            const newState = { ...state };
      
            if (newState.addedProduct.some((product) => product.id === id)) {
              newState.addedProduct.map((product) => {
                if (product.id == id) {
                  product.count += 1;
                  product.totalPrice = product.count * product.price;
                }
              });
            } else {
              newState.addedProduct.push({
                ...action.data,
                count: 1,
                totalPrice: price,
              });
              newState.addedToCart += 1;
            }
      
            return newState;
        }
        case "INCRESE_IN_CART" : {
            const newAddedProducts = state.addedProduct.map(product => ({...product}))
            newAddedProducts.map((product) => {
              if (product.id === action.id) {
                product.count += 1;
                product.totalPrice = product.price * product.count;
              }
            });
      
            return {...state , addedProduct : newAddedProducts};
        }
        case "REMOVE_IN_CART" :{
            const newState = {...state};
            const updateNewState = newState.addedProduct.filter((product) => (
              product.id !== action.id
            ));
            newState.addedProduct = updateNewState;
            newState.addedToCart -= 1;
            return newState 
        }
        case "DECRESE_IN_CART" : {
          const newAddedProducts = state.addedProduct.map(product => ({...product}))
          newAddedProducts.map((product) => {
            if (product.id === action.id) {
              product.count -= 1;
              product.totalPrice = product.price * product.count;
            }
          });
    
          return {...state , addedProduct : newAddedProducts}; 
        }
                
        default:{
            return state
        }
            
    }

}

export default reducer;