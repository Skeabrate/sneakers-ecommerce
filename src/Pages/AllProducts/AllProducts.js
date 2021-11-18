import React, { useEffect, useRef } from 'react';
import { data } from '../../helpers/data';
import gsap from 'gsap';
import { Wrapper, StyledTitle, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory } from './AllProducts.styles';

const AllProducts = ({ setContentAnimation }) => {
   const t2 = useRef(null)

   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)

   useEffect(() => {
      t2.current = gsap.timeline()
      setContentAnimation(t2.current)

      if(t2.current) {
         t2.current
            .to(contentTitleRef.current, {
               y: 0,
               duration: .4,
            })
            .to(contentRef.current, {
               opacity: 1,
               duration: .4,
            })
      }
   }, [])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <span ref={contentTitleRef}>All Products</span>
            </StyledTitle>
         </header>

         <article>
            <StyledContent ref={contentRef}>
               {data.map(({id, image, price, title, category}) => (
                  <StyledItem key={id}>
                     <StyledImage>
                        <img src={image} alt="" />
                        <div>{price}</div>
                        <span>Quick <br /> view</span>
                     </StyledImage>

                     <StyledItemTitle>{title}</StyledItemTitle>
                     <StyledCategory>{category}</StyledCategory>
                  </StyledItem>
               ))}
            </StyledContent>
         </article>

      </Wrapper>
   );
};

export default AllProducts;