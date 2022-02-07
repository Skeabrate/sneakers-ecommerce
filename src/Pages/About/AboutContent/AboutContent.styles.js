import styled, { css, ThemeContext } from "styled-components"

export const Wrapper = styled.main`
    background-color: ${({theme}) => theme.colors.black};
    padding: 3vw;
    height: 200vh;
`

export const StyledContentWrapper = styled.article`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
    }
`

const ornamentLeft = css`
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.colors.orange};
    bottom: -30px;
    left: -30px;
`

export const StyledLeftOrnament = styled.div`
    &::after{
        ${ornamentLeft};
        width: 20px;
        height: 120px;
    }

    &::before{
        ${ornamentLeft};
        width: 120px;
        height: 20px;
    }
`

export const StyledContent = styled.div`
    background-color: ${({theme}) => theme.colors.orange};
    max-width: 500px;
    padding: 3vw;
    height: fit-content;
    margin-right: -10%;
    margin-bottom: -50px;
    z-index: 1;
    position: relative;

    p{
        margin-block: 1vw 2vw;
        font-size: ${({theme}) => theme.fontSize.xs};
    }
`

const ornamentRight = css`
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.colors.orange};
    top: -30px;
    right: -30px;
`

export const StyledRightOrnament = styled.div`
    &::after{
        ${ornamentRight};
        width: 20px;
        height: 120px;
    }

    &::before{
        ${ornamentRight};
        width: 120px;
        height: 20px;
    }
`

export const StyledImg = styled.div`
    position: relative;

    img{
        width: 55vw;
    }
`