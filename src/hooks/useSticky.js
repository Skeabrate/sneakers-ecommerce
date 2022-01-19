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
      if(ref.current) observer.observe(ref.current)

      return () => ref.current && observer.unobserve(ref.current)
   }, [ref, options])

   return { isSticky }
};