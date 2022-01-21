import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.nav`
   position: ${({isProductPage}) => isProductPage ? 'unset' : 'fixed'};
   top: 0;
   left: 0;
   transform: ${({hideNav, isProductPage}) => {
      if(isProductPage) return 'translateY(0)'
      if(hideNav) return 'translateY(-100%)'
      if(!hideNav) return 'translateY(0)'
   }};
   opacity: ${({hideNav, isProductPage}) => {
      if(isProductPage) return '1';
      if(hideNav) return '0';
      if(!hideNav) return '1';
   }};
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
   box-shadow: 0px 0px 13px -1px rgba(0, 0, 0, 1);
   
   transition: transform .3s .2s ease-in-out,
               opacity .3s .2s ease-in-out;
   
   transition-duration: ${({hideNav}) => hideNav ? '.3s' : '.2s'}; 

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      font-size: ${({theme}) => theme.fontSize.xs};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      position: fixed;
      font-size: 18px;
      height: 60px;
      transform: translateY(0);
      opacity: 1;
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
   margin-right: 30px;
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

      ${({isToggled}) => !isToggled && 'transition-delay: 0s'};

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
   background-color: transparent;
   border: none;
   height: 50px;
   width: 50px;
   
   svg{
      width: 22px;
      height: 22px;
      transform: rotateY(-180deg); 
      fill: ${({theme}) => theme.colors.white};
   }

   span{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 1px;
      right: 1px;
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
   height: 50px;
   width: 50px;
   border: ${({profileImg, theme}) => profileImg ? `2px solid ${theme.colors.orange}` : 'none'};
   border-radius: 100%;
   overflow: hidden;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: ${({ profileImg }) => !profileImg && 'center'};
   place-content: center;
   background-color: ${({ profileImg, theme }) => profileImg && theme.colors.black};
   margin-left: ${({ profileImg }) => profileImg ? '10px' : 0};

   img{
      font-size: 10px;
      height: 100%;
   }

   svg{
      width: 22px;
      height: 22px;
      fill: ${({theme}) => theme.colors.white};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      width: ${({profileImg}) => profileImg ? '40px' : '50px'};
      height: ${({profileImg}) => profileImg ? '40px' : '50px'};
   }
`
