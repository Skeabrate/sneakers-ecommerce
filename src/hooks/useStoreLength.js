import { useState, useEffect } from 'react';

export const useStoreLength = (store = []) => {
   const [length, setLength] = useState(0)

   useEffect(() => {
      let amount = 0
      store.find(item => {
         if(item.id === 0) setLength(0)
         else amount += item.amount
         return setLength(amount)
      })
      
   }, [store])

   return length;
};