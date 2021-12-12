import React, { useState, useEffect } from 'react';
import { changeAmount, removeFromCart } from "../../Redux/addToCartSlice"

const CartItem = ({ item, dispatch }) => {
   const [inputValue, setInputValue] = useState(item.amount)

   useEffect(() =>{
      setInputValue(item.amount)
   }, [item.amount])

   const decreaseHandler = (item) => {
      if(item.amount === 1) dispatch(removeFromCart({
         id: item.id,
         size: item.size,
      }))
      else dispatch(changeAmount({ 
         id: item.id, 
         size: item.size,
         amount: -1,
      }))
   }

   return (
      <div>
         <h3>{item.title}</h3>
         <p>size: {item.size}</p>
         <div>
            <button
               onClick={() => decreaseHandler(item)}
            >-</button>

            <input 
               type="number"
               value={inputValue} 
               onChange={(e) => setInputValue(e.currentTarget.value)}
            />

            <button 
               onClick={() => dispatch(changeAmount({ 
                  id: item.id, 
                  size: item.size,
                  amount: 1,
               }))}
            >+</button>
         </div>

         <p>$ {item.price * item.amount}</p>
      </div>
   );
};

export default CartItem;