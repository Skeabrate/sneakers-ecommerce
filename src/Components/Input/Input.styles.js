import styled from "styled-components"
import { Field } from "formik"

export const StyledFieldWrapper = styled.div`
   position: relative;
   margin-bottom: 50px;
   width: fit-content;
`

export const StyledLabel = styled.label`
   position: absolute;
   left: 15px;
   top: 50%;
   transform: translateY(-50%);
   color: ${({theme}) => theme.colors.white};
   font-size: ${({theme}) => theme.fontSize.xxs};
   background-color: ${({theme}) => theme.colors.black};
   padding: 0 8px;
   z-index: ${({isFocused}) => isFocused ? 1 : -1};
   transform: ${({isFocused}) => isFocused ? 'translateY(-33px) scale(0.9)' : 'translateY(-50%)'};
   text-transform: capitalize;

   transition: all .2s ease-in-out;
`

export const StyledField = styled(Field)`
   height: 50px;
   width: 500px;
   padding: 0 20px;
   background-color: transparent;
   border: 2px solid ${({theme}) => theme.colors.white};
   color: ${({theme}) => theme.colors.white};

   border-bottom-color: ${({theme, error}) => error ? theme.colors.red : null};

   &:focus{
      outline: none;
      background: transparent;
   }

   &:-webkit-autofill,
   &:-webkit-autofill:hover,
   &:-webkit-autofill:active,
   &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px ${({theme}) => theme.colors.black} inset !important;
      -webkit-text-fill-color: ${({theme}) => theme.colors.white} !important;
   }
`

export const StyledErrorSvg = styled.div`
   position: absolute;
   right: 15px;
   top: 50%;
   transform: translateY(-50%);
   svg{
      height: 18px;
      width: 18px;
      fill: ${({theme}) => theme.colors.red}
   }
`

export const StyledError = styled.div`
   position: absolute;
   bottom: -20px;
   font-size: ${({theme}) => theme.fontSize.s};
   color: ${({theme}) => theme.colors.red};
`