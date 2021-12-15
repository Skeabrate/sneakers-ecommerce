import { configureStore } from "@reduxjs/toolkit"
import addToCartSliceReducer from "./addToCartSlice"
import addToFavoriteSliceReducer from "./addToFavoriteSlice"

export const store = configureStore({
   reducer: {
      cart: addToCartSliceReducer,
      favorite: addToFavoriteSliceReducer,
   }
})