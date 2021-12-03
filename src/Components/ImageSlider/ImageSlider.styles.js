import styled from "styled-components"
import { css } from "styled-components"

export const StyledSlider = styled.div`
   background-color: #EBEEEF;
   height: ${({isQuickView}) => isQuickView ? '70vh' : '80vh'};
   position: relative;
   overflow: hidden;

   &::after{
      display: ${({isQuickView}) => isQuickView ? 'none' : 'block'};
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
   width: ${({isQuickView}) => isQuickView ? '550px' : '700px'};
   height: ${({isQuickView}) => isQuickView ? '550px' : '700px'};
   display: flex;
   gap: ${({isQuickView}) => isQuickView ? '550px' : '700px'};
   transform: translate(-50%, -50%);

   img{
      height: ${({isQuickView}) => isQuickView ? '550px' : '700px'};
      transform: ${({current}) => current ? `translateX(-${current * 200}%)` : 'translateX(0)'};
      transition: transform .6s cubic-bezier(0.3,0,0,1);
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
   border: 2px solid ${({ theme }) => theme.colors.grey};
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
   grid-template-columns: repeat(${({ imagesLength }) => imagesLength}, 1fr);
`

export const StyledButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: ${({ isCurrent }) => isCurrent ? '42px' : '40px'};
   width: 40px;
   border: none;
   border-bottom: ${({ isCurrent, theme }) => isCurrent ? `3px solid ${theme.colors.orange}` : '1px solid black'};
   background: transparent;
   position: relative;
   margin: 0 10px;
   overflow: hidden;

   img{
      position: absolute;
      transform: ${({ isHovered }) => isHovered ? 'translateY(0)' : 'translateY(100%)'} ;
      bottom: 0;
      width: 100%;
      height: 100%;
      transition: transform .15s ease-in-out;
      border: 1px solid black;
      border-bottom: none;
   }
`