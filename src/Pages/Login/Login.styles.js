import { Form } from "formik"
import styled from "styled-components"

export const StyledSectionWrapper = styled.div`
   display: flex;
   justify-content: center;
   column-gap: 7vw;
   margin-bottom: 190px;

   article{
      max-width: 600px;
   }

   @media (max-width: 1000px){
      flex-direction: column;

      article{
         max-width: 100%;       
      }
   }
`

/* Login Section */
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
   border: 2px solid ${({theme, isFocused}) => isFocused ? theme.colors.orange : theme.colors.white};
   z-index: -1;

   svg{
      width: 18px;
      height: 18px;
      fill: ${({theme}) => theme.colors.black};
   }
`

export const StyledSocialButton = styled.button`
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 180px;
   height: 60px;
   padding: 0 10px;
   margin-bottom: 20px;
   font-size: ${({ theme }) => theme.fontSize.xxs};
   color: ${({ theme }) => theme.colors.black};
   background-color: ${({ theme }) => theme.colors.white};
   border: none;

   @media (max-width: 750px){
      font-size: ${({ theme}) => theme.fontSize.xs};
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
      font-size: ${({ theme}) => theme.fontSize.s};
      margin-top: 10px;
      width: 140px;
      height: 50px;
   }
`

/* Info Section */
export const StyledList = styled.ul`
   list-style: none;
`

export const StyledListItem = styled.li`
   display: flex;
   align-items: center;
   column-gap: 15px;
   margin: 20px 15px;
   
   svg{
      height: 18px;
      width: 18px;
      fill: ${({theme}) => theme.colors.orange};
   }
`

export const StyledClubImg = styled.img`
   max-width: 440px;
   margin-top: 40px;
   opacity: 0;

   @media (max-width: 1000px){
      max-width: 100%;
   }
`


/* Register Footer */
export const StyledRegister = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   background-color: ${({theme}) => theme.colors.orange};
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   column-gap: 40px;
   padding: 50px 20px;

   *::selection{
      background-color: ${({theme}) => theme.colors.black};
   }
`

export const StyledRegisterTitle = styled.h2`
   font-size: ${({theme}) => theme.fontSize.l};
   max-width: 400px;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      font-size: ${({theme}) => theme.fontSize.xxs};
      max-width: 240px;  
   }
`