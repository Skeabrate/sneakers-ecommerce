import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5px 0;
   border-top: 1px solid ${({theme}) => theme.colors.grey};
   border-bottom: 1px solid ${({theme}) => theme.colors.grey};
   margin-bottom: 66px;
   position: relative;
`

export const StyledFilters = styled.div`
   display: flex;
   align-items: center;
`

export const StyledPhrase = styled.div`
   position: absolute;
   font-size: 13px;
   bottom: -51px;
   background-color: ${({theme}) => theme.colors.orange};
   padding: 10px;
   display: flex;
   justify-content: center;
   align-items: center;

   button {
      margin-left: 5px;
      background-color: transparent;
      border: none;
   }

   svg{
      fill: ${({theme}) => theme.colors.white};
      width: 10px;
      height: 10px;
   }
`