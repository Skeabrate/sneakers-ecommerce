import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledTitle, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink } from './AllProducts.styles';
import ProductsContext from '../../Context/productsContext';

const AllProducts = ({ setContentAnimation }) => {
   const t2 = useRef(null)
   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)

   const products = useContext(ProductsContext)

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

      return () => setContentAnimation(false)
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
               {products.products.map(({id, images = [], price, title, category}) => (
                  <StyledLink to={`/product/${id}`} key={id}>
                     <StyledItem>
                        <StyledImage>
                           <img src={images[0].url} alt="" />
                           <div>${price}</div>
                           <span>Quick <br /> view</span>
                        </StyledImage>

                        <StyledItemTitle>{title}</StyledItemTitle>
                        <StyledCategory>{category}</StyledCategory>
                     </StyledItem>
                  </StyledLink>
               ))}
            </StyledContent>
         </article>

      </Wrapper>
   );
};

export default AllProducts;