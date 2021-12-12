import styled from "styled-components"

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 999999;
   transform: ${({isCartOpen}) => isCartOpen ? 'translateX(0)' : 'translateX(100%)'};
   transition-delay: 1s;
`

export const StyledBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: black;
   cursor: pointer;
   z-index: 999999;
   opacity: ${({isCartOpen}) => isCartOpen ? 0.5 : 0};
   visibility: ${({isCartOpen}) => isCartOpen ? 'visible' : 'hidden'};

   transition: all .4s ease-in-out;
`

export const StyledCart = styled.div`
   position: fixed;
   bottom: 0;
   right: 0;
   width: 500px;
   height: 100vh;
   background-color: ${({theme}) => theme.colors.white};
   overflow-y: auto;
   z-index: 999999;
   transform: ${({isCartOpen}) => isCartOpen ? 'translateX(0)' : 'translateX(100%)'};

   transition: transform .4s ease-in-out;

   ${({isCartOpen}) => !isCartOpen && 'transition-duration: .2s'}
`