import React, { useState, useEffect, useMemo } from 'react';

export const useSticky = (ref, refEnd) => {
   const [isSticky, setIsSticky] = useState(true)
   const [isStickyEnd, setIsStickyEnd] = useState(false)

   const callbackFunction = (entries) => {
      const [entry] = entries
      setIsSticky(entry.isIntersecting)
   }

   const callbackFunctionEnd = (entries) => {
      const [entry] = entries
      setIsStickyEnd(entry.isIntersecting)
   }

   const options = useMemo(() => {
      return {
         root: null,
         rootMargin: '0px',
         threshold: 1,
      }
   }, [])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      if(ref) observer.observe(ref)

      return () => ref && observer.unobserve(ref)
   }, [ref, options])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunctionEnd, options)
      if(refEnd) observer.observe(refEnd)

      return () => refEnd && observer.unobserve(refEnd)
   }, [refEnd, options])

   return { isSticky, isStickyEnd }
};