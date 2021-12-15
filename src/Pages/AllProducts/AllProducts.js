import React, { useEffect, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/productsContext';
import { 
   Wrapper,
   StyledLoading, 
   StyledError, 
   StyledTitle, 
   StyledTitleWrapper, 
   StyledContent, 
} from './AllProducts.styles';
import ProductItem from '../../Components/ProductItem/ProductItem';

const AllProducts = ({AllProducts}) => {
   const { productsCtx, loadingCtx } = useContext(ProductsContext)
   const [error, setError] = useState(false)

   const tl = useRef(null)
   const contentRef = useRef(null)
   const contentLengthRef = useRef(null)
   const searchBarRef = useRef(null)

   useEffect(() => {
      tl.current = gsap.timeline({ paused: !loadingCtx })

      if(tl.current) {
         tl.current
            .to(contentLengthRef.current, {
               opacity: 1,
               duration: .6,
            }, "+=0.2s")
            .to(contentRef.current, {
               opacity: 1,
               duration: .6,
            }, "-=0.6s")
            .to(searchBarRef.current, {
               width: 'auto',
               duration: .6,
            }) 
      }
   }, [loadingCtx])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <StyledTitleWrapper>
                  <h1>ALL PRODUCTS</h1>
                  {loadingCtx ? <span ref={contentLengthRef}>[ {error ? '0' : productsCtx.length} ]</span> : null}
               </StyledTitleWrapper>

               <SearchBar ref={searchBarRef} />
            </StyledTitle>

            {productsCtx.length ? (
               <FiltersBar setError={setError} AllProducts={AllProducts} />
            ) : <div style={{height: '118px', width: '100%'}}></div>} {/* placeholder dla filtrow*/}
         </header>

         <article>
            {loadingCtx ? (
               <>
                  {error ? (
                     <StyledError>
                        <h1>Nothing was found! :C</h1>
                     </StyledError>
                  ) : (
                     <StyledContent ref={contentRef}>
                        {productsCtx.map(
                           ({ id, images = [], price, title, category }, props) => (
                              <ProductItem
                                 id={id}
                                 image={images[0].url}
                                 price={price}
                                 title={title}
                                 category={category}
                              />
                           )
                        )}
                     </StyledContent>
                  )}
               </>
            ) : (
               <StyledLoading>
                  <LoadingScreen />
               </StyledLoading>
            )}
         </article>
      </Wrapper>
   );
};

export default AllProducts;