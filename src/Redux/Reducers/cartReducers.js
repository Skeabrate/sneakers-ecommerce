export function removeFromCartReducer(state, action){
   const filteredData = state.filter((item) => item.id !== action.payload.id || item.size !== action.payload.size)

   localStorage.setItem("cart", JSON.stringify(filteredData))
   return filteredData
}

export function addToCartReducer(state, action){
   localStorage.setItem("cart", JSON.stringify([
      ...state,
      {
         ...action.payload
      }
   ]))
   state.push({
      ...action.payload
   })
}

export function changeAmountReducer(state, action){
   state.find(item => {
      if(item.id === action.payload.id && item.size === action.payload.size){
         item.amount += action.payload.amount
      }
      return null
   })

   const updateItem = JSON.parse(localStorage.getItem('cart'))
   updateItem.find(item => {
      if(item.id === action.payload.id && item.size === action.payload.size){
         item.amount += action.payload.amount
      }
      return null
   })
   
   localStorage.setItem('cart', JSON.stringify(updateItem))
}