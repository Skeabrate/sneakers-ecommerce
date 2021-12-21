import { Form } from "formik"
import styled from "styled-components"


export const StyledForm = styled(Form)`
   display: flex;
   flex-direction: column;
`

export const StyledCheckbox = styled.div`
   margin-bottom: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: fit-content;
   column-gap: 10px;
   position: relative;

   input{
      width: 30px;
      height: 30px;
      opacity: 0;
      cursor: pointer;
   }
`

export const StyledCustomInput = styled.span`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30px;
   height: 30px;
   left: 0;
   background-color: ${({theme, value}) => value ? theme.colors.white : theme.colors.black};
   border: 2px solid ${({theme}) => theme.colors.white};
   
   z-index: -1;

   svg{
      width: 18px;
      height: 18px;
      fill: ${({theme}) => theme.colors.black};
   }
`
