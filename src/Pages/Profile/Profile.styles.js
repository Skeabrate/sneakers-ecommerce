import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    margin-top: 80px;
    color: ${({theme}) => theme.colors.white};
    display: grid;
    grid-template-columns: auto 1fr;

    h2, h3{
        font-style: italic;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        grid-template-columns: 1fr;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;
    }
`

// Settings - left
export const StyledSettings = styled.section`
    background-color: ${({theme}) => theme.colors.orange};
    padding: 3vw;
    height: fit-content;
    position: sticky;
    top: ${({position}) => `${(-1) * position}px`};
    min-height: 100vh;

    transition: top .3s ease-in-out;

    *::selection{
        background-color: ${({theme}) => theme.colors.black};
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        position: static;
    }
`

export const StyledAccountDetails = styled.div`
    position: relative;
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
`

export const StyledOption = styled.h4`
    margin-bottom: 5px;

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-bottom: 0px; 
    }
`

export const StyledOrnament = styled.div`
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 0;
    height: 0;
    z-index: -1;
    border-top: 60px solid transparent;
    border-bottom: none;
    border-left: 100px solid ${({ theme, isOrange }) => isOrange ? theme.colors.orange : theme.colors.black};
`

export const StyledForgotPassword = styled.div`
    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        padding-bottom: 80px;
    }
`

export const StyledLogoutDesktop = styled.button`
    position: ${({isSticky}) => isSticky ? 'absolute' : 'fixed'};
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

    &:focus span{
        border: 2px solid white;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        display: none;
    }
`

export const StyledLogoutMobile = styled.button`
    display: none;

    @media (max-width: ${({ theme }) => theme.screenSize.medium}){
        display: block;
        position: absolute;
        bottom: -3vw;
        right: -3vw;
        width: 191px;
        height: 191px;
        color: ${({ theme }) => theme.colors.orange};
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
            background-color: ${({ theme }) => theme.colors.white};

            &::after{
                content: "";
                position: absolute;
                right: 50%;
                bottom: 50%;
                transform: translate(50%, 50%);
                border-radius: 100px;
                width: 100%;
                height: 100%;
                background-color: ${({ theme }) => theme.colors.white};
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

        &:focus span{
            border: 2px solid white;
        }
    }

    @media (max-width: 750px){
        font-size: ${({ theme}) => theme.fontSize.xs};
    }

    @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
        font-size: ${({ theme}) => theme.fontSize.s};
        width: 123px;
        height: 123px;

        span{
            width: 60px;
            height: 60px;
            background-color: ${({ theme }) => theme.colors.white};

            &::after{
                content: "";
                position: absolute;
                right: 50%;
                bottom: 50%;
                transform: translate(50%, 50%);
                border-radius: 100px;
                width: 100%;
                height: 100%;
                background-color: ${({ theme }) => theme.colors.white};
                z-index: -1;

                transition: transform .4s ease-in-out;
            }
        }
    }
`