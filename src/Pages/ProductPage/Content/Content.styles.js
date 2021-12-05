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

export const StyledContent = styled.section`
   margin: auto;
   max-width: 1200px;
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

   @media (max-width: 1000px){
      width: ${({isSticky}) => isSticky ? 'unset' : '100%'};
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
      letter-spacing: 1px;
      font-weight: normal;
      padding: 0 20px;
      height: 100%;
      font-size: ${({theme}) => theme.fontSize.xxs};
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
   border-bottom: 3px solid ${({cheatActive}) => cheatActive ? 'black' : 'transparent'};
   transition: border-bottom .05s ease-in-out;

   &:hover{
      border-bottom: 3px solid grey;
   }

   &.active{
      font-weight: bold;
      border-bottom: 3px solid black;
   }
`

export const StickyPointer = styled.div`
   position: absolute;
   top: -831px;
   left: 0;
   height: 770px;

   @media (max-width: 1000px){
      height: 1370px;
      top: -1431px;
      z-index: 9999;
   }
`