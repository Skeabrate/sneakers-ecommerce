import React from 'react';
import { useSelector } from 'react-redux';
import { useStoreLength } from '../../hooks/useStoreLength'
import {
   Wrapper,
   StyledTitle,
   StyledContent,
} from "./Wishlist.styles"

const Wishlist = () => {
   const favorite = useSelector((state) => state.favorite)
   const length = useStoreLength(favorite)

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               My Wish List
               <span>[ {length} ]</span>
            </StyledTitle>
         </header>

         <article>
            <StyledContent>
               {favorite.map(({id, title, price, image}) => (
                  <div key={id}>
                     
                  </div>
               ))}
            </StyledContent>
         </article>
      </Wrapper>
   );
};

export default Wishlist;