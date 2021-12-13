import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.45fr 0.55fr;
   position: relative;
   margin-top: 0;

   @media (max-width: 1000px){
      grid-template-columns: 1fr;
   }
`

export const StyledLinkToHome = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 30px; 
   left: 30px;
   z-index: 100;
   color: black;
   font-weight: bold;
   font-size: ${({theme}) => theme.fontSize.xs};
   letter-spacing: 2px;

   svg{
      transform: rotateY(180deg);
      width: 15px;
      margin-right: 15px;
   }
`