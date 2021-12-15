import { createSlice } from '@reduxjs/toolkit'
import { removeFromFavoriteReducer, addToFavoriteReducer } from './Reducers/favoriteReducers'

const initialState = JSON.parse(localStorage.getItem('favorite')) || [{ id: 0 }]

export const addToFavoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {
      addToFavorite: addToFavoriteReducer,
      removeFromFavorite: removeFromFavoriteReducer,
   }
})

export const { addToFavorite, removeFromFavorite, reset } = addToFavoriteSlice.actions

export default addToFavoriteSlice.reducer