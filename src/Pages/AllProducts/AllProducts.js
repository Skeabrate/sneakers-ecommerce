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

   const t1 = useRef(null)
   const t2 = useRef(null)
   const contentRef = useRef(null)
   const productsCountRef = useRef(null)
   const searchBarRef = useRef(null)

   useEffect(() => {
      window.scrollTo(0, 0)
      t1.current = gsap.timeline({ paused: false })
      if(t1.current) {
         t1.current
            .to(searchBarRef.current, {
               width: 'auto',
               duration: .6,
            }) 
      }
   }, [])

   useEffect(() => {
      t2.current = gsap.timeline({ paused: !loadingCtx })

      if(t2.current) {
         t2.current
            .to(productsCountRef.current, {
               opacity: 1,
               duration: .6,
            }, "+=0.2s")
            .to(contentRef.current, {
               opacity: 1,
               duration: .6,
            }, "-=0.6s")
            
      }
   }, [loadingCtx])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <StyledTitleWrapper>
                  <h1>All Products</h1>
                  {loadingCtx ? <span ref={productsCountRef}>[ {error ? '0' : productsCtx.length} ]</span> : null}
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