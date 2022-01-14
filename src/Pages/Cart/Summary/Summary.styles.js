import styled from "styled-components"

export const Wrapper = styled.aside`
    width: 100%;
    position: sticky;
    top: 100px;
    background-color: black;
    overflow-y: auto;
    height: fit-content;
    padding: 2vw;
    height: fit-content;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    transition: all .2s .3s ease-in-out;
`

export const StyledSVG = styled.svg`
    fill: ${({theme}) => theme.colors.orange};
`

export const StyledTable = styled.table`
    width: 100%;

    td{
        padding-block: 10px;
    }
`