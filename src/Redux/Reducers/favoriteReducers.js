export function removeFromFavoriteReducer(state, action){
   const filteredData = state.filter((item) => item.id !== action.payload.id || item.size !== action.payload.size)

   localStorage.setItem("favorite", JSON.stringify(filteredData))
   return filteredData
}

export function addToFavoriteReducer(state, action){
   localStorage.setItem("favorite", JSON.stringify([
      ...state,
      {
         ...action.payload
      }
   ]))
   state.push({
      ...action.payload
   })
}