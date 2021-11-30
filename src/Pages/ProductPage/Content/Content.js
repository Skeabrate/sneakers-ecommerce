import React from 'react';
import { StyledSlider, StyledContent } from "./Content.styles"

const Content = ({product}) => {


   return (
      <StyledContent>
         <StyledSlider>
            {product.images.map((item, index) => (
               <div key={index}>
                  <img src={item.url}/>
               </div>
            ))}
         </StyledSlider>

   </StyledContent>
   );
};

export default Content;