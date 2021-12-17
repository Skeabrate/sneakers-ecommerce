import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
   display: flex;
   position: relative;
   width: fit-content;
   text-decoration: none;
   color: ${({theme, isLogin}) => isLogin ? theme.colors.black : theme.colors.orange};
   background-color: ${({theme}) => theme.colors.white};
   padding: 20px 40px;
   font-weight: bold;
   margin-top: 5px;
   border: none;

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
      padding: 15px 30px;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
      font-size: ${({ theme}) => theme.fontSize.s};
      padding: 10px 20px;
      margin-top: 10px;
   }
`