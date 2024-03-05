import { createSlice } from "@reduxjs/toolkit";

const initialState = { addedToCart: 0, addedProduct: [] };
const slice = createSlice({
    name : "cart" ,
    initialState ,
    reducers : {
        addToCart : (state , action) =>{
            const { id, price } = action.payload;
           
      
            if (state.addedProduct.some((product) => product.id === id)) {
              state.addedProduct.map((product) => {
                if (product.id == id) {
                  product.count += 1;
                  product.totalPrice = product.count * product.price;
                }
              });
            } else {
              state.addedProduct.push({
                ...action.payload,
                count: 1,
                totalPrice: price,
              });
              state.addedToCart += 1;
            }
        },
        increseInCart : (state , action) =>{
            
            state.addedProduct.map((product) => {
              if (product.id === action.payload) {
                product.count += 1;
                product.totalPrice = product.price * product.count;
              }
            });
        },
        decreseInCart : (state , action) =>{
            state.addedProduct.map((product) => {
                if (product.id === action.payload) {
                  product.count -= 1;
                  product.totalPrice = product.price * product.count;
                }
              });
        },
        removeInCart : (state , action) =>{
            const updateNewState = state.addedProduct.filter((product) => (
                product.id !== action.payload
              ));
              state.addedProduct = updateNewState;
              state.addedToCart -= 1;
        }
    }
})


export const {increseInCart , decreseInCart , removeInCart , addToCart} = slice.actions;
export default slice.reducer;