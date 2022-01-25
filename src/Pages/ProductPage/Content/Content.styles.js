import { Link } from "react-scroll"
import styled, { css } from "styled-components"

const center = css`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledContentWrapper = styled.div`
   background-color: white;
   max-width: 100%;
`

export const StyledContent = styled.div`
   margin: auto;
   max-width: 1200px;
   padding-bottom: 250px;
`

/* NAVIGATION */
export const StyledList = styled.ul`
   ${center};
   list-style: none;
   height: 60px;
   background-color: white;
   border-top: 1px solid ${({theme}) => theme.colors.lightGrey};
   border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
   position: ${({isSticky}) => isSticky ? 'relative' : 'fixed'};
   width: ${({isSticky}) => isSticky ? 'unset' : '72.5%'};
   top: 0;
   left: 0;
   z-index: 1;
   overflow: hidden;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      width: ${({isSticky}) => isSticky ? 'unset' : '100%'};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      position: relative;
   }
`

export const StyledListItem = styled.li`
   ${center};
   height: 100%;
   position: relative;
   margin: 0 5px;
   cursor: pointer;

   span{
      ${center};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin: 0 2px;
   }
`

export const StyledLink = styled(Link)`
   ${center};
   letter-spacing: 1px;
   font-weight: ${({cheatActive}) => cheatActive ? 'bold' : 'normal'};
   padding: 0 20px;
   height: 100%;
   font-size: ${({theme}) => theme.fontSize.s};
   border-top: 3px solid transparent;
   border-bottom: 3px solid ${({cheatActive, theme}) => cheatActive ? theme.colors.orange : 'transparent'};
   transition: border-bottom .05s ease-in-out;
   overflow: hidden;

   &:hover{
      border-bottom: 3px solid grey;
   }

   &.active{
      font-weight: bold;
      border-bottom: 3px solid ${({theme}) => theme.colors.orange};
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      margin: 0 2px;
      font-size: ${({theme}) => theme.fontSize.micro};
      padding: 0 10px;
      letter-spacing: 0;
   }

   @media (max-width: 390px){
      padding: 0 3px;
   }
`

export const StickyPointer = styled.div`
   position: absolute;
   top: -831px;
   left: 0;
   height: 770px;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      height: 1370px;
      top: -1431px;
      z-index: 9999;
   }

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      display: none;
   }
`

export const StickyPlaceholder = styled.div`
   height: 60px;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      display: none;
   }
`