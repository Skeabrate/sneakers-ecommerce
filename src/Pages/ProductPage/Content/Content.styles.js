import styled from "styled-components"
import { css } from "styled-components"

export const StyledContent = styled.div`
   background-color: ${({theme}) => theme.colors.grey};
   height: 350vh;
`

export const StyledSlider = styled.div`
   background-color: #EBEEEF;
   height: 85vh;
   position: relative;

   &::after{
      content: 'RECYCLED MATERIALS';
      font-weight: bold;
      position: absolute;
      background-color: white;
      color: ${({theme}) => theme.colors.lightGrey};
      padding: 5px 8px;
      font-size: 14px;
      right: -85px;
      top: 140px;
      transform: rotate(-90deg);
      letter-spacing: 3px;
      z-index: 0;
   }
`

export const StyledImage = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   width: 40vw;
   height: 40vw;
   display: flex;
   transform: translate(-50%, -50%);
   overflow: hidden;

   img{
      width: 100%;
      height: 100%;
      transform: ${({current}) => current ? `translateX(-${current * 100}%)` : 'translateX(0)'};
      transition: transform .3s ease-in-out;
   }
`

const arrowBtns = css`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   padding: 10px 20px;
   border: 2px solid ${({theme}) => theme.colors.grey};
   z-index: 1;
`

export const StyledBtnPrev = styled.button`
   ${arrowBtns}
   left: 30px;
`

export const StyledBtnNext = styled.button`
   ${arrowBtns}
   right: 30px;
`

export const StyledLegend = styled.div`
   opacity: 0;
   position: absolute;
   bottom: 40px;
   left: 50%;
   transform: translateX(-50%);
   display: grid;
   align-content: center;
   grid-template-columns: repeat(${({imagesLength}) => imagesLength}, 1fr);
`

export const StyledButton = styled.button`
   box-sizing: content-box;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 40px;
   width: 40px;
   border: none;
   border-bottom: ${({isCurrent}) => isCurrent ? '3px solid black' : '1px solid black'};;
   background: transparent;
   position: relative;
   margin: 0 10px;
   overflow: hidden;

   img{
      transform: ${({isHovered}) => isHovered ? 'translateY(0)' : 'translateY(100%)'} ;
      width: 38px;
      height: 38px;
      transition: transform .15s ease-in-out;
      border: 1px solid black;
      border-bottom: none;
   }
`