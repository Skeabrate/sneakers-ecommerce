import React, { useState } from 'react';
import AddToFavouriteButton from "../AddToFavouriteButton/AddToFavouriteButton"
import placeholder from "../../Assets/Images/placeholder.png"
import {
   StyledItem,
   StyledLink,
   StyledPlaceholder,
   StyledImage,
   StyledItemTitle,
   StyledCategory
} from "./ProductItem.styles"

const ProductItem = ({ id, title, category, gender, price, image }) => {
   const [isLoaded, setIsLoaded] = useState(false)

   return (
      <StyledItem>
         <StyledLink to={`/product/${id}`}>
            {!isLoaded ? (
               <StyledPlaceholder>
                  <img src={placeholder} alt="placeholder" />
               </StyledPlaceholder>
            ) : null}

            <StyledImage isLoaded={isLoaded}>
               <img
                  loading="lazy"
                  alt=""
                  src={image}
                  width="840"
                  height="840"
                  onLoad={() => setIsLoaded(true)}
               />
               <div>${price}</div>
               
               <AddToFavouriteButton 
                  id={id}
                  title={title}
                  price={price}
                  image={image}
               />
            </StyledImage>
         </StyledLink>

         <StyledItemTitle>{title.toUpperCase()}</StyledItemTitle>
         {gender && category ? <StyledCategory>{gender} / {category}</StyledCategory> : null}
         
      </StyledItem>
   );
};

export default ProductItem;