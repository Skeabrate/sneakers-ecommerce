import { useState, useEffect } from 'react';

export const useStoreLenght = (store = []) => {
   const [length, setLength] = useState(0)

   useEffect(() => {
      let amount = 0
      store.find(item => {
         if(item.id === 0) setLength(0)
         else amount += item.amount
      })
      setLength(amount)
   }, [store])

   return length;
};