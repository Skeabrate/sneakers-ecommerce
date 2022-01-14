import styled from "styled-components"

export const StyledContent = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    opacity: 0;
    column-gap: 30px;

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        grid-template-columns: 1fr;
    }
`