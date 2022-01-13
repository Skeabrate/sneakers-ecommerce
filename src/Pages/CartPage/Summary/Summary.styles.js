import styled from "styled-components"

export const Wrapper = styled.article`
    width: 100%;
    background-color: red;
    position: sticky;
    height: fit-content;
    top: ${({top}) => `${(-1) * top}px`};
    
    transition: all .2s .3s ease-in-out;
`