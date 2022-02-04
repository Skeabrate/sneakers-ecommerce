import styled from "styled-components"

export const Wrapper = styled.section`
    padding: 3vw;
    margin-top: 80px;
    min-height: calc(100vh - 80px);

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        margin-top: 60px;
        min-height: calc(100vh - 60px);
    }
`

export const StyledEnding = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.grey};
`