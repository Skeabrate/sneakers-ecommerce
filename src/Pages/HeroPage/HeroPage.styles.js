import styled from "styled-components"

export const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   font-family: 'Shadows Into Light', cursive;
`

export const StyledHeroImage = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   gap: 7rem;
   background: url(${({hero}) => hero}) center/cover no-repeat;
   opacity: 0.6;
   transform: scale(1.2);
`

export const StyledTitleWrapper = styled.div`
   position: relative;
   transform: rotate(-25deg);
   font-size: ${({theme}) => theme.fontSize.xxl};
   font-weight: bold;
   color: ${({theme}) => theme.colors.white};
   text-shadow: 5px 5px 5px black;
   line-height: 0.98;
   border-radius: 100px;

   div{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: -1;
      opacity: 0;
      border-radius: 100px; 
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
   font-family: 'Shadows Into Light', cursive;
   display: block;
   font-weight: bold;
   position: relative;
   width: 140px;
   height: 140px;
   border-radius: 100%;
   border: none;
   background-color: transparent;
   font-size: ${({theme}) => theme.fontSize.l};
   color: ${({theme}) => theme.colors.white};
   transform: scale(0);
   cursor: pointer;

   span{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({theme}) => theme.colors.black};
      z-index: -1;
      cursor: pointer;
      border-radius: 100%;
   }

   span::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({theme}) => theme.colors.black};
      border-radius: 100%;
      box-shadow: 0px 0px 50px -20px black; 

      transition: transform .2s ease-in-out;
   }

   &:hover span::before{
      transform: translate(-50%, -50%) scale(1.1);
   }
`