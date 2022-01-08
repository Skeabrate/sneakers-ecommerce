import styled from "styled-components"

export const Wrapper = styled.div`
    min-height: 100vh;
    margin-top: 80px;
    padding: 3vw;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
`