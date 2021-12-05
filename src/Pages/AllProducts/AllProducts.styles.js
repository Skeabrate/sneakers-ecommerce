import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   padding: 3vw;

   @media (max-width: 550px){
      margin-top: 60px;
   }
`

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;
   margin: 0 0 40px 0;

   @media (max-width: 1000px){
      margin: 30px 0;
   }

   @media (max-width: 750px){
      margin: 20px 0;
   }
`

export const StyledTitleWrapper = styled.div`
   transform: translateY(100%);
   position: relative;
   

   h1{
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-style: italic;
   }

   span{
      position: absolute;
      width: 40px;
      left: 280px;
      bottom: 9px;
      z-index: 9999;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: normal;
      font-style: italic;
      opacity: 0;
   }

   @media (max-width: 1000px){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }

      span{
         left: 240px;
         bottom: 8px;
      }
   }

   @media (max-width: 750px){
      h1{
         font-size: ${({theme}) => theme.fontSize.l};
      }

      span{
         left: 180px;
         bottom: 5px;
         font-size: ${({theme}) => theme.fontSize.micro};
      }
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

   @media (max-width: 1000px){
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
   }

   @media (max-width: 550px){
      grid-template-columns: 1fr 1fr;
   }
`

export const StyledItem = styled.div`
   display: block;
   margin-bottom: 60px;
   cursor: pointer;

   @media (max-width: 600px){
      margin-bottom: 40px;
   }
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

   div{
      font-size: ${({theme}) => theme.fontSize.xs};
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

   @media (max-width: 1000px){
      div{
         padding: 4px 10px;
         width: 45px;
         font-size: ${({theme}) => theme.fontSize.s};
      }
   }
`

export const StyledItemTitle = styled.h3`
   font-size: ${({theme}) => theme.fontSize.xxs};

   @media (max-width: 1000px){
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

export const StyledCategory = styled.h4`
   color: ${({theme}) => theme.colors.lightGrey};
   font-size: ${({theme}) => theme.fontSize.xs};
   font-style: italic;

   @media (max-width: 1000px){
      font-size: ${({theme}) => theme.fontSize.s};
   }
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

   @media (max-width: 1000px){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }
   }
`

export const StyledLoading = styled.div`
   height: calc(100vh - 356px - 6vw);
   display: flex;
   justify-content: center;
   align-items: center;
`