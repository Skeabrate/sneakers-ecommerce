import React, { useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ModalWrapper, StyledSize, StyledInfo, Wrapper, StyledButton, StyledContent, StyledTitle, StyledCategory, StyledDescription, StyledPrice, StyledStatus } from "./QuickView.styles"
import { sizes } from "../../data/sizes"
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import ImageSlider from '../ImageSlider/ImageSlider';

export default function QuickView({ selectedProduct, isOpen, onRequestClose}) {

   return (
      <ModalWrapper 
         isOpen={isOpen} 
         onRequestClose={onRequestClose} 
         appElement={document.getElementById('root')}
         style={{
            overlay: {
              position: 'fixed',
              zIndex: 2,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(120, 120, 120, 0.8)'
         }}}
      >
         <Wrapper>
            <ImageSlider product={selectedProduct} loading={true} isQuickView/>

            <StyledContent>
               <StyledCategory>{selectedProduct.category}</StyledCategory>
               <StyledTitle>{selectedProduct.title}</StyledTitle>
               <StyledDescription>{selectedProduct.description}</StyledDescription>
               <StyledStatus>Status: <span>Available</span></StyledStatus>

               <StyledInfo>
                  <div>
                     <StyledPrice>${selectedProduct.price}</StyledPrice>
                  </div>
                     <StyledSize>
                        <label>Size:</label>
                        <select
                           /* value={}
                           onChange={} */
                        >
                           {sizes.map(item => (
                              <option key={item} value={item}>{item}</option>
                           ))}
                        </select>
                     </StyledSize>
               </StyledInfo>

               <AddToCartBtn />
               
            </StyledContent>

            <StyledButton onClick={onRequestClose}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </StyledButton>
         </Wrapper>
      </ModalWrapper>
   )
}