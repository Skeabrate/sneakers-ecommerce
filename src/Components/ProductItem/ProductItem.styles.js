import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledItem = styled.div`
   display: block;
   margin-bottom: 60px;
   cursor: pointer;

   @media (max-width: 600px){
      margin-bottom: 40px;
   }
`

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${({theme}) => theme.colors.white};
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