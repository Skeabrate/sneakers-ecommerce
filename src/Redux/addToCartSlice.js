import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('cart')) || [ { id: 0, } ]

export const addToCartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      reset: (state) => state.filter(item => item.id !== 0),
      addToCart(state, action){
         localStorage.setItem('cart', JSON.stringify([
            ...state,
            {
               ...action.payload
            }
         ]))
         state.push({
            ...action.payload
         })
      },
      increaseAmount: (state, action) => {
         state.find(item => {
            if(item.id === action.payload.id && item.size === action.payload.size){
               return item.amount += action.payload.amount
            }
         })

         const updateItem = JSON.parse(localStorage.getItem('cart'))
         updateItem.find(item => {
            if(item.id === action.payload.id && item.size === action.payload.size){
               return item.amount += action.payload.amount
            }
         })
         
         localStorage.setItem('cart', JSON.stringify(updateItem))
      }
      // removeFromCart: () => {},
   }
})

export const { addToCart, reset, increaseAmount } = addToCartSlice.actions

export default addToCartSlice.reducer