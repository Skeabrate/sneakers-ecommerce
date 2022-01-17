import styled from "styled-components"

export const StyledCardInfo = styled.div`
    display: flex;
    column-gap: 10px;

    input{
        width: 220px;
    }

    @media (max-width: ${({theme}) => theme.screenSize.mobile}){
        flex-direction: column;

        input{
            width: calc(95vw - 60px);
        } 
    }
`