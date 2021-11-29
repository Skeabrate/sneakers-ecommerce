import ReactModal from "react-modal";
import styled from "styled-components";
import { css } from 'styled-components';

export const ModalWrapper = styled(ReactModal)`
   position: fixed;
   z-index: 99999;
   display: flex;
   padding: 20px;
   top: 55%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 70%;
   padding: 2vw 30px;
   background-color: ${({theme}) => theme.colors.black};;
   border-radius: 20px;
   color: ${({theme}) => theme.colors.white};
`

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   position: relative;
   gap: 30px;
`

export const StyledImageSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`

export const StyledSlider = styled.div`
   position: ${({isLoaded}) => isLoaded ? 'relative': 'absolute'};
   border-left: ${({isLoaded, theme}) => isLoaded ? `5px solid ${theme.colors.orange}` : 'none'};
   border-radius: 0 20px 20px 0;  
   height: 31.5vw;
   overflow: hidden;

   img{
      width: 100%;
      height: 100%;
      transition: transform 0.2s ease-in-out;
   }

   &:hover img{
      transform: scale(1.1)
   }

   &:hover button{
      visibility: ${({isHidden}) => isHidden ? 'hidden' : 'visible'}
   }
`

export const StyledLeftImg = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   transform: translateX(100%);
`

export const StyledRightImg = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   transform: translateX(-100%);
`

export const StyledPlaceHolder = styled.div`
   height: 31.5vw;
   overflow: hidden;
   border-left: ${({isLoaded, theme}) => !isLoaded ? `5px solid ${theme.colors.orange}` : 'none'};
   border-radius: 0 20px 20px 0;  

   img{
      width: 100%;
      height: 100%;
   }
`

const btnSwitch = css`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   border: none;
   opacity: 0.3;
   visibility: hidden;
   transition: all .2s;

   &:hover{
      transform: translateY(-50%) scale(1.4);
      opacity: 0.5;
   }
`

export const StyledBtnPrev = styled.button`
   ${btnSwitch}
   left: 10px;
`

export const StyledBtnNext = styled.button`
   ${btnSwitch}
   right: 10px;
`

const btnOption = ({isActive, theme}) => css`
   position: absolute;
   width: 10px;
   height: 10px;
   border-radius: 100%;
   font-weight: bold;
   font-size: 12px;
   background-color: ${isActive ? theme.colors.orange : theme.colors.lightGrey};
   bottom: 10px;
   border: none;
`

export const StyledBtnSlider = styled.button`
   ${btnOption}
   left: ${({ isFirst, isSecond, isThird }) => {
      if(isFirst) return '54%'
      if(isSecond) return '50%'
      if(isThird) return '46%'
   }};
`

/* CONTENT */
export const StyledContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 0 2vw;
`

export const StyledButton = styled.button`
   border: none;
   background-color: transparent;
   position: absolute;
   top: 0;
   right: 0;
   transition: transform .2s;

   svg{
      fill: ${({theme}) => theme.colors.white};
      height: 18px;
      width: 18px;
   }

   &:hover{
      transform: scale(1.2);
   }
`

export const StyledTitle = styled.h3`
   font-size: 2.2rem;
`

export const StyledCategory = styled.p`
   color: ${({theme}) => theme.colors.orange};
   font-style: italic;
   font-weight: bold;
`

export const StyledDescription = styled.p`
   color: ${({theme}) => theme.colors.lightGrey};
   margin-top: 30px;
`

export const StyledInfo = styled.div`
   display: flex;
   align-items: center;
`

export const StyledPrice = styled.p`
   font-size: 2rem;
`

export const StyledStatus = styled.div`
   margin: 10px 0;

   span{
      background-color: #59b605;
      margin-left: 10px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 8px;
      color: ${({theme}) => theme.colors.black};
   }
`

export const StyledSize = styled.div`
   display: flex;
   align-items: center;
   margin-left: 10vw;

   select{
      margin-left: 10px;
      font-size: 2rem;
      background-color:transparent;
      border: 1px solid ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.white};
      padding: 3px 10px;

      &:focus{
         outline: none;
         border: 1px solid ${({theme}) => theme.colors.orange}
      }
   }

   option{
      background-color: black;
      font-size: 1rem;
   }
`

export const StyledCart = styled.div`
   display: flex;
   align-items: center;
   margin-top: 20px;

   p{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 40px;
   }

   button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none; 
      gap: 10px;  
   }
`

export const StyledPlusMinusBtn = styled.button`
   background: transparent;
   width: 60px;
   height: 50px;
`

export const StyledAddBtn = styled.button`
   background-color: ${({theme}) => theme.colors.orange};
   color: ${({theme}) => theme.colors.white};
   padding: 15px 30px;
   border-radius: 8px;
   font-weight: bold;
   position: relative;
   transform-origin: left;

   transition: all .3s ease-in-out;

   svg{
      opacity: 0;
      right: 15px;
      position: absolute;

      transition: opacity;
      transition-delay: .2s;
   }

   path{
      fill: ${({theme}) => theme.colors.orange};
   }

   &:hover{
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.orange};
      padding: 15px 50px 15px 30px ;
   }

   &:hover svg{
      opacity: 1;
   }
`
