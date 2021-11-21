import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledTitle, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink } from './AllProducts.styles';
import ProductsContext from '../../Context/productsContext';
import QuickView from '../../Components/QuickView/QuickView';

const AllProducts = ({ setContentAnimation }) => {
   const [toggleQuickView, setToggleQuickView] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState('')

   const t2 = useRef(null)
   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)

   const { products } = useContext(ProductsContext)

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

   const handleQuickView = (e, id) => {
      e.preventDefault()
      setToggleQuickView(!toggleQuickView)
      setSelectedProduct(products.find(item => item.id === id))
   }

   const handleCloseView = () => setToggleQuickView(false)

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <span ref={contentTitleRef}>All Products</span>
            </StyledTitle>
         </header>

         <article>
            <StyledContent ref={contentRef}>
               {products.map(({id, images = [], price, title, category}) => (
                  <StyledLink to={`/product/${id}`} key={id}>
                     <StyledItem>
                        <StyledImage>
                           <img src={images[0].url} alt="" />
                           <div>${price}</div>
                           <button onClick={(e) => handleQuickView(e, id)}>
                              Quick <br /> view
                           </button>
                        </StyledImage>

                        <StyledItemTitle>{title}</StyledItemTitle>
                        <StyledCategory>{category}</StyledCategory>
                     </StyledItem>
                  </StyledLink>
               ))}
            </StyledContent>
         </article>

         {toggleQuickView ? (
            <QuickView handleCloseView={handleCloseView} selectedProduct={selectedProduct}/>
         ) : null}

      </Wrapper>
   );
};

export default AllProducts;