import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    color: ${({theme}) => theme.colors.white};
    display: grid;
    grid-template-columns: auto 1fr;

    h2, h3{
        font-style: italic;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        grid-template-columns: 1fr;
    }
`

// Settings - left
export const StyledSettings = styled.section`
    padding: 3vw;
    padding-top: calc(3vw + 80px);
    height: fit-content;
    position: sticky;
    top: ${({position}) => `${(-1) * position}px`};
    min-height: 100vh;
    box-shadow: ${({theme}) => theme.boxShadow};
    border-right: 1px solid ${({theme}) => theme.colors.grey};

    transition: top .3s ease-in-out;

    *::selection{
        background-color: ${({theme}) => theme.colors.black};
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        position: static;
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
        border-right: none;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        padding-top: calc(3vw + 60px);
    }
`

export const StyledAccountDetails = styled.div`
    position: relative;

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`

export const StyledProfileInfo = styled.div`
    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        justify-items: center;
    }

    @media(max-width: 650px){
        display: unset;
    }
`

export const StyledSpan = styled.span`
    font-weight: normal;
    font-style: normal;
    margin-left: 10px;

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-left: 5px;
    }
`

export const StyledDetailTitle = styled.h3`
    margin-bottom: 25px;
    position: relative;
    width: fit-content;
    text-transform: uppercase;

    &::after{
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 100%;
        background-color: ${({ theme, isOrange }) => isOrange ? theme.colors.orange : theme.colors.white};
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`

export const StyledOption = styled.h4`
    margin-bottom: 5px;

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-bottom: 0px; 
    }
`

export const StyledForgotPassword = styled.div`
    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        padding-bottom: 80px;
    }
`

const buttonStyles = css`
    position: ${({ isSticky }) => isSticky ? 'absolute' : 'fixed'};
    bottom: 0;
    right: 0;
    width: 191px;
    height: 191px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    background: transparent;
    border: none;
    font-weight: bold;
    font-style: italic;
    z-index: 10;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    overflow: hidden;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 10px;
        bottom: 10px;
        border-radius: 100px;
        width: 100px;
        height: 100px;
        background-color: ${({ theme }) => theme.colors.orange};

        &::after{
            content: "";
            position: absolute;
            right: 50%;
            bottom: 50%;
            transform: translate(50%, 50%);
            border-radius: 100px;
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.colors.orange};
            z-index: -1;

            transition: transform .4s ease-in-out;
        }
    }

    &:hover span::after{
        transform: translate(50%, 50%) scale(5);
    }

    &:focus{
        outline: none;
    }

    @media(max-width: ${({ theme }) => theme.screenSize.medium}){
        position: absolute;
        bottom: -3vw;
        right: -3vw;    
    }

    @media (max-width: 750px){
        font-size: ${({ theme }) => theme.fontSize.xs};
    }

    @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
        font-size: ${({ theme }) => theme.fontSize.s};
        width: 123px;
        height: 123px;

        span{
            width: 60px;
            height: 60px;
        }
    }
`

export const StyledLogoutDesktop = styled.button`
    ${buttonStyles};

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        display: none;
    }
`

export const StyledLogoutMobile = styled.button`
    display: none;
    ${buttonStyles};

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        display: block;
    }
`