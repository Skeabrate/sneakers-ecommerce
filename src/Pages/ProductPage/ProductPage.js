import React, { useEffect, useRef } from 'react';
import { useProductID } from "../../hooks/useProductID"
import Content from './Content/Content';
import { useSticky } from "../../hooks/useSticky"
import Error from '../404/Error';
import { 
   Wrapper,
   StyledLinkToHome, 
} from './ProductPage.styles';

const ProductPage = ({setIsProductPage}) => {
   const [product, loading, error] = useProductID() // fetch product from context if it exists if not - fetch from CMS

   const wrapperBeginRef = useRef(null)
   const wrapperEndRef = useRef(null)

   const {isSticky ,isStickyEnd} = useSticky(wrapperBeginRef.current, wrapperEndRef.current)

   useEffect(() => {
      window.scrollTo(0, 0)
      setIsProductPage(true)

      return () => {
         setIsProductPage(false)
      }
   }, [setIsProductPage])

   return (
      <section>
            {error ? (
               <Error label="product"/>
            ) : (
               <Wrapper>
                  <div style={{ position: 'absolute', top: '-1px' }} ref={wrapperBeginRef}></div>

                     <StyledLinkToHome to="/AllProducts" title="all products"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>BACK</StyledLinkToHome>

                     <Content product={product} loading={loading} isStickyBegin={isSticky} isStickyEnd={isStickyEnd} />

                  <div style={{ position: 'absolute', bottom: '0' }} ref={wrapperEndRef}></div>
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;