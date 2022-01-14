import React, { useRef } from 'react';
import { Wrapper, StyledTitle, StyledContent } from "../GlobalStyles.styles"
import { useAnimation } from '../../../../hooks/useAnimation';
import styled from "styled-components"
import { specifications } from "../../../../data/specifications"

const StyledList = styled.ul`
   column-count: 2;
   padding: 20px;

   li{
      padding: 10px 5px;
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

const Details = ({ loading }) => {
   const wrapperRef = useRef(null)
   useAnimation(wrapperRef.current)

   return (
      <Wrapper ref={wrapperRef}>
         <header>
            <StyledTitle>SPECIFICATIONS</StyledTitle>
         </header>

         <StyledContent count={1}>
            <StyledList>
               {specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
               ))}
            </StyledList>
         </StyledContent>

      </Wrapper>
   );
};

export default React.memo(Details);