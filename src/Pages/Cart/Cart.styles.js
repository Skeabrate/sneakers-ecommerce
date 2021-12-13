import styled from "styled-components"

export const StyledBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: black;
   cursor: pointer;
   z-index: 999999;
   opacity: ${({isCartOpen}) => isCartOpen ? 0.6 : 0};
   visibility: ${({isCartOpen}) => isCartOpen ? 'visible' : 'hidden'};

   transition: all .5s ease-in-out;
   transition-duration: ${({isCartOpen}) => !isCartOpen && '.2s'};
`

export const StyledCart = styled.div`
   position: fixed;
   overflow: hidden;
   bottom: 0;
   right: 0;
   width: 500px;
   padding: 10px;
   height: 100vh;
   background-color: ${({theme}) => theme.colors.black};
   color: ${({theme}) => theme.colors.white};
   z-index: 999999;
   box-shadow: ${({isCartOpen}) => isCartOpen ? '0px 0px 24px -5px rgba(0, 0, 0, 1)' : null};
   transform: ${({isCartOpen}) => isCartOpen ? 'translateX(0)' : 'translateX(100%)'};

   transition: transform .5s ease-in-out;

   transition-duration: ${({isCartOpen}) => !isCartOpen && '.2s'};

   @media (max-width: 550px){
      width: 100%;
   }
`

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   padding-bottom: 20px;
   margin-bottom: 20px;
   padding: 10px;

   button{
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg{
         width: 20px;
         height: 20px;
         fill: ${({theme}) => theme.colors.white};
      }
   }
`

export const StyledContent= styled.div`
   height: calc(100vh - 197px);
   overflow-y: auto;
   padding: 0 10px;

   ::-webkit-scrollbar {
      width: 2px;
   }

   textarea{
      max-width: 100%;
      margin: 10px 0;
   }
`

export const StyledTotal = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px 10px;
   margin-top: 20px;
   border-top: 1px solid ${({theme}) => theme.colors.grey};

   div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   span{
      font-weight: normal;
      font-size: ${({theme}) => theme.fontSize.s};
      margin-left: 5px;
   }
`