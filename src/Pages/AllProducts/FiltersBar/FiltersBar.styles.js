import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5px 0;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   margin-bottom: 40px;
`

export const StyledFilters = styled.div`
   display: flex;
   align-items: center;
`