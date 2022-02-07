import styled, { css } from "styled-components"

export const Wrapper = styled.main`
    background-color: ${({theme}) => theme.colors.black};
    padding: 3vw;
    height: 200vh;
`

export const StyledContentWrapper = styled.article`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 30px;

    @media(max-width: 750px){
        flex-direction: column;
        row-gap: 10px;
        margin: 20px;
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

    @media(max-width: 750px){
        margin-right: 0;
        margin-bottom: 0;
        max-width: 100%;

        h2{
            font-size: ${({theme}) => theme.fontSize.xxs};
        }

        p{
            margin-block: 10px 20px;
        }
    }
`

export const StyledImg = styled.div`
    display: flex;
    position: relative;

    img{
        width: 55vw;
    }

    @media(max-width: 750px){
        img{
            width: 100%;
        }
    }
`

const ornamentLeft = css`
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.colors.orange};
    bottom: -30px;
    left: -30px;

    @media(max-width: 750px){
        top: -20px;
        left: -20px;
    }
`

export const StyledLeftOrnament = styled.div`
    &::after{
        ${ornamentLeft};
        width: 20px;
        height: 100px;
    }

    &::before{
        ${ornamentLeft};
        width: 100px;
        height: 20px;
    }

    @media(max-width: 750px){
        &::after{
            width: 10px;
            height: 100px;
        }

        &::before{
            width: 100px;
            height: 10px;
        }
    }
`

const ornamentRight = css`
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.colors.orange};
    top: -30px;
    right: -30px;

    @media(max-width: 750px){
        top: unset;
        left: unset;
        bottom: -20px;
        right: -20px;
    }
`

export const StyledRightOrnament = styled.div`
    &::after{
        ${ornamentRight};
        width: 20px;
        height: 100px;
    }

    &::before{
        ${ornamentRight};
        width: 100px;
        height: 20px;
    }

    @media(max-width: 750px){
        &::after{
            width: 10px;
            height: 100px;
        }

        &::before{
            width: 100px;
            height: 10px;
        }
    }
`