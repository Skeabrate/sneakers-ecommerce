import styled from "styled-components"

export const StyledShopp = styled.div`
   position: ${({isStickyBegin, isStickyEnd}) => {
      if(!isStickyBegin) {
         if(isStickyEnd) return 'absolute'
         return 'fixed'
      }
      else return 'absolute'
   }};

   width: 27.5%;
   top: ${({isStickyEnd}) => isStickyEnd ? 'unset' : '0'};
   bottom: ${({isStickyEnd}) => isStickyEnd ? '0' : 'unset'};
   right: 0;
   z-index: 1;
   height: 100vh;
   padding: 2.5vw;
   color: ${({theme}) => theme.colors.white};
   overflow: auto;
   background-color: ${({theme}) => theme.colors.black};

   ::-webkit-scrollbar{
      display: none;
   }

   @media (max-width: 1000px){
      position: relative;
      width: 100%;
      overflow: unset;
      height: fit-content;
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

   @media (max-width:1000px){
      height: unset;
      margin-bottom: 20px;
   }
`

export const StyledPrice = styled.p`
   font-weight: bold;
   margin: 0 0 40px 0;
   font-size: ${({theme}) => theme.fontSize.xxs};

   @media (max-width:1000px){
      margin-bottom: 20px;
   }

`

export const StyledSizesWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
   gap: 5px;
   margin: 15px 0 6vh;

   @media (max-width:1000px){
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

   &:hover{
      background-color: ${({theme}) => theme.colors.orange};
   }
`

export const StyledSizesAndInfo = styled.div`
   h3{
      font-size: ${({theme}) => theme.fontSize.xxs};
   }

   @media (max-width:1000px){
      display: grid;
      grid-template-columns: 1fr 1fr;
   }
`

export const StyledInfo = styled.div`
   margin: 8vh 0;

   @media (max-width:1000px){
      font-size: ${({theme}) => theme.fontSize.xs};
      margin: 31px 0 0 40px;
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

   @media (max-width:1000px){
      margin: 15px 0;
      margin-top: ${({first}) => first ? '0' : '15px'};

      p{
         margin-top: 0px;
      }
   }
`