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
      const mediaQuery = window.matchMedia('(max-width: 550px)')
      const observer = new IntersectionObserver(callbackFunction, options)
      const refCurr = ref.current

      if(!mediaQuery.matches && refCurr) observer.observe(refCurr)
      
      return () => refCurr && observer.unobserve(refCurr)
   }, [ref, options])

   return { isSticky }
};