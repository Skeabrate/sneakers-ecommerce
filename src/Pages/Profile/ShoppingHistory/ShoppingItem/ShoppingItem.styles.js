import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledItem = styled.div`
   display: block;
   cursor: pointer;
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

   img{
        width: 100%;
        height: 100%;
        position: ${({isLoaded}) => isLoaded ? 'relative' : 'absolute'};
    }

    div{
        font-size: ${({theme}) => theme.fontSize.xs};
        padding: 8px 10px;
        position: absolute;
        display: flex;
        bottom: 0;
        left: 0;

        p{
            position: relative;
            width: max-content;
            padding: 3px 6px;
            margin-right: 3px;
            z-index: 1;

            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-color: black;
                opacity: 0.5;
            }
        }
    }

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
        div{
            font-size: ${({theme}) => theme.fontSize.s};
            bottom: -5px;
            left: -5px;
        }
   }
`

export const StyledItemTitle = styled.h2`
   font-size: ${({theme}) => theme.fontSize.xxs};

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`