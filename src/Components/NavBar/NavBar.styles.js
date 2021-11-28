import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 0 3vw;
   align-items: center;
   background-color: black;
   color: ${({theme}) => theme.colors.white};
   height: 100px;
   font-size: ${({theme}) => theme.fontSize.s};
   transform: translateY(-100%);
   z-index: 9999;
`

export const StyledTitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledTitle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   margin-right: 8vw;
   font-family: 'Shadows Into Light', cursive;
`

export const StyledLogo = styled(Link)`
   font-size: ${({theme}) => theme.fontSize.xl};
   cursor: pointer;
   text-decoration: none;
   color: ${({theme}) =>theme.colors.white};
   font-family: 'Shadows Into Light', cursive;
   font-weight: bold;
`

export const StyledNav = styled.div`
   list-style: none;
   display: flex;

   transition: transform .3s ease-in-out;

   @media (max-width: 800px){   
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      background-color: black;
      width: 100%;
      height: calc(100vh - 100px);
      top: 100px;
      left: 0;
      transform: ${({isToggled}) => isToggled ? 'translateX(0)' : 'translateX(-100%)'};
   }
`

export const StyledNavItem = styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 40px;
   height: 100px;
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

   @media (max-width: 800px){
      background-color: ${({theme}) => theme.colors.black};
      width: 95vw;
      height: 15vh;
      font-size: 1.5rem;
      margin-right: 0;

      &.active::after {
         opacity: 0;
      }

      &:hover::after{
      opacity: 1;
   }
   }
`

export const StyledCart = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledCartItem = styled.div`
   margin: 0 1vw;
   max-width: 60px;
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
      height: 100%;
      border: 2px solid ${({theme}) => theme.colors.orange};
      border-radius: 100%;
   }
`
