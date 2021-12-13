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
   z-index: 99999;
   

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      font-size: ${({theme}) => theme.fontSize.xs};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      
      font-size: 18px;
      position: fixed;
      height: 60px;
      
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

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      font-size: 26px;
   }
`

export const StyledNav = styled.ul`
   list-style: none;
   display: flex;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){   
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: fixed;
      width: 100%;
      height: calc(100vh - 60px);
      top: 60px;
      left: 0;
      transform: ${({isToggled}) => isToggled ? 'translateX(0)' : 'translateX(-100%)'};

      transition: transform .5s ease-in-out;

      ${({isToggled}) => !isToggled && 'transition: .3s'};

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
   font-weight: bold;
   
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

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      background-color: ${({theme}) => theme.colors.black};
      width: 95vw;
      height: 15vh;
      padding-bottom: 0;
      margin: 2vh 0 0;
      align-items: center;
      font-weight: bold;
      transform-origin: top;
      opacity: ${({isToggled}) => isToggled ? 1 : 0};
      transform: ${({isToggled}) => isToggled ? 'scaleY(1)' : 'scaleY(0)'};

      transition: opacity ${({isFirst, isSecond}) => {
                     if(isFirst) return '.3s .3s ease-in-out'
                     if(isSecond) return '.3s .4s ease-in-out'
                     else return '.3s .5s ease-in-out'
                  }}, 
                  transform ${({isFirst, isSecond}) => {
                     if(isFirst) return '.2s .3s ease-in-out'
                     if(isSecond) return '.2s .4s ease-in-out'
                     else return '.2s .5s ease-in-out'
                  }};

      ${({isToggled}) => isToggled && 'transition-delay: 0'};

      &.active::after {
         opacity: 0;
      }

      &:hover::after{
         opacity: 0;
      }
   }
`

export const StyledBackButton = styled.button`
   height: 49vh;
   width: 100vw;
   background-color: transparent;
   border: none;
   cursor: pointer;

   &:focus{
      outline: none;
   }

   @media (min-width: ${({theme}) => theme.screenSize.mobile}){
      display: none;
   }
`

export const StyledCart = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledCartItem = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   position: relative;
   margin-right: 30px;
   background-color: transparent;
   border: none;
   
   svg{
      transform: rotateY(-180deg); 
      fill: ${({theme}) => theme.colors.white};
   }

   span{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -12px;
      right: -12px;
      font-size: ${({theme}) => theme.fontSize.micro};
      color: ${({theme}) => theme.colors.white};
      font-weight: bold;
      background-color: ${({theme}) => theme.colors.orange};
      border-radius: 100px;
      width: 21px;
      height: 21px;
   }
`

export const StyledCartProfile = styled.div`
   max-width: 50px;

   img{
      width: 100%;
      height: 100%;
      border: 2px solid ${({theme}) => theme.colors.orange};
      border-radius: 100%;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      max-width: 40px;
   }
`
