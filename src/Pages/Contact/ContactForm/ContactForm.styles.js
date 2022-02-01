import styled from "styled-components"

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

export const StyledTextareaWrapper = styled.div`
    position: relative;
    margin-bottom: 40px;
    width: fit-content;

    @media (max-width: ${({theme}) => theme.screenSize.mobile}) {
        margin-bottom: 20px;
    }
`

export const StyledTextarea = styled.textarea`
    max-width: 450px;
    min-width: 450px;
    min-height: 30vh;
    max-height: 30vh;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.white};
    padding: 20px;
    color: ${({theme}) => theme.colors.white};
    border-radius: 0;
    border-color: ${({theme, activeError}) => activeError ? theme.colors.red : null};

    &:focus{
        outline: none;
    }

    @media (max-width: ${({theme}) => theme.screenSize.medium}) {
        min-width: calc(100vw - 6vw - 8px);
        max-width: calc(100vw - 6vw - 8px);
    }
`

export const StyledErrorSvg = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    svg{
        height: 18px;
        width: 18px;
        fill: ${({theme, isValid}) => isValid ? theme.colors.green : theme.colors.red};
    }
`

export const StyledError = styled.div`
    position: absolute;
    bottom: -20px;
    font-size: ${({theme}) => theme.fontSize.s};
    color: ${({theme}) => theme.colors.red};
`