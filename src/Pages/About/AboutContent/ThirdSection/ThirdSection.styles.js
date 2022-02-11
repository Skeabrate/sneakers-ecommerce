import styled from "styled-components"

export const Wrapper = styled.section`
    padding: 3vw;
`

export const StyledContent = styled.article`
    display: grid;
    padding-block: 3vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 30px;
`

export const StyledItem = styled.div`
    height: 500px;
    box-shadow: ${({theme}) => theme.boxShadow};
`

export const StyledItemImg = styled.div`
    height: 80%;
    background-image: ${({ img }) => `url(${ img })`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const StyledItemTitle = styled.div`
    
`

export const StyledItemTitleLower = styled.div`
    
`

export const StyledItemContent = styled.div`
    
`

export const StyledItemButton = styled.button`
    
`
    