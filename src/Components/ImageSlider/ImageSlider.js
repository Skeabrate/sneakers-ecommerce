import React, { useRef, useEffect, useState } from 'react';
import { StyledSlider, StyledButton, StyledLegend, StyledImage, StyledBtnNext, StyledBtnPrev } from "./ImageSlider.styles"
import { useImgLoad } from "../../hooks/useImgLoad"

const ImageSlider = ({product, loading, }) => {
   const [current, setCurrent] = useState(0)
   const [isHovered, setIsHovered] = useState(true)

   let newCurrent = useRef(0)
   const imagesRef = useRef(null)
   const legendRef = useRef(null)

   const { handleLoadImg } = useImgLoad(imagesRef.current, legendRef.current)

   const nextImage = () => setCurrent(current === product.images.length - 1 ? 0 : current + 1) 
   const prevImage = () => setCurrent(current === 0 ? product.images.length - 1 : current - 1)

   useEffect(() => {
      newCurrent.current = current
   }, [current])

   useEffect(() => {
      const abortCont = new AbortController()
      const { signal } = abortCont

      if(product.images){
         document.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
               if(newCurrent.current === product.images.length - 1) newCurrent.current = 0
               else newCurrent.current += 1
               return setCurrent(newCurrent.current) 
            }
            if(e.keyCode === 37) {
               if(newCurrent.current === 0) newCurrent.current = product.images.length - 1
               else newCurrent.current -= 1
               return setCurrent(newCurrent.current)
            }
         }, {signal: signal})
      }
      else document.removeEventListener('keydown', () => {})

      return () => {
         abortCont.abort()
      }
   }, [product, current])

   return (
      <StyledSlider 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
      >
         <div style={{ opacity: 0 }} ref={imagesRef}>
            {loading ? (
               <StyledImage current={current}>
                  {product.images.map((img, index) => (
                     <img
                        key={index} 
                        src={img.url} 
                        alt="snickers"
                        onLoad={() => !index && handleLoadImg()}
                     />
                  ))}
                  
               </StyledImage>
            ) : null}
         </div>
         
         <StyledBtnPrev onClick={prevImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
         </StyledBtnPrev>

         <StyledBtnNext onClick={nextImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
         </StyledBtnNext>
         
         {loading ? (
            <StyledLegend imagesLength={product.images.length} ref={legendRef}>
               {product.images.map((img, index) => (
                  <StyledButton 
                     key={index} 
                     isHovered={isHovered} 
                     isCurrent={index === current} 
                     onClick={() => setCurrent(index)}
                     aria-label="Change image"
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

export default React.memo(ImageSlider);