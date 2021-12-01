import React, { useRef, useEffect, useState } from 'react';
import { StyledSlider, StyledImage, StyledContent, StyledBtnNext, StyledBtnPrev } from "./Content.styles"
import gsap from "gsap"

const Content = ({product, loading}) => {
   const [current, setCurrent] = useState(0)

   const t1 = useRef((null))
   const imagesRef = useRef(null)
   const imgRef = useRef(null)

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
            .to(imagesRef.current, {
               opacity: 1,
               duration: .4,
            })
      }
   }, [loading])

   useEffect(() => {
      console.log(imgRef.current)
   }, [imgRef])

   return (
      <StyledContent>
         <StyledSlider>
            <div style={{ opacity: 0 }} ref={imagesRef}>
               {loading ? (
                  <StyledImage>
                     <img 
                        src={product.images[current].url} 
                        alt="snickers"
                        ref={imgRef}
                     />
                  </StyledImage>
               ) : null}
            </div>
            
            <StyledBtnPrev onClick={prevImage}>
               <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </StyledBtnPrev>

            <StyledBtnNext onClick={nextImage}>
               <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </StyledBtnNext>
         </StyledSlider>
      </StyledContent>
   );
};

export default Content;