import styled, { css } from "styled-components"

const wrapperStyles = css`
    padding: 3vw;
    min-height: 100vh;
    color: ${({theme}) => theme.colors.white};
`

export const Wrapper = styled.section`
    margin-top: 80px;
    display: grid;
    grid-template-columns: 60% 40%;

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;  
    }
`

export const StyledShopping = styled.article`
    ${wrapperStyles};
    
` 

export const StyledSettings = styled.article`
    ${wrapperStyles};
    background-color: ${({theme}) => theme.colors.orange};
`