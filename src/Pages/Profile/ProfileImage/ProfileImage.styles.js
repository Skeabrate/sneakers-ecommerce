import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    h2{
        font-style: italic;
        text-transform: uppercase;
        position: relative;
        width: fit-content;

        &::after{
            content: "";
            position: absolute;
            bottom: -7px;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 100%;
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
`

export const StyledContent = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StylledButton = styled.button`
    position: relative;
    width: 200px;
    height: 200px;
    background-color: ${({theme}) => theme.colors.black};
    border-radius: 300px;
    border: 4px solid ${({theme}) => theme.colors.white};
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
        fill: #0f0f0f;
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