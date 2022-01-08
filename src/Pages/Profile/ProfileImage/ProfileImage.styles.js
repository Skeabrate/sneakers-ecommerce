import styled from "styled-components"

export const StylledButton = styled.button`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #0f0f0f;
    border-radius: 100%;
    border: 2px solid ${({theme}) => theme.colors.white};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        opacity: 0;
        height: 100%;
        transition: transform .2s ease-in-out;
    }

    svg{
        height: 120px;
        width: 120px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: ${({theme}) => theme.colors.black};
        opacity: ${({image}) => image ? 0 : 1};
        z-index: 2;

        transition: all .2s ease-in-out;
    }

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0;
        transition: all .2s ease-in-out;
        z-index: 1;
    }

    &:hover{
        svg{
            opacity: 1;
        }

        img{
            transform: scale(1.05);
        }

        &::after{
            opacity: 0.3;
        }
    }
`