import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   border: 1px solid ${({theme}) => theme.colors.grey};
   height: 46px;
   width: fit-content !important;
   margin: ${({label}) => label && '15px 0 30px'};

   input, div{
      width: 50px;
      text-align: center;
      background-color: transparent;
      border: none;
      font-weight: bold;
      font-size: ${({theme}) => theme.fontSize.xxs};
      color: ${({theme}) => theme.colors.white};
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      ::-webkit-inner-spin-button{
         -webkit-appearance: none; 
         margin: 0; 
      }
      ::-webkit-outer-spin-button{
         -webkit-appearance: none; 
         margin: 0; 
      }

      &:focus{
         outline: 1px solid ${({theme}) => theme.colors.white};
      }
   }

   input[type=number] {
      -moz-appearance: textfield;
   }
`

export const StyledPlusMinusBtn = styled.button`
   background: transparent;
   border: none;
   padding: 15px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: background .1s ease-in-out;

   svg{
      width: 12px;
      height: 12px;
      fill: ${({theme}) => theme.colors.orange};
      transition: fill .1s ease-in-out;
   }

   &:hover{
      background: ${({theme}) => theme.colors.grey};

      svg{
         fill: ${({theme}) => theme.colors.white};
      }
   }

   &:focus{
      outline: 1px solid ${({theme}) => theme.colors.white};
   }
`