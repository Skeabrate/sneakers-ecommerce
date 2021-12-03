import React, { useEffect, useRef } from 'react';
import { StyledError, Wrapper } from './ProductPage.styles';
import { useProductID } from "../../hooks/useProductID"
import ShopingCart from './ShopingCart/ShopingCart';
import Content from './Content/Content';
import { useSticky } from "../../hooks/useSticky"

const ProductPage = ({setIsProductPage}) => {
   const [product, loading, error] = useProductID()

   const wrapperBeginRef = useRef(null)
   const wrapperEndRef = useRef(null)

   const {isSticky ,isStickyEnd} = useSticky(wrapperBeginRef.current, wrapperEndRef.current)

   useEffect(() => {
      window.scrollTo(0, 0)
      setIsProductPage(true)

      return () => {
         setIsProductPage(false)
      }
   }, [])

   return (
      <section>
            {error ? (
               <StyledError>
                  <h1>404</h1>
                  <h2>Sorry, we couldn't find a product you are looking for :C</h2>
               </StyledError>
            ) : (
               <Wrapper>
                  <div style={{ position: 'absolute', top: '-1px' }} ref={wrapperBeginRef}></div>

                     <Content product={product} loading={loading}/>

                     <ShopingCart isStickyBegin={isSticky} isStickyEnd={isStickyEnd} product={product} loading={loading}/>

                  <div style={{ position: 'absolute', bottom: '0' }} ref={wrapperEndRef}></div>
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;