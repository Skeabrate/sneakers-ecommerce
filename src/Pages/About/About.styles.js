import styled from "styled-components";
import heroImg from "../../Assets/Images/aboutHero.jpg"

export const Wrapper = styled.div`
    margin-top: 0px;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    perspective: 100px;

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;
    }
`

export const StyledHero = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url(${heroImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #c1a98d;
    transform: translateZ(-200px) scale(3);
    transform-style: preserve-3d;
    z-index: -1;
`

export const StyledHeroTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    color: rgba(255, 255, 255, 0.9);
    font-size: 70px;
    width: 100%;
    padding: 20px;
    background-color: transparent;
    font-family: 'Shadows Into Light', cursive;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 4px 4px 0px black;
    transform: translateX(-50%) translateY(-50%) translateZ(100px) scale(0.666);

    &::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100%;
        opacity: 0.4;
        background-color: black;
        z-index: -1;
    }    
`

export const StyledArrow = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(25%) translateZ(100px) rotate(90deg) scale(0.666);
    background-color: transparent;
    border: none;
    width: 150px;
    border-radius: 100%;

    img{
        width: 100%;
    }
`

export const StyledContent = styled.div`
    height: 100vh;
    background-color: ${({theme}) => theme.colors.black};
    z-index: 1;
`