import styled, {keyframes, css} from "styled-components"

export const StyledShopp = styled.div`
   display: ${({isMobile, isDesktop}) => {
      if(isMobile) return 'none'
      if(isDesktop) return 'block'
   }};
   position: sticky;
   top: ${({position}) => `${(-1) * position}px`};
   z-index: 1;
   height: fit-content;
   min-height: 100vh;
   color: ${({theme}) => theme.colors.white};
   background-color: ${({theme}) => theme.colors.black};

   transition: top .3s ease-in-out;

   ::-webkit-scrollbar{
      display: none;
   }

   @media (max-width:  ${({theme}) => theme.screenSize.medium}){
      display: ${({isMobile, isDesktop}) => {
      if(isMobile) return 'block'
      if(isDesktop) return 'none'
   }};
      position: relative;
      width: 100%;
      overflow: unset;
      height: fit-content;
      min-height: unset;
   }
`

export const StyledCategory = styled.div`
   display:flex;
   justify-content: space-between;
   color: ${({theme}) => theme.colors.lightGrey};
   font-size: ${({theme}) => theme.fontSize.s};
   font-style: italic;
   padding-bottom: 10px;

   div{
      text-decoration: underline;
      font-style: normal;
      display: flex;
   }

   span{
      display: flex;
      justify-content:center;
      align-items: center;
      margin-right: 5px;
   }

   svg{
      width: 15px; 
      height: 15px;
      fill: ${({theme}) => theme.colors.white};
   }
`

export const StyledTitle = styled.h1`
   font-size: ${({theme}) => theme.fontSize.l};
   font-style: italic;
   height: 64px;
   margin-bottom: 40px;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      height: unset;
      margin-bottom: 20px;
   }
`

export const StyledPrice = styled.p`
   font-weight: bold;
   margin: 0 0 40px 0;
   font-size: ${({theme}) => theme.fontSize.xxs};

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin-bottom: 20px;
   }

`

export const StyledSizesWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
   gap: 5px;
   margin: 15px 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin-bottom: 20px;
   }
`

export const StyledSize = styled.div`
   border: 1px solid ${({theme}) => theme.colors.grey};
   background-color: ${({isSize, theme}) => isSize ? theme.colors.orange : 'transparent'};

   button{
      padding: 13px;
      background-color: transparent;
      color: ${({theme}) => theme.colors.white};
      font-size: ${({theme}) => theme.fontSize.s};
      transition: background-color .1s ease-in-out;
      font-weight: ${({isSize}) => isSize ? 'bold' : 'normal'};
      border: none;
      width: 100%;
   }

   @media (min-width: ${({theme}) => theme.screenSize.mobile}){
      &:hover{
         background-color: ${({theme}) => theme.colors.orange};
      }
   }
`

export const StyledError = styled.div`
   color: ${({theme}) => theme.colors.red};
   font-weight: bold;
   font-size: ${({theme}) => theme.fontSize.xxs};
`

const showError = keyframes`
   0%{
      transform: translateX(-6px);
   }
   33%{
      transform: translateX(6px);
   }
   66%{
      transform: translateX(-2px);
   }
   100%{
      transform: translateX(2px);
   }
`

const trigerAnimation = css`
   animation: 0.25s linear forwards alternate ${showError};
`

export const StyledSizeAndError = styled.div`
   ${({isClicked}) => isClicked ? trigerAnimation : null}
`

export const StyledSizesAndInfo = styled.div`
   h3{
      font-size: ${({theme}) => theme.fontSize.xxs};
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      display: grid;
      grid-template-columns: 1fr 1fr;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      grid-template-columns: 1fr;
   }
`

export const StyledInfo = styled.div`
   margin: 6vh 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      font-size: ${({theme}) => theme.fontSize.xs};
      margin: 31px 0 0 2.5vw;
   }
`

export const StyledInfoItem = styled.div`
   display: grid;
   grid-template-columns: 40px 1fr;
   margin: 30px 0;

   p{
      color: green;
      font-weight: bold;
      margin-top: 10px;
   }

   svg{
      fill: ${({theme}) => theme.colors.white};
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin: 15px 0;
      margin-top: ${({first}) => first ? '0' : '15px'};

      p{
         margin-top: 0px;
      }
   }
`

export const TitlePlaceholder = styled.div`
   height: 188px;
   width: 100%;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      height: 118px;
   }
`