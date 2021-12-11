import React, { useEffect, useRef } from 'react';
import { StyledError, Wrapper } from './ProductPage.styles';
import { useProductID } from "../../hooks/useProductID"
import Content from './Content/Content';
import { useSticky } from "../../hooks/useSticky"
import Error from '../404/Error';

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
               <Error label="product"/>
            ) : (
               <Wrapper>
                  <div style={{ position: 'absolute', top: '-1px' }} ref={wrapperBeginRef}></div>

                     <Content product={product} loading={loading} isStickyBegin={isSticky} isStickyEnd={isStickyEnd} />

                  <div style={{ position: 'absolute', bottom: '0' }} ref={wrapperEndRef}></div>
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;