import styled from "styled-components"

export const StyledCart = styled.div`
   display: flex;
   align-items: center;
   margin-top: 20px;

   p{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 40px;
   }

   button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none; 
      gap: 10px;  
   }
`

export const StyledPlusMinusBtn = styled.button`
   background: transparent;
   width: 60px;
   height: 50px;
`

export const StyledAddBtn = styled.button`
   background-color: ${({theme}) => theme.colors.orange};
   color: ${({theme}) => theme.colors.white};
   padding: 15px 30px;
   border-radius: 8px;
   font-weight: bold;
   position: relative;
   transform-origin: left;

   transition: all .3s ease-in-out;

   svg{
      opacity: 0;
      right: 15px;
      position: absolute;

      transition: opacity;
      transition-delay: .2s;
   }

   path{
      fill: ${({theme}) => theme.colors.orange};
   }

   &:hover{
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.orange};
      padding: 15px 50px 15px 30px ;
   }

   &:hover svg{
      opacity: 1;
   }
`