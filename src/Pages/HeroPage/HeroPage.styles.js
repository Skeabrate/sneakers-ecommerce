import styled from "styled-components"
import { keyframes } from "styled-components"

export const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
`

export const StyledHeroImage = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   gap: 5rem;

   background: linear-gradient(rgba(213,213,213, 0.5), rgba(0,0,0, 0.4)), url(${({hero}) => hero}) center/cover no-repeat;
   opacity: 0.6;
   transform: scale(1.2);
`

export const StyledTitleWrapper = styled.div`
   transform: rotate(-25deg);
   font-size: ${({theme}) => theme.fontSize.xxl};
   font-weight: bold;
   color: ${({theme}) => theme.colors.black};
   text-shadow: 2px 2px 2px ${({theme}) => theme.colors.grey};
   line-height: 0.98;
`

export const StyledTitle = styled.span`
   padding: 0 20px;
   overflow: hidden;
   display: block;

   &:nth-child(2) {
      padding-bottom: 30px;
   }

   span{
      display: block;
      transform: translateY(130%);
   }
`

export const StyledButton = styled.button`
   margin-bottom: 10vw;
   display: block;
   font-weight: bold;
   position: relative;
   width: 150px;
   height: 150px;
   border-radius: 100%;
   border: none;
   background-color: transparent;
   font-size: ${({theme}) => theme.fontSize.l};
   color: ${({theme}) => theme.colors.black};
   transform: scale(0);
   cursor: pointer;
   
   transition: color .4s ease-in-out;

   span{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({theme, isBlack}) => isBlack ? `${theme.colors.black}` : `${theme.colors.white}`};
      border-radius: 100%;
      z-index: -1;
      border: 5px solid ${({theme}) => theme.colors.black};
      cursor: pointer;

      transition: border .2s ease-in-out, transform .2s;
   }

   &:hover{
      color: ${({theme}) => theme.colors.white};
   }

   &:hover span{
      border: 75px solid ${({theme}) => theme.colors.black};
   }
`