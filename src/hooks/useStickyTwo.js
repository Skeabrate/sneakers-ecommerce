import { useState, useEffect, useRef } from 'react';

export const useStickyTwo = ( sum, end ) => {
    const [position, setPosition] = useState(0)

    const offsetTopSum = useRef(null)

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        var lastScrollTop = 0
        if(sum.current && end.current){
            offsetTopSum.current = end.current.getBoundingClientRect().top - sum.current.getBoundingClientRect().top      

            window.addEventListener('resize', () => {
                
                offsetTopSum.current = end.current.getBoundingClientRect().top - sum.current.getBoundingClientRect().top
            }, {signal: signal})
        }

        window.addEventListener("scroll", () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; 
            if (st > lastScrollTop){
                if(offsetTopSum.current) setPosition(offsetTopSum.current)
            } else {
                if(offsetTopSum.current) setPosition(0)
                
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, {signal: signal})

        return () => abortController.abort()
    }, [])


    return position;
};