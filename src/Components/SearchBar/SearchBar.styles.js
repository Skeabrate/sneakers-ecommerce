import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 20px;
   }
`

export const StyledAnimation = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   height: 2px;
   width: calc(100% - 62px);
   background-color: ${({theme}) => theme.colors.orange};
   transform: ${({isFocused}) => isFocused ? 'scaleX(1)' : 'scaleX(0)'};
   transform-origin: left;

   transition: transform .4s ease-in-out;
`

export const StyledInput = styled.input`
   background-color: transparent;
   border: 1px solid ${({theme}) => theme.colors.grey};
   border-left: none;
   border-right: none;
   color: ${({theme}) => theme.colors.white};
   font-size: ${({theme}) => theme.fontSize.s};
   padding: 16px;
   margin-right: 10px;
   transform-origin: right;
   width: 80px;
   border-radius: 0px;

   &:focus {
      outline: none;
   }
`

export const StyledSearchBtn = styled.button`
   width: 52px;
   height: 52px;
   background-color: ${({theme}) => theme.colors.grey};
   border: none;
   transition: background-color .1s ease-in-out;

   svg{
      fill: ${({theme}) => theme.colors.white};
      transform: scale(0.7);
      transition: transform .1s ease-in-out;
   }

   @media (min-width: ${({theme}) => theme.screenSize.mobile}){
      &:hover{
         background-color: ${({theme}) => theme.colors.orange};
      }

      &:hover svg{
         transform: scale(0.9);
      }
   }
`