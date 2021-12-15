import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../Components/ProductItem/ProductItem';
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
                  <ProductItem
                     id={id}
                     image={image}
                     title={title}
                     price={price}
                  />
               ))}
            </StyledContent>
         </article>
      </Wrapper>
   );
};

export default Wishlist;