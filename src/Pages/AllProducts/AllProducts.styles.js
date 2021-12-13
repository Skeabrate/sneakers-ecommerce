import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   padding: 3vw;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 60px;
   }
`

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;
   
   margin: 0 0 40px 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      margin: 30px 0;
   }

   @media (max-width: 750px){
      margin: 20px 0;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      flex-direction: column;
      align-items: start;
   }
`

export const StyledTitleWrapper = styled.div`
   transform: translateY(100%);
   display: flex;
   align-items: flex-end;
   justify-content: center;
   font-style: italic;

   h1{
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-display: optional
   }

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      opacity: 0;
      padding: 10px 20px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      h1{
         font-size: ${({theme}) => theme.fontSize.xl};
      }

      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px){
      h1{
         font-size: ${({theme}) => theme.fontSize.l};
      }

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
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

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
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

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      div{
         padding: 4px 10px;
         width: 45px;
         font-size: ${({theme}) => theme.fontSize.s};
      }
   }

   @media (min-width: ${({theme}) => theme.screenSize.mobile}) {
      &:hover div{
         transform: translateY(-10px);
      } 

      &:hover img{
         transform: scale(1.1);
      }
   }
`

export const StyledItemTitle = styled.h2`
   font-size: ${({theme}) => theme.fontSize.xxs};

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

export const StyledCategory = styled.h3`
   color: ${({theme}) => theme.colors.lightGrey};
   font-size: ${({theme}) => theme.fontSize.xs};
   font-style: italic;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
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

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
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