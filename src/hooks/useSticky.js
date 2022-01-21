import { useState, useEffect, useMemo } from 'react';

export const useSticky = (ref) => {
   const [isSticky, setIsSticky] = useState(true)

   const callbackFunction = (entries) => {
      const [entry] = entries
      setIsSticky(entry.isIntersecting)
   }

   const options = useMemo(() => {
      return {
         root: null,
         rootMargin: '0px',
         threshold: 0,
      }
   }, [])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      if(ref) observer.observe(ref)

      return () => ref && observer.unobserve(ref)
   }, [ref, options])

   return { isSticky }
};