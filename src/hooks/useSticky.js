import React, { useState, useEffect, useMemo } from 'react';

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
         threshold: 1,
      }
   }, [])

   useEffect(() => {
      console.log(ref)
      const observer = new IntersectionObserver(callbackFunction, options)
      if(ref) {
         observer.observe(ref)
         
      }
      return () => {
         if(ref) observer.unobserve(ref)
      }
   }, [ref, options])

   return isSticky
};