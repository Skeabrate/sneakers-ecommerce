import { useRef, useEffect, useState, useMemo } from 'react';
import gsap from "gsap"

export const useAnimation = (ref) => {
   const [isPaused, setIsPaused] = useState(false)

   const tl = useRef(null)

   const callbackFunction = (entries) => {
      const [entry] = entries
      if(entry.isIntersecting) setIsPaused(true)
   }

   const options = useMemo(() => {
      return {
         root: null,
         rootMargin: '-100px',
         threshold: 0,
      }
   }, [])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      if(ref) observer.observe(ref)

      return () => ref && observer.unobserve(ref)
   }, [ref, options])

   useEffect(() => {
      tl.current = gsap.timeline({ paused: !isPaused })

      if(tl.current){
         tl.current
            .to(ref, {
               opacity: 1,
               translateY: 0,
               duration: .8,
            })
      }
   }, [isPaused, ref])

   return isPaused
};
