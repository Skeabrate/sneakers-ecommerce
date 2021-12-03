import React, { useRef, useEffect, useState } from 'react';
import { StyledSlider, StyledButton, StyledLegend, StyledImage, StyledBtnNext, StyledBtnPrev } from "./ImageSlider.styles"
import gsap from "gsap"

const ImageSlider = ({product, loading, isQuickView}) => {
   const [current, setCurrent] = useState(0)
   const [isHovered, setIsHovered] = useState(true)
   const [isImgLoaded, setIsImgLoaded] = useState(false)

   let newCurrent = 0

   const t1 = useRef((null))
   const imagesRef = useRef(null)
   const legendRef = useRef(null)

   const sliderRef = useRef(null)

   const nextImage = () => {
      setCurrent(current === product.images.length - 1 ? 0 : current + 1) 
   }

   const prevImage = () => {
      setCurrent(current === 0 ? product.images.length - 1 : current - 1)
   }

   const handleLoadImg = (index) => !index && setIsImgLoaded(true)

   useEffect(() => {
      newCurrent = current
   }, [current])

   useEffect(() => {
      const abortCont = new AbortController()
      const { signal } = abortCont

      if(product.images){
         document.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
               if(newCurrent === product.images.length - 1){
                  newCurrent = 0
               } else {
                  newCurrent += 1
               }
               return setCurrent(newCurrent) 
            }
            if(e.keyCode === 37) {
               if(newCurrent === 0){
                  newCurrent = product.images.length - 1
               } else {
                  newCurrent -= 1
               }
               return setCurrent(newCurrent)
            }
         }, {signal: signal})
      }
      else document.removeEventListener('keydown', () => {})

      return () => {
         abortCont.abort()
      }
   }, [product, current])

   useEffect(() => {
      t1.current = gsap.timeline({ paused: !isImgLoaded })

      if(t1.current){
         t1.current
            .to([imagesRef.current, legendRef.current], {
               opacity: 1,
               duration: .5,
            })
      }
   }, [isImgLoaded])

   return (
      <StyledSlider 
         isQuickView={isQuickView}
         ref={sliderRef} 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
      >
         <div style={{ opacity: 0 }} ref={imagesRef}>
            {loading ? (
               <StyledImage current={current} isQuickView={isQuickView}>
                  {product.images.map((img, index) => (
                     <img
                        key={index} 
                        src={img.url} 
                        alt="snickers"
                        onLoad={() => handleLoadImg(index)}
                     />
                  ))}
                  
               </StyledImage>
            ) : null}
         </div>
         
         <StyledBtnPrev onClick={prevImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
         </StyledBtnPrev>

         <StyledBtnNext onClick={nextImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
         </StyledBtnNext>
         
         {loading ? (
            <StyledLegend imagesLength={product.images.length} ref={legendRef}>
               {product.images.map((img, index) => (
                  <StyledButton 
                     key={index} 
                     isHovered={isHovered} 
                     isCurrent={index === current} 
                     onClick={() => setCurrent(index)}
                  >
                     <img
                        src={img.url} 
                        alt="snickers"
                     />
                     <span></span>
                  </StyledButton>
               ))}
            </StyledLegend>
         ) : null}

      </StyledSlider>
   );
};

export default ImageSlider;