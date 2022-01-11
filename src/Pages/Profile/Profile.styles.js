import styled, { css } from "styled-components"

const wrapperStyles = css`
    padding: 3vw;
    min-height: calc(100vh - 80px);
    width: 80vw;
    color: ${({theme}) => theme.colors.white};
 
    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        min-height: calc(100vh - 60px); 
    }
`

export const Wrapper = styled.section`
    margin-top: 80px;

    h2, h3{
        font-style: italic;
    }

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;  
    }
`

// Settings - left
export const StyledSettings = styled.article`
    ${wrapperStyles};
    background-color: ${({theme}) => theme.colors.orange};
    position: relative;
    transition: transform .3s ease-in-out;

    transform: ${({ toggle }) => toggle ? 'translateX(-60vw)' : 'translateX(0)'};
`

export const StyledSettingsContent = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    column-gap: 50px;
`

export const StyledAccountDetails = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 3vw;

    h3{
        margin-bottom: 30px;
    }
`

export const StyledLogout = styled.div`
    position: absolute;
    bottom: 3vw;
    right: 3vw;
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

export const StyledSwitch = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%) ${({ toggle }) => !toggle && 'rotate(180deg)'};
    right: 20px;
    border: none;
    background: transparent;

    svg{
        height: 44px;
        width: 44px;
        transition: all .3s ease-in-out;
        fill: ${({ theme, toggle }) => toggle ? theme.colors.white : theme.colors.black};
    }
`

// Shopping - right
export const StyledShopping = styled.article`
    ${wrapperStyles};
    position: absolute;
    left: 80vw;
    top: 80px; 
    opacity: ${({toggle}) => toggle ? 1 : 0.3};
    transition: transform .3s ease-in-out,
                opacity .4s ease-in-out;

    transform: ${({ toggle }) => toggle ? 'translateX(-60vw)' : 'translateX(0)'};

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        top: 60px;  
    }
` 