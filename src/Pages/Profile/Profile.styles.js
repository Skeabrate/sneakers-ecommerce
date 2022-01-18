import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    margin-top: 80px;
    color: ${({theme}) => theme.colors.white};
    display: flex;

    h2, h3{
        font-style: italic;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        flex-direction: column;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;
    }
`

// Settings - left
export const StyledSettings = styled.section`
    background-color: ${({theme}) => theme.colors.orange};
    padding: 3vw;
`

export const StyledAccountDetails = styled.div`
    position: static;

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        position: relative;
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
    font-style: italic;

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

export const StyledLogout = styled.button`
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
        margin-top: 40px;
        position: relative;
        clip-path: unset;
        color: ${({theme}) => theme.colors.white};
        font-style: normal;
        height: 60px;
        width: 150px;
        border: 2px solid ${({theme}) => theme.colors.white};

        transition: color .4s ease-in-out;

        span{
            width: 100%;
            height: 100%;
            border-radius: 0;
            bottom: 0;
            right: 0;
            background: transparent;
            z-index: 1;

            &::after{
                width: 200px;
                height: 200px;
                background-color: ${({theme}) => theme.colors.white};
                z-index: -1;
                transform: translate(50%, 50%) scale(0);
                transition: transform .3s ease-in-out;
            }
        }

        &:hover{
            color: ${({theme}) => theme.colors.orange};
        }

        &:hover span::after{
            transform: translate(50%, 50%) scale(1);
        }
    }

    @media (max-width: 750px){
        font-size: ${({ theme}) => theme.fontSize.xs};
    }

   @media (max-width: ${({ theme }) => theme.screenSize.mobile}){
        font-size: ${({ theme}) => theme.fontSize.s};
        margin-top: 30px;
        width: 130px;
        height: 50px;
    }
`