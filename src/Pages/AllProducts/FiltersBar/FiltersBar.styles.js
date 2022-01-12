import styled from 'styled-components'

export const StyledFiltersBar = styled.div`
   position: ${({isSticky}) => isSticky ? 'relative' : 'fixed'};
   top: ${({isSticky}) => isSticky ? 'unset' : '90px'};
   left: 50%;
   transform: translate(-50%) ${({isSticky}) => isSticky ? null : 'scaleX(1.02)'};
   width: ${({isSticky}) => isSticky ? 'unset' : `calc(100% - 6vw)`};
   display: flex;
   justify-content: space-between;
   background-color: ${({isSticky, theme}) => isSticky ? `${theme.colors.black}` : 'black'};
   padding: ${({isSticky}) => isSticky ? '5px 0' : '5px 10px'};
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};;

   border-top-color: ${({isSticky, theme}) => isSticky ? theme.colors.grey : `transparent`};
   border-bottom-color: ${({isSticky, theme}) => isSticky ? theme.colors.grey : `transparent`};
   z-index: 1;
   

   transition: background-color .2s ease-in-out, 
               padding .3s ease-in-out,
               transform .3s ease-in-out;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      position: relative;
      top: unset;
      transform: translate(-50%);
      width: unset;
      background-color: unset;
      padding: 5px 0;
      border-top: ${({theme}) => `1px solid ${theme.colors.grey}`};
      border-bottom: ${({theme}) => `1px solid ${theme.colors.grey}`};
   }
`

export const StyledFilters = styled.div`
   display: flex;
   align-items: center;
`

export const StyledActiveFilters = styled.div`
   display: flex;
   align-items: center;
   min-height: 36px;
   column-gap: 15px;
   row-gap: 10px;
   margin-block: 11px;
   row-gap: 5px;
   position: relative;
   flex-wrap: wrap;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      row-gap: 10px;
      column-gap: 10px;
      margin-block: 10px;
   }
`

export const FiltersPlaceholder = styled.div`
   height: 52px;

   @media (max-width: ${({theme}) => theme.screenSize.mobile}){
      display: none;
   }
`