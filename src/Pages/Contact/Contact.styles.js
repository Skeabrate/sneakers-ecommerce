import styled from "styled-components"

export const StyledContact = styled.div`
    display: grid;
    grid-template-columns: 450px 700px;
    column-gap: 6vw;
    justify-items: center;
    margin: 0 auto;
    width: fit-content;
`

export const StyledImg = styled.div`
    position: relative;
    display: flex;
    

    &::after{
        content: "";
        position: absolute;
        bottom: -40px;
        left: -40px;
        height: 20px;
        width: 120px;
        background-color: ${({theme}) => theme.colors.orange};
    }

    &::before{
        content: "";
        position: absolute;
        bottom: -40px;
        left: -40px;
        height: 120px;
        width: 20px;
        background-color: ${({theme}) => theme.colors.orange};
    }

    img{
        width: 100%;
    }
`

export const StyledLabel = styled.label`
    position: absolute;
    left: 15px;
    top: 25px;
    transform: translateY(-50%);
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.xxs};
    background-color: ${({theme}) => theme.colors.black};
    padding: 0 8px;
    z-index: ${({isFocused}) => isFocused ? 1 : -1};
    transform: ${({isFocused}) => isFocused ? 'translateY(-33px) scale(0.85)' : 'translateY(-50%)'};
    text-transform: capitalize;

    transition: all .2s ease-in-out;
`

export const StyledTextarea = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: fit-content;

    textarea{
        max-width: 450px;
        min-width: 450px;
        min-height: 30vh;
        max-height: 30vh;
        background-color: transparent;
        border: 2px solid ${({theme}) => theme.colors.white};
        padding: 20px;
        color: ${({theme}) => theme.colors.white};
        border-radius: 0;
        border-color: ${({theme, error}) => error ? theme.colors.red : null};
    
        &:focus{
            outline: none;
        }
    }

    @media (max-width: ${({theme}) => theme.screenSize.mobile}) {
        margin-bottom: 20px;
    }
`

export const StyledDetails = styled.article`
    display: flex;
    justify-content: center;
    margin-block: 200px;
    column-gap: 3vw;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        width: 80%;
        height: 4px;
        background-color: ${({theme}) => theme.colors.orange};
        top: -50px;
        border-radius: 100%;
    }

    svg{
        fill: ${({theme}) => theme.colors.orange};
        height: 34px;
        width: 34px;
        margin-bottom: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;
        max-width: 300px; 

        a{
            color: ${({theme}) => theme.colors.orange};
            font-style: italic;
            font-size: ${({theme}) => theme.fontSize.xs};
            letter-spacing: 1px;
        }
    }
`