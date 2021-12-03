import React, { useReducer } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ModalWrapper, StyledBtnPrev, StyledSize, StyledInfo ,StyledBtnNext, StyledBtnSlider, StyledImageSection, StyledSlider, Wrapper, StyledPlaceHolder, StyledButton, StyledContent, StyledTitle, StyledCategory, StyledDescription, StyledPrice, StyledStatus } from "./QuickView.styles"
import placeholder from "../../Assets/Images/placeholder.png"
import { reducer } from './QuickViewReducer';
import { sizes } from "../../data/sizes"
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const initialState = {
   isLoaded: false,
   current: 2,
   amount: 1,
}

export default function QuickView({ selectedProduct: { title, category, price, images, description}, isOpen, onRequestClose}) {
   const [state, dispatch] = useReducer(reducer, initialState)

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
            
            <StyledImageSection>
               {state.isLoaded ? null : (
                  <StyledPlaceHolder>
                     <img alt="" src={placeholder}/>
                  </StyledPlaceHolder>
               )}
               <StyledSlider isLoaded={state.isLoaded}>
                  <img
                     alt="img"
                     src={images[state.current].url}
                     onLoad={() =>  dispatch({type: 'SET_LOADING', value: true})}
                  />
                  <StyledBtnPrev 
                     isHidden 
                     onClick={() => dispatch({type: 'SET_CURRENT', direcion: 'SLIDE_LEFT'})}
                  >
                     <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                  </StyledBtnPrev>

                  <StyledBtnNext 
                     isHidden 
                     onClick={() => dispatch({type: 'SET_CURRENT', direcion: 'SLIDE_RIGHT'})}
                  >
                     <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                  </StyledBtnNext>

                  {/* {buttonSlider.map(val => (
                     <StyledBtnSlider 
                        onClick={() => dispatch({type: 'SET_CURRENT', value: val})} 
                        isActive={state.current === val} 
                        key={val}
                        isFirst={val === 1}
                        isSecond={val === 0}
                        isThird={val === 2}
                     />
                  ))} */}

               </StyledSlider>
            </StyledImageSection>

            <StyledContent>
               <StyledCategory>{category}</StyledCategory>
               <StyledTitle>{title}</StyledTitle>
               <StyledDescription>{description}</StyledDescription>
               <StyledStatus>Status: <span>Available</span></StyledStatus>

               <StyledInfo>
                  <div>
                     <StyledPrice>${price}</StyledPrice>
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