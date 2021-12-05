import styled from "styled-components"

export const StyledHamburger = styled.button`
   display: none;
   
   @media (max-width: 550px) {
      padding: 10px;
      cursor: pointer;
      display: inline-block;
      background-color: transparent;
      border: 0;
      margin: 0;
   }
`

export const StyledHamburgerWrapper = styled.span`
   width: 36px;
   height: 23px;
   display: inline-block;
   position: relative;
   transition: transform .3s 0s ease-in-out;

   &:hover{
      transform: scale(0.85);
   }
`

export const StyledHamburgerInner = styled.span`
   width: 100%;
   height: 3px;
   background-color: ${({isToggled, theme}) => isToggled ? 'transparent' : theme.colors.white};
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   transition: background-color .1s .3s ease-in-out;

   &::after, &::before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: ${({theme}) => theme.colors.white};
      position: absolute;
      left: 0;
      transition: transform .2s .2s ease-in-out, 
                  background-color .2s .2s ease-in-out; 
   }
   &::after{
      bottom: 10px;
      transform: ${({isToggled}) => isToggled ? 'translateY(10px) rotate(45deg)' : 'unset'};
   }
   &::before{
      top: 10px;
      transform: ${({isToggled}) => isToggled ? 'translateY(-10px) rotate(-45deg)' : 'unset'}
   }
`