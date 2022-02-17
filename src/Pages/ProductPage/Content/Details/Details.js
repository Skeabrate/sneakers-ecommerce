import React, { useRef } from 'react';
import { useAnimation } from '../../../../hooks/useAnimation';
import styled from "styled-components"
import { specifications } from "../../../../data/specifications"
import imgSrc from "../../../../Assets/Images/Contact.png"
import { 
   Wrapper, 
   StyledTitle, 
   StyledContent, 
   StyledImg 
} from "../GlobalStyles.styles"

const StyledList = styled.ul`
   column-count: 2;
   padding: 0 0 0 20px;

   li{
      padding: 8px 0px;
      font-size: ${({theme}) => theme.fontSize.xs};
   }
`

const Details = ({ loading }) => {
   const wrapperRef = useRef(null)
   useAnimation(wrapperRef.current)

   return (
      <Wrapper ref={wrapperRef} isLast>
         <StyledContent count={2} isLast>
            <StyledImg isLeft>
               <img 
                  alt="specifications"
                  src={imgSrc}
                  height="500"
                  width="500"
               />
            </StyledImg>

            <div>
               <header>
                  <StyledTitle>SPECIFICATIONS</StyledTitle>
               </header>

               <StyledList>
                  {specifications.map((spec, index) => (
                     <li key={index}>{spec}</li>
                  ))}
               </StyledList>
            </div>
         </StyledContent>

      </Wrapper>
   );
};

export default React.memo(Details);