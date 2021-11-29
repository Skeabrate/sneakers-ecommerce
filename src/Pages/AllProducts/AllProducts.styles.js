import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 100px;
   padding: 3vw;
`

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 40px 0;
   overflow: hidden;
`

export const StyledTitleWrapper = styled.div`
   transform: translateY(100%);
   position: relative;

   h1{
      font-size: ${({theme}) => theme.fontSize.xl};
      font-style: italic;
   }

   span{
      position: absolute;
      width: fit-content;
      left: 320px;
      bottom: 10px;
      z-index: 9999;
      font-size: 12px;
      font-weight: normal;
      font-style: italic;
   }
`

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${({theme}) => theme.colors.white};
`

export const StyledContent = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   opacity: 0;

   @media (max-width: 1400px){
      grid-template-columns: repeat(3, 1fr);
   }

   @media (max-width: 1100px){
      grid-template-columns: 1fr 1fr;
   }

   @media (max-width: 650px){
      grid-template-columns: 1fr;
   }
`

export const StyledItem = styled.div`
   display: block;
   margin-bottom: 60px;
   cursor: pointer;
`

export const StyledPlaceholder = styled.div`
   display: flex;
   overflow: hidden;
   border-left: 5px solid ${({theme}) => theme.colors.orange};

   img{
      width: 100%;
      height: 100%;
   }
`

export const StyledImage = styled.div`
   display: flex;
   overflow: hidden;
   border-left: 5px solid ${({theme}) => theme.colors.orange};
   margin-bottom: 15px;
   position: relative;
   
   transition: opacity .4s;

   img{
      width: 100%;
      height: 100%;
      transition: transform 0.2s ease-in-out;
      position: ${({isLoaded}) => isLoaded ? 'relative' : 'absolute'};
   }

   &:hover img{
      transform: scale(1.1);
   }

   button{
      position: absolute;
      top: 15px;
      width: 80px;
      height: 80px;
      right: 10px;
      border: none; 
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 1rem;
      font-size: ${({theme}) => theme.fontSize.s};
      background-color: ${({theme}) => theme.colors.black};
      color: ${({theme}) => theme.colors.white};
      opacity: 0;

      transition: transform .2s ease-in-out, opacity .1s ease-in-out;

      @media(max-width: 1100px){
         display: none;
      }
   }

   div{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 8px 10px;
      position: absolute;
      background-color: ${({theme}) => theme.colors.black};
      bottom: 0;
      left: 10px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: transform .3s ease-in-out;
   }

   &:hover div{
      transform: translateY(-10px);
   }

   &:hover button{
      opacity: 1;
      transform: translateY(-5px);
   }

   button:hover{
      transform: translateY(-5px) scale(1.1);
   }
`

export const StyledItemTitle = styled.h3`
   font-size: ${({theme}) => theme.fontSize.l};
`

export const StyledCategory = styled.h4`
   color: ${({theme}) => theme.colors.lightGrey};
   font-style: italic;
`

export const StyledError = styled.div`
   height: 30vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;

   h1{
      font-style: italic;
      font-size: ${({theme}) => theme.fontSize.error};
      color: ${({theme}) => theme.colors.lightGrey};
   }
`

export const StyledLoading = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   height: calc(100vh - 356px - 6vw);
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`