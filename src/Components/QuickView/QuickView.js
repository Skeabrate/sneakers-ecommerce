import React, { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ModalWrapper, Wrapper, StyledImage, StyledPlaceHolder } from "./QuickView.styles"
import placeholder from "../../Assets/Images/placeholder.png"

export default function QuickView({ selectedProduct: { title, category, price, images}, isOpen, onRequestClose}) {
   const [isLoaded, setIsLoaded] = useState(false)

   const closeModel = () => {
      setIsLoaded(false)
      onRequestClose()
   }

   return (
      <ModalWrapper isOpen={isOpen} onRequestClose={closeModel} appElement={document.getElementById('root')}>
         <Wrapper>
            {isLoaded ? null : (
               <StyledPlaceHolder>
                  <img alt="" src={placeholder}/>
               </StyledPlaceHolder>
            )}
            <StyledImage isLoaded={isLoaded}>
               <img
                  alt="img"
                  src={images[2].url}
                  onLoad={() =>  setIsLoaded(true)}
               />

            </StyledImage>

            <div>
               <h3>{title}</h3>
               <p>{category}</p>
               <p>${price}</p>
            </div>

            <button onClick={closeModel}>X</button>
         </Wrapper>
      </ModalWrapper>
   )
}