import styled from "styled-components"

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
   text-shadow: 5px 5px 5px ${({theme}) => theme.colors.black};
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
   display: block;
   font-weight: bold;
   position: relative;
   width: 140px;
   height: 140px;
   border-radius: 100%;
   border: none;
   background-color: ${({theme}) => theme.colors.black};
   font-size: ${({theme}) => theme.fontSize.l};
   color: ${({theme}) => theme.colors.white};
   transform: scale(0);
   cursor: pointer;
   box-shadow: 0px 0px 80px -10px rgba(0, 0, 0, 1);
   
   transition: color .4s ease-in-out;

   span{
      position: absolute;
      width: 140px;
      height: 140px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({theme}) => theme.colors.black};
      z-index: -1;
      cursor: pointer;
      border-radius: 100%;
      box-shadow: inset 0px 0px 10px 0px black;

      transition: box-shadow .2s ease-in-out;
   }

   span::before{
      content: "";
      position: absolute;
      width: 140px;
      height: 140px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
      border-radius: 100%;
      box-shadow: 0px 0px 0px 0px black; 

      transition: box-shadow .2s ease-in-out;
   }

   &:hover span{
      box-shadow: unset;
   }

   &:hover span::before{
      box-shadow: 0px 0px 10px 0px black;
   }
`