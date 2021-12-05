import styled from 'styled-components'

export const StyledFiltersBar = styled.div`
   position: ${({isSticky}) => isSticky ? 'relative' : 'fixed'};
   top: ${({isSticky}) => isSticky ? 'unset' : '85px'};
   left: 50%;
   transform: translate(-50%) ${({isSticky}) => isSticky ? null : 'scaleX(1.02)'};
   width: ${({isSticky}) => isSticky ? 'unset' : `calc(100% - 6vw)`};
   display: flex;
   justify-content: space-between;
   background-color: ${({isSticky, theme}) => isSticky ? `${theme.colors.black}` : 'black'};
   padding: ${({isSticky}) => isSticky ? '5px 0' : '5px 10px'};
   border-top: ${({isSticky, theme}) => isSticky ? `1px solid ${theme.colors.grey}` : `none`};
   border-bottom: ${({isSticky, theme}) => isSticky ? `1px solid ${theme.colors.grey}` : `none`};
   z-index: 1;
   

   transition: background-color .2s ease-in-out, 
               padding .3s ease-in-out,
               transform .3s ease-in-out;
`

export const StyledFilters = styled.div`
   display: flex;
   align-items: center;
`

export const StyledActiveFilters = styled.div`
   display: flex;
   align-items: center;
   height: 58px;
   position: relative;
`