import { configureStore } from "@reduxjs/toolkit"
import addToCartSliceReducer from "./addToCartSlice"

export const store = configureStore({
   reducer: {
      cart: addToCartSliceReducer
   }
})