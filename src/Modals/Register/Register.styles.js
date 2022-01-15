import styled from "styled-components"

export const StyledContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: fit-content;
    padding: 30px;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    z-index: 99999;
    box-shadow: 0px 0px 24px -5px rgba(0, 0, 0, 1);

    @media (max-width: ${({theme}) => theme.screenSize.medium}){
        width: 95vw;
    }
`

export const StyledCloseButton = styled.button`
    position: absolute;
    right: -21px;
    top: -21px;
    background-color: ${({theme}) => theme.colors.black};
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({theme}) => theme.colors.white};

    svg{
        fill: ${({theme}) => theme.colors.white};
        height: 16px;
        width: 16px;
    }

    @media (max-width: ${({theme}) => theme.screenSize.medium}){
        right: 0;
        top: 0;
        border: none;
    }
`