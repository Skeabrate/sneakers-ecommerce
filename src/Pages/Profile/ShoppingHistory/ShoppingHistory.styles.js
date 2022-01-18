import styled from "styled-components"

export const Wrapper = styled.article`
    padding: 3vw;

    table{
        border-collapse: collapse;
    }

    td{
        padding: 20px;
        border: 1px solid ${({theme}) => theme.colors.white};
    }
` 