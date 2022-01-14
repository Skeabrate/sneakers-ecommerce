import styled from "styled-components"

export const Wrapper = styled.article`
    width: 100%;
    position: sticky;
    top: 100px;
    background-color: ${({theme}) => theme.colors.orange};
    overflow-y: auto;
    height: fit-content;
    padding: 20px;
    height: 500px;
    
    transition: all .2s .3s ease-in-out;

    h2{
        font-style: italic;
    }
`