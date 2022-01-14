import React, { useEffect } from 'react';
import { useProductID } from "../../hooks/useProductID"
import Content from './Content/Content';
import Error from '../404/Error';
import { 
   Wrapper,
   StyledLinkToHome, 
} from './ProductPage.styles';
import ShopingCart from './ShopingCart/ShopingCart';

const ProductPage = ({setIsProductPage}) => {
   const [product, loading, error] = useProductID() // fetch product from context if it exists if not - fetch from CMS

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
                     <StyledLinkToHome to="/AllProducts" title="all products"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>BACK</StyledLinkToHome>

                     <Content product={product} loading={loading} /> 

                     <ShopingCart product={product} loading={loading} isDesktop />
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;