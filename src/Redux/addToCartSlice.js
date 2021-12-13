import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('cart')) || [ { id: 0, } ]

export const addToCartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      reset(state){
         return state.filter(item => item.id !== 0)
      },
         
      removeFromCart(state, action){
         const filteredData = state.filter((item) => item.id !== action.payload.id || item.size !== action.payload.size)

         localStorage.setItem('cart', JSON.stringify(filteredData))
         return filteredData
      },

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

      changeAmount: (state, action) => {
         state.find(item => {
            if(item.id === action.payload.id && item.size === action.payload.size){
               item.amount += action.payload.amount
            }
         })

         const updateItem = JSON.parse(localStorage.getItem('cart'))
         updateItem.find(item => {
            if(item.id === action.payload.id && item.size === action.payload.size){
               item.amount += action.payload.amount
            }
         })
         
         localStorage.setItem('cart', JSON.stringify(updateItem))
      },
   }
})

export const { addToCart, reset, changeAmount, removeFromCart } = addToCartSlice.actions

export default addToCartSlice.reducer