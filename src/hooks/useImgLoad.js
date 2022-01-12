import { useState, useEffect, useRef } from 'react';
import gsap from "gsap"

export const useImgLoad = (...img) => {
    const [isImgLoaded, setIsImgLoaded] = useState(false)

    const t1 = useRef((null))

    const handleLoadImg = () => setIsImgLoaded(true)

    useEffect(() => {
        t1.current = gsap.timeline({ paused: !isImgLoaded })
        
        if(t1.current && img){
            img.forEach((item) => {
                t1.current
                .to(item, {
                    opacity: 1,
                    duration: .6,
                })
            })
        } 
    }, [isImgLoaded])

    return { handleLoadImg };
};