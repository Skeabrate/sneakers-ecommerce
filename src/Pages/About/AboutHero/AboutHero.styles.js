import styled, { css } from "styled-components"
import heroImg from "../../../Assets/Images/aboutHero.jpg"
import { Link } from "react-scroll"

export const Wrapper = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #c1a98d;
`

export const StyledHeroImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${heroImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transform: scale(0.9);
`

export const StyledHeroTitle = styled.h1`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    top: 50%;
    left: 50%;
    color: ${({theme}) => theme.colors.white};
    font-size: 70px;
    width: 100%;
    background-color: transparent;
    font-family: 'Shadows Into Light', cursive;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 3px 0px ${({theme}) => theme.colors.darkBlack};
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    padding: 20px;

    span{
        display: block;
        transform: translateY(100%);
        overflow: hidden;
        opacity: 0;

    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        font-size: 50px;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        font-size: ${({theme}) => theme.fontSize.xl};
        column-gap: 10px;
    }
`

const background = css`
    position: absolute;
    width: 50%;
    height: 100%;
    opacity: 0;
    background-color: black;
    z-index: -1;
`

export const StyledBackgroundLeft = styled.div`
    left: 0;
    top: 0;
    transform-origin: left;
    transform: translateX(-100%);
    ${background};
`

export const StyledBackgroundRight = styled.div`
    top: 0;
    right: 0;
    transform-origin: right;
    transform: translateX(100%);
    ${background};
`

export const StyledArrow = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%) rotate(90deg);
    width: 150px;
    border-radius: 100%;
    cursor: pointer;

    img{
        width: 100%;
        transition: transform .2s ease-in-out;
        opacity: 0;
    }

    &:hover img{
        transform: translateX(5px) scale(1.05);
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        width: 100px;
    }
`