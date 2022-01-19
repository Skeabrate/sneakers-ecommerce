import styled from "styled-components"

export const Wrapper = styled.section`
    padding: 3vw;
    
    table{
        margin-block: 15px 30px;
        border-collapse: collapse;
    }

    td{
        padding: 0px 40px 0 0;
    }
`

export const StyledShoppingItem = styled.article`
    margin-bottom: 100px;
    position: relative;
    
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: -52px;
        background-color: ${({theme}) => theme.colors.grey};
        border-radius: 100%;
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
`