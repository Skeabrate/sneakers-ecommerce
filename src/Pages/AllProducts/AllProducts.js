import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledTitle, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink, Image } from './AllProducts.styles';
import ProductsContext from '../../Context/productsContext';
import QuickView from '../../Components/QuickView/QuickView';
import placeholder from "../../Assets/Images/placeholder.png"

const AllProducts = ({ setContentAnimation }) => {
   const [selectedProduct, setSelectedProduct] = useState(false)
   const [modalIsOpen, setIsOpen] = useState(false)

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
      setIsOpen(true)
      setSelectedProduct(products.find(item => item.id === id))
   }

   const handleCloseView = () => setIsOpen(false)

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <span ref={contentTitleRef}>All Products</span>
            </StyledTitle>
         </header>

         <article>
            <StyledContent ref={contentRef}>
               {products.map(({id, images = [], price, title, category}, props) => (
                  <StyledLink to={`/product/${id}`} key={id}>
                     <StyledItem>
                        <StyledImage>
                           <Image 
                              alt=""
                              src={images[0].url}
                           />
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

         {selectedProduct ? (
            <QuickView isOpen={modalIsOpen} onRequestClose={handleCloseView} selectedProduct={selectedProduct}/>
         ) : null}

      </Wrapper>
   );
};

export default AllProducts;