import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 0 10vw;
   align-items: center;
   background-color: black;
   color: ${({theme}) => theme.colors.white};
   height: 10vh;
   font-size: 1.4rem;
   transform: translateY(-100%);
`

export const StyledTitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8vw;
`

export const StyledLogo = styled.h1`
   font-size: ${({theme}) => theme.fontSize.xl};
   cursor: pointer;
`

export const StyledNav = styled.div`
   list-style: none;
   display: flex;
`

export const StyledNavItem = styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 40px;
   height: 10vh;
   position: relative;
   cursor: pointer;
   text-decoration: none;
   color: ${({theme}) => theme.colors.white};

   
   &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${({theme}) => theme.colors.orange};
      opacity: 0;
      
      transition: opacity .2s;
   }
   
   &:hover::after{
      opacity: 1;
   }

   &.active::after {
      opacity: 1;
   }
`

export const StyledCart = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledCartItem = styled.div`
   margin: 0 20px;
   max-width: 70px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   
   svg{
      transform: rotateY(-180deg); 
      fill: ${({theme}) => theme.colors.orange};
      
   }

   img{
      width: 100%;
      border: 2px solid ${({theme}) => theme.colors.orange};
      border-radius: 100%;
   }
`
