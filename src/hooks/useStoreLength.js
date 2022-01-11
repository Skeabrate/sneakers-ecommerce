import { useState, useEffect } from 'react';

export const useStoreLength = (store = []) => {
   const [length, setLength] = useState(0)

   useEffect(() => {
      const data = store.map(item => item.amount)
      setLength(data.reduce((a, b) => a + b, 0))
   }, [store])

   return length > 0 ? length : 0;
};