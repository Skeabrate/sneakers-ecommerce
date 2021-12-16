import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.section`
   color: ${({theme}) => theme.colors.white};
   margin-top: 80px;
   min-height: calc(100vh - 319px);
   padding: 3vw;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin-top: 60px;
      min-height: calc(100vh - 281px);
   }
`

export const StyledTitle = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.xxl};
   font-display: optional;
   font-style: italic;
   margin: 0 0 40px 0;

   span{
      font-size: ${({theme}) => theme.fontSize.s};
      padding: 10px 20px;
      font-weight: normal;
      opacity: 0;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.medium}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 30px 0 40px;

      span{
         padding: 8px 20px;
      }
   }

   @media (max-width: 750px) {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 20px 0 40px;

      span{
         font-size: ${({theme}) => theme.fontSize.micro};
         padding: 5px 15px;
      }
   }
`

export const StyledError = styled.h2`
   color: ${({theme}) => theme.colors.lightGrey};
   font-weight: normal;
   font-style: italic;
   grid-column: 1/3;
   margin-bottom: 40px;

   @media (max-width: 750px){
      font-size: ${({theme}) => theme.fontSize.xxs};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

/* Login / Register part */
export const StyledLoginWrapper = styled.aside`
   grid-column: ${({length}) => {
      if(!length) return '1/3'
      else if(length === 1) return '2/4'
      else if(length > 1) return '3/5'
   }};
   grid-row: ${({length}) => length ? '1' : '2'};
   background-color: ${({theme}) => theme.colors.orange};
   display: flex;
   justify-content: center;
   flex-direction: column;
   padding: 2vw;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      grid-column: ${({length}) => length ? '2/4' : '1/3'};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      grid-column: 1/3;
      margin-bottom: 40px;
   }
`

export const StyledLoginTitle = styled.h1`
   font-size: ${({ theme}) => theme.fontSize.xl};
   font-style: italic;

   @media (max-width: 1300px){
      font-size: ${({ theme}) => theme.fontSize.l};
   }
`

export const StyledLoginContent = styled.div`
   div{
      padding: 3vw 0 0;
   }

   p{
      padding:0 0 1vw;
   }

   @media (max-width: 750px){
      font-size: ${({ theme}) => theme.fontSize.xs};

      div{
         padding: 2vw 0 0;
      }
   }
`

export const StyledLink = styled(Link)`
   display: flex;
   position: relative;
   width: fit-content;
   text-decoration: none;
   color: ${({theme}) => theme.colors.orange};
   background-color: ${({theme}) => theme.colors.white};
   padding: 20px 40px;
   font-weight: bold;
   margin-top: 5px;

   &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 1px solid ${({theme}) => theme.colors.white};
      transform: translate(5px, -5px);

      transition: transform .2s ease-in-out;
   }

   &:hover::after{
      transform: translate(-5px, 5px);
   }
   

   @media (max-width: 750px){
      font-size: ${({ theme}) => theme.fontSize.xs};
      padding: 15px 30px;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
      font-size: ${({ theme}) => theme.fontSize.s};
      padding: 10px 20px;
      margin-top: 10px;
   }
`