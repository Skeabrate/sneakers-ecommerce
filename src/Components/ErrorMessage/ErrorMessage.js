import React, { useEffect } from 'react';
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

const StyledError = styled.div`
    position: fixed;
    bottom : 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.xs};
    text-align: center;
    padding: 20px;
    border-radius: 5px;

    animation: .2s ease-in forwards ${appear};
`

const StyledBtn = styled.button`
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

const timeout = keyframes`
    from{
        transform: translateX(-50%) scaleX(0);
    } to{
        transform: translateX(-50%) scaleX(1);
    }
`

const StyledLoadingBar = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 6px;
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

        animation: 6s ease-in forwards ${timeout};
    }
`

const ErrorMessage = ({ label, setError = () => {} }) => {

    useEffect(() => {
        let timeout = setTimeout(() => {
            setError(false)
        }, 6200)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <StyledError>
            {label}
            <StyledBtn onClick={() => setError(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </StyledBtn>

            <StyledLoadingBar>
                <span></span>
            </StyledLoadingBar>
        </StyledError>
    );
};

export default ErrorMessage;