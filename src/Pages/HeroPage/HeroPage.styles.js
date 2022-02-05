import styled, { css } from "styled-components"

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
   align-items: center;
   flex-direction: column;
   background: url(${({ hero }) => hero}) center/cover no-repeat;
   opacity: 0.6;
   transform: scale(1.1);
   position: relative;
`

export const StyledTitleWrapper = styled.div`
   transform: rotate(-25deg);
   font-size: 13vh;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
   text-shadow: 0.6vh 0.6vh black;
   line-height: 0.9;
   border-radius: 5vh;
   position: absolute;
   top: 25%;
   div{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 70%;
      background-color: black;
      z-index: -1;
      opacity: 0;
      border-radius: 5vh;
      &::after{
         content: '';
         position: absolute;
         top: 1%;
         left: 1%;
         width: 98%;
         height: 98%;
         border-radius: 5vh;
         box-shadow: 0px 0px 6vh 7vh rgba(0, 0, 0, 1);
      }
   }
   @media(max-width: ${({ theme }) => theme.screenSize.mobile}){
      font-size: 9vh;
      letter-spacing: -3px;
      div{
         &::after{
            box-shadow: 0px 0px 4vh 4vh rgba(0, 0, 0, 1);
         }
      }
   }
`

export const StyledTitle = styled.span`
   padding: 0 2vh;
   overflow: hidden;
   display: block;
   &:nth-child(2) {
      padding-bottom: 3vh;
   }
   span{
      display: block;
      transform: translateY(130%);
   }
`

const buttonStyle = css`
   width: 15vh;
   height: 15vh;
`

export const StyledButton = styled.button`
   ${buttonStyle};
   font-family: 'Shadows Into Light', cursive;
   display: block;
   font-weight: bold;
   border-radius: 100%;
   border: none;
   background-color: transparent;
   font-size: 3vh;
   color: ${({ theme }) => theme.colors.white};
   transform: scale(0);
   cursor: pointer;
   position: absolute;
   bottom: 14%;
   span{
      ${buttonStyle};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.black};
      z-index: -1;
      cursor: pointer;
      border-radius: 100%;
   }
   span::before{
      ${buttonStyle};
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 100%;
      box-shadow: 0 0 1vh 0 black; 
      transition: transform .2s ease-in-out;
   }
   &:hover span::before{
      transform: translate(-50%, -50%) scale(1.1);
   }
   @media(max-width: ${({ theme }) => theme.screenSize.mobile}){
      letter-spacing: -1px;
      bottom: 20%;
   }
`