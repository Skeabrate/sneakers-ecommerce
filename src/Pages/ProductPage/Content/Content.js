import React, { useRef, useEffect, useState } from 'react';
import { StyledSlider, StyledButton, StyledLegend, StyledImage, StyledContent, StyledBtnNext, StyledBtnPrev } from "./Content.styles"
import gsap from "gsap"

const Content = ({product, loading}) => {
   const [current, setCurrent] = useState(0)
   const [isHovered, setIsHovered] = useState(false)

   const t1 = useRef((null))
   const imagesRef = useRef(null)
   const legendRef = useRef(null)

   const sliderRef = useRef(null)

   const prevImage = () => {
      if(current === 0) setCurrent(product.images.length - 1)
      else setCurrent(current - 1)
   }

   const nextImage = () => {
      if(current === product.images.length - 1) setCurrent(0)
      else setCurrent(current + 1)
   }

   useEffect(() => {
      t1.current = gsap.timeline({ paused: !loading })

      if(t1.current){
         t1.current
            .to([imagesRef.current, legendRef.current], {
               opacity: 1,
               duration: .5,
            })
      }
   }, [loading])

   useEffect(() => {
      sliderRef.current.addEventListener('mouseenter', (e) => setIsHovered(true))
      sliderRef.current.addEventListener('mouseleave', (e) => setIsHovered(false))

      return () => {
         sliderRef.current.removeEventListener('mouseenter', () => {})
         sliderRef.current.removeEventListener('mouseleave', () => {})
      }
   }, [])

   return (
      <StyledContent>
         <StyledSlider ref={sliderRef}>
            <div style={{ opacity: 0 }} ref={imagesRef}>
               {loading ? (
                  <StyledImage current={current}>
                     {product.images.map((img, index) => (
                        <img
                           key={index} 
                           src={img.url} 
                           alt="snickers"
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
      </StyledContent>
   );
};

export default Content;