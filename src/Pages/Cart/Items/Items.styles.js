import styled from "styled-components"

export const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.shoeBckgrnd};
    padding: 3vw;
    min-height: calc(100vh - 80px);
`

export const StyledEnding = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.grey};
`