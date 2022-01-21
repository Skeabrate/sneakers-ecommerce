import styled from 'styled-components'

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.45fr 0.55fr;
   position: relative;
   margin-top: 0;

   @media (max-width: ${({theme}) => theme.screenSize.medium}){
      grid-template-columns: 1fr;
   }
`
