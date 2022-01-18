import React from 'react';
import styled, { keyframes } from "styled-components"

const appear = keyframes`
    from{
        
        opacity: 0;
    } to {
        
        opacity: 1;
    }
`

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    box-shadow: 0px 0px 39px -6px rgba(0, 0, 0, 1);
    z-index: 100;
    color: ${({theme}) => theme.colors.white};

    animation: .2s ease-in forwards ${appear};

    button{
        padding: 15px 30px;
        font-weight: bold;
        background-color: ${({theme}) => theme.colors.white};
        border: none;
        margin: 15px 10px 0;
    }
`

const ConfirmModal = ({ label, yesHandler, noHandler }) => {
    return (
        <Wrapper>
            <h3>{label}</h3>
            <div>
                <button onClick={yesHandler}>Yes</button>
                <button onClick={noHandler}>No</button>
            </div>
        </Wrapper>
    );
};

export default ConfirmModal;