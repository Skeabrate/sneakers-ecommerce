import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   width: fit-content;
   text-decoration: none;
   color: ${({theme, isBlack}) => isBlack ? theme.colors.black : theme.colors.orange};
   background-color: ${({theme}) => theme.colors.white};
   height: 60px;
   width: 150px;
   font-weight: bold;
   margin-top: 5px;
   border: none;
   font-size: ${({ theme }) => theme.fontSize.xxs};

   &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 2px solid ${({theme}) => theme.colors.white};
      transform: translate(5px, -5px);

      transition: transform .2s ease-in-out;
   }

   &:hover::after{
      transform: translate(-5px, 5px);
   }
   

   @media (max-width: 750px){
      font-size: ${({ theme}) => theme.fontSize.xs};
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
      font-size: ${({ theme}) => theme.fontSize.s};
      margin-top: 10px;
      width: 130px;
      height: 50px;
   }
`