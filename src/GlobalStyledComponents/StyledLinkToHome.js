import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${({ isHeader }) => isHeader ? '-20px' : '20px'}; 
    left: ${({ isHeader }) => isHeader ? '5px' : '30px'};
    z-index: 100;
    color: ${({ isWhite, theme }) => isWhite ? theme.colors.white : 'black'};
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.xs};
    letter-spacing: 2px;

    svg{
        fill: ${({ theme }) => theme.colors.orange};
        transform: rotateY(180deg);
        width: 15px;
        margin-right: 10px;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        font-size: ${({theme}) => theme.fontSize.s};

        svg{
            width: 12px;
            margin-right: 5px;
        }
    }

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        top: ${({ isHeader }) => isHeader ? '' : '70px'};
        left: ${({ isHeader }) => isHeader ? '' : '15px'};
        letter-spacing: 1px;   
    }
`

export const StyledLinkToHome = ({ label, path, title, isHeader, isWhite }) => {
    return (
        <StyledLink to={`/${path}`} title={title} isHeader={isHeader} isWhite={isWhite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
            {label}
        </StyledLink>
    )
}