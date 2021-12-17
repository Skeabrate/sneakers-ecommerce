import styled from "styled-components"


export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;

   div{
      position: relative;
      margin-bottom: 50px;
   }
`

export const StyledLabel = styled.label`
   position: absolute;
   left: 20px;
   top: 50%;
   transform: translateY(-50%);
   color: ${({theme}) => theme.colors.white};;
   font-size: ${({theme}) => theme.fontSize.xxs};
   background-color: ${({theme}) => theme.colors.black};
   padding: 0 8px;
   z-index: ${({isFocused}) => isFocused ? 1 : -1};
   transform: ${({isFocused}) => isFocused ? 'translateY(-33px) scale(0.9)' : 'translateY(-50%)'};

   transition: all .2s ease-in-out;
`

export const StyledInput = styled.input`
   height: 50px;
   width: 500px;
   padding: 0 20px;
   background-color: transparent;
   border: 2px solid ${({theme}) => theme.colors.white};
   color: ${({theme}) => theme.colors.white};
   transition: border-color .1s ease-in-out;

   border-bottom-color: ${({theme, error}) => error ? 'red' : theme.colors.white};

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