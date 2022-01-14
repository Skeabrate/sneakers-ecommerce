import React, { useRef } from 'react';
import { Wrapper, StyledTitle, StyledContent } from "../GlobalStyles.styles"
import { useAnimation } from '../../../../hooks/useAnimation';

const Highlights = ({ loading }) => {
   const wrapperRef = useRef(null)
   useAnimation(wrapperRef.current)

   return (
      <Wrapper ref={wrapperRef}>
         <header>
            <StyledTitle>HIGHLIGHTS</StyledTitle>
         </header>

         <StyledContent count={4} isHigh>
            <div>
               <h3>ADIDAS 4D MIDSOLE</h3>
               <p>Precisely-coded performance zones combine our best stability, best comfort and best absorption so you can conquer the unpredictable city streets.</p>
            </div>

            <div>
               <h3>SOCK-LIKE FEEL</h3>
               <p>The upper hugs your foot with a supportive, flexible fit.</p>
            </div>

            <div>
               <h3>ADIDAS PRIMEKNIT</h3>
               <p>Precision-made, seamless zones combine strength and performance with smooth comfort to ensure distraction-free movement.</p>
            </div>

            <div>
               <h3>CONTINENTAL™ RUBBER OUTSOLE</h3>
               <p>Continental™ Rubber outsole provides extraordinary traction in wet and dry conditions.</p>
            </div>
         </StyledContent>
      </Wrapper>
   );
};

export default React.memo(Highlights);