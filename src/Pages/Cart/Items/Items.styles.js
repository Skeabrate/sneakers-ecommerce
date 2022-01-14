import styled from "styled-components"

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;

    td{
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
        padding-block: 20px;
    }

    
`
export const StyledEnding = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.grey};
`