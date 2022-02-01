import styled from "styled-components"

export const StyledContact = styled.div`
    display: grid;
    grid-template-columns: 450px 500px;
    column-gap: 5vw;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    width: fit-content;

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        grid-template-columns: 1fr;
    }
`

export const StyledImg = styled.div`
    position: relative;
    display: flex;

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
        img{
            width: 80%;
        }
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