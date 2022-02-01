import styled from "styled-components"

export const StyledContact = styled.div`
    display: grid;
    grid-template-columns: 450px 600px;
    column-gap: 5vw;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    width: fit-content;

    @media(max-width: 1200px){
        grid-template-columns: 450px 450px;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        grid-template-columns: 1fr;
    }
`

export const StyledDescription = styled.p`
    margin-bottom: 40px;
`

export const StyledImg = styled.div`
    position: relative;
    display: flex;
    opacity: 0;

    &::after{
        content: "";
        position: absolute;
        bottom: -30px;
        right: -30px;
        height: 20px;
        width: 120px;
        background-color: ${({theme}) => theme.colors.orange};
    }

    &::before{
        content: "";
        position: absolute;
        bottom: -30px;
        right: -30px;
        height: 120px;
        width: 20px;
        background-color: ${({theme}) => theme.colors.orange};
    }

    img{
        width: 100%;
    }

    @media (max-width: ${({theme}) => theme.screenSize.medium}) {
        margin-top: 60px;

        &::after{
            bottom: -30px;
            left: 0;
        }

        &::before{
            height: 20px;
            width: 120px;
            bottom: -30px;
            right: 0;
        }
    }

    @media (max-width: ${({theme}) => theme.screenSize.mobile}) {
        margin-top: 40px;

        &::after{
            height: 10px;
            width: 100px;
            bottom: -20px;
            left: 0;
        }

        &::before{
            height: 10px;
            width: 100px;
            bottom: -20px;
            right: 0;
        }
    }
`

export const StyledDetails = styled.article`
    display: flex;
    justify-content: center;
    margin-block: 200px;
    column-gap: 6vw;
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
        max-width: 200px; 

        a{
            color: ${({theme}) => theme.colors.orange};
            font-style: italic;
            font-size: ${({theme}) => theme.fontSize.xs};
            letter-spacing: 1px;
        }
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        flex-direction: column;
        align-items: center;
        row-gap: 60px;
        margin-block: 150px 100px;

        div{
            row-gap: 5px;
            max-width: 60%; 
        }
    }
`