import styled from 'styled-components'

export const StyledFiltersBar = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5px 0;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   position: relative;
`

export const Wrapper = styled.div`
   
`

export const StyledFilters = styled.div`
   display: flex;
   align-items: center;
`

export const StyledActiveFilters = styled.div`
   display: flex;
   align-items: center;
   height: 58px;
`