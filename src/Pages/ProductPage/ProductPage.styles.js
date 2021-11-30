import styled from 'styled-components'

export const StyledError = styled.div`
   height: calc(100vh - 100px);
   display: grid;
   align-content: center;
   text-align: center;

   h1, h2{
      font-style: italic;
      color: ${({theme}) => theme.colors.lightGrey};
   }
   
   h1{
      font-size: ${({theme}) => theme.fontSize.error};
      color: ${({theme}) => theme.colors.grey};
   }
`

/* STYLED CONTENT */

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.4fr 0.6fr;
   position: relative;
   margin-top: 0;
`

export const StyledContent = styled.div`
   background-color: white;
   height: 300vh;
   width: 100%;
`

export const StyledSlider = styled.div`
   width: 70%;

   div{
      position: relative;

      &:nth-child(3){
         transform: translateX(100%);
      }

      img{
         display: none;
         position: absolute;
      }
   }
`

export const StyledShopp = styled.div`
   position: ${({isStickyBegin, isStickyEnd}) => {
      if(!isStickyBegin) {
         if(isStickyEnd) return 'absolute'
         return 'fixed'
      }
   }};

   width: ${({isStickyBegin}) => {
      if(!isStickyBegin) return '30%'
   }};

   top: ${({isStickyBegin, isStickyEnd}) => {
      if(!isStickyBegin) {
         if(isStickyEnd) return 'unset'
         return '0'
      }
      
   }};

   bottom: ${({isStickyEnd}) => isStickyEnd ? '0' : 'unset'};

   right: 0;
   height: 100vh;
   padding: 3vw 3vw;
   color: ${({theme}) => theme.colors.white};
   overflow: auto;

   ::-webkit-scrollbar{
      display: none;
   }
`

export const StyledCategory = styled.div`
   display:flex;
   justify-content: space-between;
   color: ${({theme}) => theme.colors.lightGrey};
   font-style: italic;
   padding-bottom: 15px;

   div{
      text-decoration: underline;
      font-style: normal;
      display: flex;
   }

   span{
      display: flex;
      justify-content:center;
      align-items: center;
      margin-right: 10px;
   }

   svg{
      width: 15px; 
      height: 15px;
      fill: ${({theme}) => theme.colors.white};
   }
`

export const StyledTitle = styled.h1`
   font-size: 36px;
   font-style: italic;
`

export const StyledPrice = styled.p`
   font-size: 1.5rem;
   font-weight: bold;
   padding: 3.5vh 0;
`

export const StyledSizesWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
   gap: 5px;
   margin: 15px 0 6vh;
`

export const StyledSize = styled.div`
   border: 1px solid ${({theme}) => theme.colors.grey};
   background-color: ${({isSize, theme}) => isSize ? theme.colors.orange : 'transparent'};

   button{
      padding: 18px;
      background-color: transparent;
      color: ${({theme}) => theme.colors.white};
      font-size: 1rem;
      transition: background-color .1s ease-in-out;
      font-weight: ${({isSize}) => isSize ? 'bold' : 'normal'};
      border: none;
      width: 100%;
   }

   &:hover{
      background-color: ${({theme}) => theme.colors.orange};
   }
`

export const StyledInfo = styled.div`
   margin-top: 6vh;
`

export const StyledInfoItem = styled.div`
   display: grid;
   grid-template-columns: 40px 1fr;
   margin: 30px 0;

   p{
      color: green;
      font-weight: bold;
      margin-top: 15px;
   }

   svg{
      fill: ${({theme}) => theme.colors.white};
   }
`