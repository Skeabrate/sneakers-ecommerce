import styled, { keyframes } from "styled-components"

const appear = keyframes`
    from{
        transform: translate(-50%, 10px);
        opacity: 0;
    } to {
        transform: translate(-50%, 0);
        opacity: 1;
    }
`

const timeout = keyframes`
    from{
        transform: translateX(-50%) scaleX(0);
    } to{
        transform: translateX(-50%) scaleX(1);
    }
`

export const StyledError = styled.div`
    position: fixed;
    bottom : 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999999;
    background-color: ${({theme, success}) => success ? theme.colors.green : theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.xs};
    text-align: center;
    padding: 20px 30px 25px;
    border-radius: 5px;

    animation: .2s ease-in forwards ${appear};
`

export const StyledBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: transparent;

    svg{
        height: 12px;
        width: 12px;
        fill: ${({theme}) => theme.colors.white};
    }
`

export const StyledLoadingBar = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    border-radius: 100px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.white};
    overflow: hidden;

    span{
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: white;
        transform-origin: left;
        transform: translateX(-50%) scaleX(0);

        animation: 4s ease-in forwards ${timeout};
    }
`