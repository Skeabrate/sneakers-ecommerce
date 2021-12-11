import styled from 'styled-components'

export const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 100px);
   width: 100%;
`

/* STYLED CONTENT */
export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.45fr 0.55fr;
   position: relative;
   margin-top: 0;

   @media (max-width: 1000px){
      grid-template-columns: 1fr;
   }
`