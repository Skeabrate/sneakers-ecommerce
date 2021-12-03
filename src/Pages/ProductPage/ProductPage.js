import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyledError, Wrapper } from './ProductPage.styles';
import { useProductID } from "../../hooks/useProductID"
import ShopingCart from './ShopingCart/ShopingCart';
import Content from './Content/Content';

const ProductPage = ({setIsProductPage}) => {
   const [product, loading, error] = useProductID()

   const [isStickyBegin, setIsStickyBegin] = useState(true)
   const [isStickyEnd, setIsStickyEnd] = useState(false)

   const wrapperBeginRef = useRef(null)
   const wrapperEndRef = useRef(null)

   const callbackFunctionBegin = (entries) => {
      const [entry] = entries
      setIsStickyBegin(entry.isIntersecting)
   }

   const callbackFunctionEnd = (entries) => {
      const [entry] = entries
      setIsStickyEnd(entry.isIntersecting)
   }

   const options = useMemo(() => {
      return {
         root: null,
         rootMargin: '0px',
         threshold: 1,
      }
   }, [])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunctionBegin, options)
      if(wrapperBeginRef.current) observer.observe(wrapperBeginRef.current)

      return () => {
         if(wrapperBeginRef.current) observer.unobserve(wrapperBeginRef.current)
      }
   }, [wrapperBeginRef.current, options])

   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunctionEnd, options)
      if(wrapperEndRef.current) observer.observe(wrapperEndRef.current)
      
      return () => {
         if(wrapperEndRef.current) observer.unobserve(wrapperEndRef.current)
      }
   }, [wrapperEndRef.current, options])

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

                     <ShopingCart isStickyBegin={isStickyBegin} isStickyEnd={isStickyEnd} product={product} loading={loading}/>

                  <div style={{ position: 'absolute', bottom: '0' }} ref={wrapperEndRef}></div>
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;