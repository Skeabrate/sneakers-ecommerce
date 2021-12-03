import { Link } from "react-scroll"
import styled, { css } from "styled-components"

const center = css`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledContent = styled.div`
   background-color: ${({theme}) => theme.colors.white};
   max-width: 100%;
`

/* NAVIGATION */
export const StyledList = styled.ul`
   ${center};
   list-style: none;
   height: 70px;
   border-top: 1px solid ${({theme}) => theme.colors.lightGrey};
   border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
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
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

export const StyledLink = styled(Link)`
   ${center};
   letter-spacing: 1px;
   font-weight: normal;
   padding: 0 20px;
   height: 100%;
   font-size: ${({theme}) => theme.fontSize.xs};
   border-top: 3px solid transparent;
   border-bottom: 3px solid transparent;
   transition: border-bottom .05s ease-in-out;

   &:hover{
      border-bottom: 3px solid grey;
   }

   &.active{
      font-weight: bold;
      border-bottom: 3px solid black;
   }
`