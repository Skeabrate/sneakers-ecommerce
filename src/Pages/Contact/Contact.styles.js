import styled from "styled-components"

export const Wrapper = styled.div`
    height: calc(100vh - 80px);
    margin-top: 80px;

    @media(max-width: ${({theme}) => theme.screenSize.mobile}){
        height: calc(100vh - 60px);
        margin-top: 60px;
    }
`