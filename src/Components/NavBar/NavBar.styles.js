import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
   position: ${({isProductPage}) => isProductPage ? 'unset' : 'fixed'};
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 0 3vw;
   align-items: center;
   background-color: black;
   color: ${({theme}) => theme.colors.white};
   height: 80px;
   font-size: ${({theme}) => theme.fontSize.xxs};
   transform: translateY(-100%);
   z-index: 99999;

   @media (max-width: 1000px){
      font-size: ${({theme}) => theme.fontSize.xs};
   }

   @media (max-width: 550px){
      font-size: ${({theme}) => theme.fontSize.l};
      position: fixed;
   }
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

   @media (max-width: 750px){
      font-size: 30px;
   }
`

export const StyledNav = styled.div`
   list-style: none;
   display: flex;

   transition: transform .3s ease-in-out;

   @media (max-width: 550px){   
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      width: 100%;
      height: calc(100vh - 80px);
      top: 80px;
      left: 0;
      transform: ${({isToggled}) => isToggled ? 'translateX(0)' : 'translateX(-100%)'};

      &::after{
         content: '';
         position: fixed;
         background-color: black;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: -1;
         opacity: 0.8;
      }
   }
`

export const StyledNavItem = styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: end;
   margin-right: 40px;
   padding-bottom: 20px;
   height: 80px;
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

   @media (max-width: 550px){
      background-color: ${({theme}) => theme.colors.black};
      width: 95vw;
      height: 15vh;
      margin-right: 0;
      align-items: center;
      padding-bottom: 0;
      font-weight: bold;

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
