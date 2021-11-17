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

   background: url(${({hero}) => hero}) center/cover no-repeat;
   opacity: 0.6;
   transform: scale(1.2);
`

export const StyledTitleWrapper = styled.div`
   position: relative;
   transform: rotate(-25deg);
   font-size: ${({theme}) => theme.fontSize.xxl};
   font-weight: bold;
   color: black;
   text-shadow: 3px 3px 3px ${({theme}) => theme.colors.white};
   line-height: 0.98;
   border-radius: 50px;
   box-shadow: 0px 0px 100px -40px rgba(0, 0, 0, 1);

   &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: -1;
      opacity: 0.2;
      border-radius: 50px;
      
   }
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
   background-color: ${({theme}) => theme.colors.black};
   font-size: ${({theme}) => theme.fontSize.l};
   color: ${({theme}) => theme.colors.white};
   transform: scale(0);
   cursor: pointer;
   
   transition: color .4s ease-in-out;

   span{
      position: absolute;
      width: 150px;
      height: 150px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({theme}) => theme.colors.black};
      border-radius: 100%;
      z-index: -1;
      cursor: pointer;
   }
`