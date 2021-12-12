import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

export const useCartLenght = () => {
   const [length, setLength] = useState(0)

   const cart = useSelector((state) => state.cart)

   useEffect(() => {
      let amount = 0
      cart.find(item => {
         if(item.id === 0) setLength(0)
         else amount += item.amount
      })
      setLength(amount)
   }, [cart])

   return length;
};