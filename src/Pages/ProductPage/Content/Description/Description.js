import React, { useRef } from 'react';
import { Wrapper, StyledTitle, StyledContent } from "../GlobalStyles.styles"
import { useAnimation } from '../../../../hooks/useAnimation';

function Description({ product: { title, description, images }, loading }) {
   const wrapperRef = useRef(null)
   useAnimation(wrapperRef.current)
   
   return (
      <Wrapper ref={wrapperRef}>
         {loading ? (
            <StyledContent count={2} isDesc>
               <div>
                  <header>
                     <StyledTitle>{title}</StyledTitle>
                  </header>
                  <h3>RUNNING SHOES WITH PRECISELY CODED CUSHIONING FOR EVERYDAY COMFORT.</h3>
                  <p>{description}</p>
               </div>

               <div>
                  <img src={images[2].url} alt="sneakers" loading="lazy" />
               </div>
            </StyledContent>
         ) : null}
      </Wrapper>
   );
};

export default React.memo(Description);