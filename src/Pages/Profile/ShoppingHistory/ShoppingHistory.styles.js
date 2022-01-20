import styled from "styled-components"

export const Wrapper = styled.section`
    padding: 3vw;
    overflow: hidden;
    
    table{
        margin-block: 15px 30px;
        border-collapse: collapse;
    }

    td{
        padding: 0px 40px 0 0;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        table{
            margin-block: 5px 15px;
            border-collapse: collapse;
        }

        td{
            padding: 0px 20px 0 0;
        }
    }
`

export const StyledOrderTitle = styled.h3`
    text-transform: uppercase;
    line-height: 1.9;
`

export const StyledShoppingItem = styled.article`
    margin-bottom: ${({isLast}) => isLast ? '50px' : '100px'};
    position: relative;
    
    &::after{
        display: ${({isLast}) => isLast ? 'none' : 'block'};
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: -52px;
        background-color: ${({theme}) => theme.colors.grey};
        border-radius: 100%;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-bottom: ${({isLast}) => isLast ? '40px' : '80px'};

        &::after{
            bottom: -42px;
        }
    }
`

export const StyledUnderline = styled.span`
    position: relative;

    &::after{
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colors.orange};
    }
`

export const StyledImages = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;

    @media(max-width: 1300px){
        column-gap: 10px;
        row-gap: 20px;
    }

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        grid-template-columns: 1fr 1fr;
    }
`

export const LoadingConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px - 52px - 3vw);
`