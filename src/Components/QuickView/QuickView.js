import React, { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ModalWrapper, Wrapper, StyledImage, StyledPlaceHolder, StyledButton, StyledContent, StyledTitle, StyledCategory, StyledDescription, StyledPrice, StyledCart, StyledStatus } from "./QuickView.styles"
import placeholder from "../../Assets/Images/placeholder.png"
import close from "../../Assets/Images/close.png"
import plus from "../../Assets/Images/icon-plus.svg"
import minus from "../../Assets/Images/icon-minus.svg"

export default function QuickView({ selectedProduct: { title, category, price, images, description}, isOpen, onRequestClose}) {
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

            <StyledContent>
               <StyledTitle>{title}</StyledTitle>
               <StyledCategory>{category}</StyledCategory>
               <StyledDescription>{description}</StyledDescription>
               <StyledPrice>${price}</StyledPrice>
               <StyledStatus>Status: <span>Available</span></StyledStatus>

               <StyledCart>
               <button><img src={minus} alt="minus"/></button> 0 <button><img src={plus} alt="plus" /></button>
               <button>Add to cart</button>
               </StyledCart>
            </StyledContent>

            <StyledButton onClick={closeModel}><img src={close} alt="cross"/></StyledButton>
         </Wrapper>
      </ModalWrapper>
   )
}