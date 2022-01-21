import React, { useEffect } from 'react';
import { useProductID } from "../../hooks/useProductID"
import Content from './Content/Content';
import Error from '../404/Error';
import { 
   Wrapper,
} from './ProductPage.styles';
import ShopingCart from './ShopingCart/ShopingCart';
import { StyledLinkToHome } from '../../GlobalStyledComponents/StyledLinkToHome';

const ProductPage = ({ setIsProductPage }) => {
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
                     <StyledLinkToHome label="BACK" title="all products" path="AllProducts" />

                     <Content product={product} loading={loading} /> 

                     <ShopingCart product={product} loading={loading} isDesktop />
               </Wrapper>
            )}
      </section>
   );
};

export default ProductPage;