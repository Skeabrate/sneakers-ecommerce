import styled from "styled-components"
import heroImg from "../../../Assets/Images/abouthero2.png"
import { Link } from "react-scroll"

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 70vh;   
    background-color: #F1F0EC;

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        height: 50vh;
        padding-top: 40px;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        height: 35vh;
    }
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

export const StyledHeroTitle = styled.header`
    position: absolute;
    top: 100px;
    left: 50%;
    width: fit-content;
    transform: translateX(-50%);
    font-size: ${({theme}) => theme.fontSize.xxl};
    font-family: 'Shadows Into Light', cursive;
    font-style: italic;
    padding: 0 10px;
    text-shadow: 3px 3px 0px ${({theme}) => theme.colors.black};

    h1{
        display: block;
        overflow: hidden;
        padding: 0 5px;

        span{
            display: block;
            height: fit-content;
            line-height: 1;
            transform: translateY(100%);
        }
    }

    div{
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 7px;
        border-radius: 100%;
        transform-origin: center;
        transform: scaleX(0);
        background-color: ${({theme}) => theme.colors.white};   
        border-bottom: 3px solid ${({theme}) => theme.colors.darkBlack};
    }
`

export const StyledArrow = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%) rotate(90deg);
    width: 80px;
    border-radius: 100%;
    cursor: pointer; 

    svg{
        width: 30px;
        height: 30px;
        transition: transform .3s ease-in-out;
        opacity: 0;
        fill: ${({theme}) => theme.colors.black};
    }

    &:hover svg{
        transform: scale(1.2);
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        bottom: -25px;

        svg{
            width: 24px;
            height: 24px;
        }
    }
`