import { createSlice } from "@reduxjs/toolkit"
import { removeFromCartReducer, addToCartReducer, changeAmountReducer, setAmountReducer, resetCartReducer } from "./Reducers/cartReducers"

const initialState = JSON.parse(localStorage.getItem('cart')) || [ { id: 0 } ]

export const addToCartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      removeFromCart: removeFromCartReducer,
      addToCart: addToCartReducer,
      changeAmount: changeAmountReducer,
      setAmount: setAmountReducer,
      resetCart: resetCartReducer,
   }
})

export const { addToCart, changeAmount, removeFromCart, setAmount, resetCart } = addToCartSlice.actions

export default addToCartSlice.reducer