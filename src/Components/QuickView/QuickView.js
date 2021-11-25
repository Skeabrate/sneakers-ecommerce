import React, { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ModalWrapper, StyledBtnPrev, StyledBtnNext, StyledBtnSlider, StyledImageSection, StyledSlider, StyledPlusMinusBtn, StyledAddBtn, Wrapper, StyledPlaceHolder, StyledButton, StyledContent, StyledTitle, StyledCategory, StyledDescription, StyledPrice, StyledCart, StyledStatus } from "./QuickView.styles"
import placeholder from "../../Assets/Images/placeholder.png"
import close from "../../Assets/Images/close.png"
import plus from "../../Assets/Images/icon-plus.svg"
import minus from "../../Assets/Images/icon-minus.svg"

const buttonSlider = [2, 0 ,1]

export default function QuickView({ selectedProduct: { title, category, price, images, description}, isOpen, onRequestClose}) {
   const [isLoaded, setIsLoaded] = useState(false)
   const [current, setCurrent] = useState(2)
   const [amount, setAmount] = useState(1)

   const closeModel = () => {
      setIsLoaded(false)
      setCurrent(2)
      onRequestClose()
   }

   const handleSlideLeft = () => {
      let newCurrent = current - 1
      if(newCurrent === -1) newCurrent = 2
      setCurrent(newCurrent)
   }

   const handleSlideRight = () => {
      let newCurrent = current + 1
      if(newCurrent === 3) newCurrent = 0
      setCurrent(newCurrent)
   }

   const lowerAmount = () => {
      setAmount(amount - 1)
      if(amount === 1) setAmount(1)
   }

   const increaseAmount = () => setAmount(amount + 1)

   return (
      <ModalWrapper isOpen={isOpen} onRequestClose={closeModel} appElement={document.getElementById('root')}>
         <Wrapper>
            
            <StyledImageSection>
               {isLoaded ? null : (
                  <StyledPlaceHolder>
                     <img alt="" src={placeholder}/>
                  </StyledPlaceHolder>
               )}
               <StyledSlider isLoaded={isLoaded}>
                  <img
                     alt="img"
                     src={images[current].url}
                     onLoad={() =>  setIsLoaded(true)}
                  />
                  <StyledBtnPrev onClick={handleSlideLeft}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></StyledBtnPrev>
                  <StyledBtnNext onClick={handleSlideRight}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></StyledBtnNext>

                  {buttonSlider.map(val => (
                     <StyledBtnSlider 
                        onClick={() => setCurrent(val)} 
                        isActive={current === val} 
                        key={val}
                        isFirst={val === 1}
                        isSecond={val === 0}
                        isThird={val === 2}
                     />
                  ))}

               </StyledSlider>

            </StyledImageSection>

            <StyledContent>
               <StyledCategory>{category}</StyledCategory>
               <StyledTitle>{title}</StyledTitle>
               <StyledDescription>{description}</StyledDescription>
               <StyledStatus>Status: <span>Available</span></StyledStatus>
               <StyledPrice>${price}</StyledPrice>

               <StyledCart>
                  <StyledPlusMinusBtn onClick={lowerAmount}><img src={minus} alt="minus"/></StyledPlusMinusBtn>
                  <p style={{fontWeight: 'bold'}}>{amount}</p>
                  <StyledPlusMinusBtn onClick={increaseAmount}><img src={plus} alt="plus" /></StyledPlusMinusBtn>

                  <StyledAddBtn>
                  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                     Add to cart
                  </StyledAddBtn>
               </StyledCart>
            </StyledContent>

            <StyledButton onClick={closeModel}><img src={close} alt="cross"/></StyledButton>
         </Wrapper>
      </ModalWrapper>
   )
}